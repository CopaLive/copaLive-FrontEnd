import type { Game } from "@/lib/types/game"
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./fetchApi";
import { DateUtils } from "@/lib/DateUtils";

export type GamesListResponse = {
  games: Game[]
}

export function useGames() {
  const { fetchApi } = apiClient
  const { data, isLoading, error } = useQuery({
    queryKey: ['matches'],
    queryFn: async () => {
      const result = await fetchApi<GamesListResponse>('/games')
      const response = result.games.sort((a, b) => DateUtils.valueOf(b.date) - DateUtils.valueOf(a.date))
      return { games: response }
    },
    // Polling intelligent : rafraîchir si des matchs sont en direct
    refetchInterval: 30000,
    // Données fraîches pendant 30 secondes
    staleTime: 30000
  });
  
  return { data, isLoading, error };
}
