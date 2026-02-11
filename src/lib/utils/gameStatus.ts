import { GAME_STATUS, type GameStatus } from "../types/game-status";

export function getGameStatus(status: GameStatus) {
  switch (status) {
    case GAME_STATUS.LIVE:
    case GAME_STATUS.IN_PLAY:
    case GAME_STATUS.PAUSED:
      return 'active';
    
    case GAME_STATUS.FINISHED:
    case GAME_STATUS.CANCELLED:
      return 'completed';
    
    case GAME_STATUS.SCHEDULED:
    case GAME_STATUS.POSTPONED:
    case GAME_STATUS.SUSPENDED:
      return 'pending';
    
    default:
      throw new Error(`Unhandled game status: ${status}`);
  }
}

export function isActiveGame(status: GameStatus): boolean {
  return getGameStatus(status) === 'active';
}

export function isCompletedGame(status: GameStatus): boolean {
  return getGameStatus(status) === 'completed';
}

export function isPendingGame(status: GameStatus): boolean {
  return getGameStatus(status) === 'pending';
}