import { GAME_STATUS_LABELS, type GameStatus } from "@/lib/types/game-status";
import { getGameStatus } from "@/lib/utils/gameStatus";

type GameBadgeProps = {
  status: GameStatus;
};

export default function GameBadge({status}: GameBadgeProps) {
  const badge = () => {
    switch (getGameStatus(status)) {
      case 'active':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            {GAME_STATUS_LABELS[status]}
          </span>
        );
      case 'completed':
        return (
          <span className="px-3 py-1 bg-slate-500 text-white rounded-full text-xs font-semibold">
            {GAME_STATUS_LABELS[status]}
          </span>
        );
      case 'pending':
        return (
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
            {GAME_STATUS_LABELS[status]}
          </span>
        );
      default:
        throw new Error(`Unhandled game status: ${status}`);
    }
  };

  return badge();
}
