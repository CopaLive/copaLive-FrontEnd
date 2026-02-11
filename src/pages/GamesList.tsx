import GameCard from "@/components/GameCard/GameCard";
import { GAME_STAGES } from "@/lib/types/competition-stages";
import type { Game, Team } from "@/lib/types/game";
import { GAME_STATUS } from "@/lib/types/game-status";
import { Link } from "react-router-dom";


const mockGames: Game[] = [
  {
    id: "1",
    homeTeam: {
      name: "Brazil",
      flag: "/logos/brazil.png",
      score: 0,
    } as Team,
    awayTeam: {
      name: "Argentina",
      flag: "/logos/argentina.png",
      score: 0,
    } as Team,
    date: "2022-11-20T18:00:00Z",
    stage: GAME_STAGES.SEMI_FINALS,
    status: GAME_STATUS.SCHEDULED,
  },
  {
    id: "2",
    homeTeam: {
      name: "France",
      flag: "/logos/france.png",
      score: 1,
    } as Team,
    awayTeam: {
      name: "England",
      flag: "/logos/england.png",
      score: 0,
    } as Team,
    date: "2022-11-21T18:00:00Z",
    stage: GAME_STAGES.SEMI_FINALS,
    status: GAME_STATUS.SCHEDULED,
  },
];

export default function GamesList() {
  
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Matchs de la compétition</h2>
        <p className="text-slate-600">Suivez tous les matchs en direct et consultez les résultats</p>
      </div>
      
      <div className="grid gap-6">
        {mockGames.map(game => (
          <Link to={`/games/${game.id}`}>
            <GameCard key={game.id} game={game} seeMore={true} />
          </Link>
        ))}
      </div>
      
    </div>
  );
}
