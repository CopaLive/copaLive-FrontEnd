import type { Game } from "@/lib/types/game"
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./fetchApi";
import { useParams } from "react-router-dom";

export function useGame() {
  const { fetchApi } = apiClient
  const { id } = useParams();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['match', id],
    queryFn: async () => fetchApi<Game>(`/game/${id}`),
    // Rafraîchir si des matchs sont en direct
    refetchInterval: 30000,
    // Données fraîches pendant 30 secondes
    staleTime: 30000,
    enabled: Boolean(id)
  });
  
  return { data, isLoading, error };
}
