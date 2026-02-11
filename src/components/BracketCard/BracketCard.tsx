import type { Game } from "@/lib/types/game";
import { GAME_STATUS_LABELS } from "@/lib/types/game-status";
import { formatDate } from "@/lib/utils/formatDate";
import { isActiveGame, isCompletedGame } from "@/lib/utils/gameStatus";
import { Calendar, Crown, Zap } from "lucide-react";

type BracketCardProps = {
  match: Game | null;
  isFinal?: boolean;
};

export default function BracketCard({ match, isFinal = false }: BracketCardProps) {
  
  if (!match) return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all hover:shadow-lg border-slate-200 ${isFinal ? 'scale-110' : ''}`}>
      {/* En-tête du match */}
      <div className={`px-3 py-2 text-xs font-semibold flex items-center justify-between bg-slate-100 text-slate-600`}>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {GAME_STATUS_LABELS.SCHEDULED}
        </div>
      </div>

      {/* Équipes */}
      <div className="divide-y divide-slate-200">
        {/* Équipe 1 */}
        <div className={`flex items-center justify-between px-4 py-3 transition-colors bg-white`}>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">A définir</span>
          </div>
          <span className="text-sm font-semibold">0</span>
        </div>

        {/* Équipe 2 */}
        <div className={`flex items-center justify-between px-4 py-3 transition-colors bg-white`}>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">A définir</span>
          </div>
          <span className="text-sm font-semibold">0</span>
        </div>
      </div>
    </div>
  )
  
  const isTeam1Winner = match.homeTeam.score && match.awayTeam.score && match.homeTeam.score > match.awayTeam.score;
  const isTeam2Winner = match.homeTeam.score && match.awayTeam.score && match.homeTeam.score < match.awayTeam.score;

  const isLive = isActiveGame(match.status)
  const isDone = isCompletedGame(match.status)
  
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all hover:shadow-lg ${
      isLive ? 'border-red-500 shadow-red-200' : 'border-slate-200'
    } ${isFinal ? 'scale-110' : ''}`}>
      {/* En-tête du match */}
      <div className={`px-3 py-2 text-xs font-semibold flex items-center justify-between ${
        isLive ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-600'
      }`}>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {formatDate(match.date)}
        </div>
        {isLive && (
          <div className="flex items-center gap-1 animate-pulse">
            <Zap className="w-3 h-3" />
            EN DIRECT
          </div>
        )}
      </div>

      {/* Équipes */}
      <div className="divide-y divide-slate-200">
        {/* Équipe 1 */}
        <div className={`flex items-center justify-between px-4 py-3 transition-colors ${
          isTeam1Winner ? 'bg-green-50' : isDone ? 'bg-slate-50' : ''
        }`}>
          <div className="flex items-center gap-2 flex-1">
            {isTeam1Winner && (
              <Crown className="w-4 h-4 text-yellow-500" />
            )}
            <span className={`font-semibold ${
              isTeam1Winner ? 'text-green-700' : 'text-slate-700'
            }`}>
              {match.homeTeam.name}
            </span>
          </div>
          {match.homeTeam.score !== undefined && (
            <div className={`text-xl font-bold px-3 py-1 rounded-lg ${
              isTeam1Winner ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {match.homeTeam.score}
            </div>
          )}
        </div>

        {/* Équipe 2 */}
        <div className={`flex items-center justify-between px-4 py-3 transition-colors ${
          isTeam2Winner ? 'bg-green-50' : isDone ? 'bg-slate-50' : ''
        }`}>
          <div className="flex items-center gap-2 flex-1">
            {isTeam2Winner && (
              <Crown className="w-4 h-4 text-yellow-500" />
            )}
            <span className={`font-semibold ${
              isTeam2Winner ? 'text-green-700' : 'text-slate-700'
            }`}>
              {match.awayTeam.name}
            </span>
          </div>
          {match.awayTeam.score !== undefined && (
            <div className={`text-xl font-bold px-3 py-1 rounded-lg ${
              isTeam2Winner ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {match.awayTeam.score}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};