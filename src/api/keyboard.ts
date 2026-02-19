import { supabase } from "./supabase"

interface GetPageParams {
    page?: number;
    perPage?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    filters?: Record<string, string[]>;
}
function applyFilters(
  query: any,
  filters: Record<string, string[]>
) {
  Object.entries(filters).forEach(([key, values]) => {
    if (values.length === 0) return;

    if (key === "matrix_row" || key === "matrix_column") {
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

      query = query.or(conditions.join(","));
    } else {
      query = query.in(key, values);
    }
  });

  return query;
}

export const keyboardApi = {
    getAll: async () => {

        const { data } = await supabase.from('keyboards').select('*')
        return data?.map(kb => ({
            ...kb,
            image_url: import.meta.env.VITE_SUPABASE_IMAGE_PATH + kb.image_path
        }))
    },
    getPage: async ({
        page = 1,
        perPage = 9,
        sortBy = "name",
        sortOrder = "desc",
        filters = {},
    }: GetPageParams = {}) => {
        const from = (page - 1) * perPage;
        const to = from + perPage - 1;

        let query = supabase
            .from("keyboards")
            .select("*", { count: "exact" })
            .order(sortBy, { ascending: sortOrder === 'asc' })
            .range(from, to);

        // --- 필터 적용 ---
        query = applyFilters(query, filters);

        const { data, count, error } = await query;
        if (error) throw error;

        return {
            data: data?.map((keyboard) => ({
                ...keyboard,
                image_url: import.meta.env.VITE_SUPABASE_IMAGE_PATH + keyboard.image_path,
            })) ?? [],
            totalCount: count ?? 0,
            totalPages: Math.ceil((count ?? 0) / perPage),
            currnetPage: page,
        }

    },
    getPageCount: async (filters: Record<string, string[]> = {}) => {
        let query = supabase
            .from("keyboards")
            .select("*", { count: "exact", head: true });

        // 필터 적용 (getAll과 동일한 로직)
        query = applyFilters(query, filters);

        const { count } = await query;
        return Math.ceil((count ?? 0) / 9);
    },

    getById: async (id: string) => {
        //tbd
        return id
    },


    create: async () => {
        //tbd

    },

    getImageURL: (keyboardId: string) => {
        console.log(import.meta.env.VITE_SUPABASE_IMAGE_PATH)
        return import.meta.env.VITE_SUPABASE_IMAGE_PATH + keyboardId
    }
}