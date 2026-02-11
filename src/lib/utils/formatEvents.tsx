import type { Game } from "../types/game";
import { GAME_EVENT, type GameEvent } from "../types/game-events";

export function formatEvents(game: Game): GameEvent[] {
  const { substitutions, goals, bookings, penalties } = game;
  return [
    substitutions ? substitutions.map(s => ({subs: s, type: GAME_EVENT.SUBS, minute: s.minute})) : [],
    goals ? goals.map(g => ({goal: g, type: GAME_EVENT.GOAL, minute: g.minute})) : [],
    bookings ? bookings.map(b => ({booking: b, type: GAME_EVENT.BOOKING, minute: b.minute})) : [],
    penalties ? penalties.map(p => ({penalty: p, type: GAME_EVENT.PENALTY, minute: p.minute})) : []
  ]
    .flat()
    .sort((a, b) => b.minute - a.minute)
}
