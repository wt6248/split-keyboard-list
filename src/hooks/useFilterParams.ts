import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function useFilterParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeFilters = useMemo(() => {
    const filters: Record<string, string[]> = {};
    searchParams.forEach((value, key) => {
      filters[key] = value.split(",");
    });
    return filters;
  }, [searchParams]);

  const toggle = (key: string, value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const current = next.get(key)?.split(",").filter(Boolean) ?? [];

      if (current.includes(value)) {
        const updated = current.filter((v) => v !== value);
        if (updated.length) {
          next.set(key, updated.join(","));
        } else {
          next.delete(key);
        }
      } else {
        next.set(key, [...current, value].join(","));
      }
      return next;
    });
  };

  const setFilter = (key: string, value: string) => {
    console.log(`set ${key} to ${value}`)
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(key, value);
      return next;
    });
  };

  const setSortFilter = (sortBy: string, sortOrder: string) => {
  setSearchParams((prev) => {
    const next = new URLSearchParams(prev);
    next.set('sortBy', sortBy);
    next.set('sortOrder', sortOrder);
    return next;
  });
};

  return { activeFilters, toggle, setFilter, setSortFilter}
}

export default useFilterParams;
