import type { Game } from "@/lib/types/game";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { useMemo } from "react";
import { formatDate } from "@/lib/utils/formatDate";
import { GAME_STAGE_LABELS } from "@/lib/types/competition-stages";
import GameBadge from "./GameBadge";
import { isPendingGame } from "@/lib/utils/gameStatus";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type GameCardProps = {
  game: Game,
  seeMore: boolean
}

export default function GameCard(props: GameCardProps) {
  const { game, seeMore } = props;
  const date = useMemo(() => formatDate(game.date), [game.date])
  
  const isPending = isPendingGame(game.status)
  
  return (
    <Card>
      <CardHeader>
        <CardDescription>{date}  -  {GAME_STAGE_LABELS[game.stage]}</CardDescription>
        <CardAction>
          <GameBadge status={game.status} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          {/* Équipe domicile */}
          <div className="flex-1 text-center">
            <div className="text-lg sm:text-2xl font-bold text-slate-900 mb-2">{game.homeTeam.name}</div>
            {!isPending && (
              <div className="text-3xl sm:text-4xl font-extrabold text-green-600">{game.homeTeam.score}</div>
            )}
          </div>

          {/* VS / Score */}
          <div className="px-4 sm:px-8">
            {isPending ? (
              <div className="text-xl sm:text-2xl font-bold text-slate-400">VS</div>
            ) : (
              <div className="text-2xl sm:text-3xl font-bold text-slate-300">-</div>
            )}
          </div>

          {/* Équipe extérieure */}
          <div className="flex-1 text-center">
            <div className="text-lg sm:text-2xl font-bold text-slate-900 mb-2">{game.awayTeam.name}</div>
            {!isPending && (
              <div className="text-3xl sm:text-4xl font-extrabold text-green-600">{game.awayTeam.score}</div>
            )}
          </div>
        </div>
      </CardContent>
      {seeMore ?? <CardFooter>
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-center text-green-600 font-medium group-hover:text-green-700 w-full">
          <Button variant="ghost">
            <span>Voir les détails</span>
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardFooter>}
    </Card>
  )
}