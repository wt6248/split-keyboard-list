import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { supabase } from "./supabase";

export interface GetPageParams {
  filters?: Record<string, string[]>;
}
function applyFilters(
  query: PostgrestFilterBuilder<any, any, any, any>,
  filters: Record<string, string[]>
) {
      console.log("filters:", filters);

  Object.entries(filters).forEach(([key, values]) => {
    if (
      values.length === 0 ||
      ["page", "perPage", "sortBy", "sortOrder"].includes(key)
    )
      return;

    if (key === "matrix_rows" || key === "matrix_cols") {
      const exact: number[] = [];
      let gte: number | null = null;
      let lte: number | null = null;

      values.forEach((v) => {
        if (v.endsWith("+")) gte = Number(v.replace("+", ""));
        else if (v.endsWith("-")) lte = Number(v.replace("-", ""));
        else exact.push(Number(v));
      });

      const conditions: string[] = [];
      if (gte !== null) conditions.push(`${key}.gte.${gte}`);
      if (lte !== null) conditions.push(`${key}.lte.${lte}`);
      exact.forEach((n) => conditions.push(`${key}.eq.${n}`));

    console.log("or conditions:", conditions.join(","));
      query = query.or(conditions.join(","));
    } else {
      query = query.in(key, values);
    }
  });

  return query;
}

export const keyboardApi = {

  getPage: async ({
    
    filters = {},
  }: GetPageParams = {}) => {
    const page = Number(filters.page?.[0]) || 1;
    const sortBy = filters.sortBy?.[0] || "name";
    const sortOrder = (filters.sortOrder?.[0] || "asc") as "asc" | "desc";
    const perPage = 9;
    const from = (page - 1) * perPage;
    const to = from + perPage - 1;

    let query = supabase
      .from("keyboards")
      .select("*", { count: "exact" })
      .order(sortBy, { ascending: sortOrder === "asc", nullsFirst: false  })
      .range(from, to);

    // --- 필터 적용 ---
    query = applyFilters(query, filters);

    const { data, count, error } = await query;
    if (error) throw error;

    return {
      keyboards:
        data?.map((keyboard) => ({
          ...keyboard,
          image_url:
            import.meta.env.VITE_SUPABASE_IMAGE_PATH + keyboard.image_path,
        })) ?? [],
      totalCount: count ?? 0,
      totalPages: Math.ceil((count ?? 0) / perPage),
      currnetPage: page,
    };
  },
  getPageCount: async (filters: Record<string, string[]> = {}) => {
    let query = supabase
      .from("keyboards")
      .select("*", { count: "exact", head: true });

    query = applyFilters(query, filters);

    const { count } = await query;
    return Math.ceil((count ?? 0) / 9);
  },
};
