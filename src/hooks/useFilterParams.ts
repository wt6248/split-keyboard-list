import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function useFilterParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const activeFilters = useMemo(() => {
        const filters: Record<string, string[]> = {};
        searchParams.forEach((value, key) => {
            filters[key] = value.split(",");
        })
        return filters

    }, [searchParams])

    const toggle = (key: string, value: string) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            const current = next.get(key)?.split(',').filter(Boolean) ?? [];

            if (current.includes(value)) {
                const updated = current.filter((v) => v !== value);
                updated.length ? next.set(key, updated.join(',')) : next.delete(key);
            } else {
                next.set(key, [...current, value].join(","))
            }
            return next;
        });
    };
    const get = (key: string) => searchParams.get(key);

    return { activeFilters, toggle, get };
}

export default useFilterParams