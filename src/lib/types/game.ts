import type { GameStage } from "./competition-stages";
import type { Booking, Goal, Penalty, Subs } from "./game-events";
import type { GameStatus } from "./game-status";

export type Team = {
  id: string;
  name: string;
  shortName: string;
  flag: string;
  score?: number
}

export type Game = {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  status: GameStatus;
  stage: GameStage;
  date: string;
  goals?: Goal[];
  substitutions?: Subs[];
  penalties?: Penalty[];
  bookings?: Booking[]
}

