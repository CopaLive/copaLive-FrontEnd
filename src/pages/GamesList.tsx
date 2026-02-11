import GameCard from "@/components/GameCard/GameCard";
import { Spinner } from "@/components/ui/spinner";
import { useGames } from "@/hooks/useGames";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function GamesList() {
  const { data, isLoading } = useGames();
  const games = data?.games || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">
          Matchs de la compétition
        </h2>
        <p className="text-slate-600">
          Suivez tous les matchs en direct et consultez les résultats
        </p>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {games.length ? (
            <div className="grid gap-6">
              {games.map((game) => (
                <Link key={game.id} to={`/games/${game.id}`}>
                  <GameCard game={game} seeMore={true} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              <Clock className="w-16 h-16 mx-auto mb-4 text-slate-300" />
              <p className="text-lg">Aucun événement pour ce match</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
