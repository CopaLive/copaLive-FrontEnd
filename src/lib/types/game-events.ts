import type { Team } from "./game";

export type Goal = {
  minute: number;
  scorer: {
    id: string;
    name: string;
  }
  team: Team;
  type: 'NORMAL' | 'PENALTY' | 'OWN_GOAL';
}

export type Subs = {
  minute: number;
  team: {
    id: string;
    name: string;
  }
  playerIn: {
    id: string;
    name: string;
  };
  playerOut: {
    id: string;
    name: string;
  };
}

export type Penalty = {
  minute: number;
  team: {
    id: string;
    name: string;
  }
  player: {
    id: string;
    name: string;
  };
}

export type Card = "RED" | "YELLOW";
export const CARD = {
  RED: "RED",
  YELLOW: "YELLOW"
} as const;

export type Booking = {
  minute: number;
  team: Team;
  player: {
    id: string;
    name: string;
  };
  card: Card;
}

export type GameEventType = "GOAL" | "SUBS" | "PENALTY" | "BOOKING";
export const GAME_EVENT = {
  GOAL: "GOAL",
  SUBS: "SUBS",
  PENALTY: "PENALTY",
  BOOKING: "BOOKING"
} as const;

export type GameEvent = {
  type: GameEventType;
  minute: number;
  goal?: Goal;
  subs?: Subs;
  penalty?: Penalty;
  booking?: Booking;
};
