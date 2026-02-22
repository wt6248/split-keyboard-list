import { useQuery } from "@tanstack/react-query";
import { keyboardApi, type GetPageParams } from "../api/keyboard";

export function useKeyboards(params?: GetPageParams) {
  return useQuery({
    queryKey: ["keyboards", params],
    queryFn: () => keyboardApi.getPage(params),
  });
}