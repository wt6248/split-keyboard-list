import { useQuery } from "@tanstack/react-query";
import { keyboardApi } from "../api/keyboard";

export function useKeyboards() {
    return useQuery({
        queryKey: ['keyboards'],
        queryFn: keyboardApi.getAll
    })
}