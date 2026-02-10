export type GameStatus =
  | "SCHEDULED"
  | "LIVE"
  | "IN_PLAY"
  | "PAUSED"
  | "FINISHED"
  | "POSTPONED"
  | "SUSPENDED"
  | "CANCELLED";

export const GAME_STATUS = {
  SCHEDULED: "SCHEDULED",
  LIVE: "LIVE",
  IN_PLAY: "IN_PLAY",
  PAUSED: "PAUSED",
  FINISHED: "FINISHED",
  POSTPONED: "POSTPONED",
  SUSPENDED: "SUSPENDED",
  CANCELLED: "CANCELLED",
} as const;

export const GAME_STATUS_LABELS: Record<GameStatus, string> = {
  SCHEDULED: "Programmé",
  LIVE: "En direct",
  IN_PLAY: "En cours",
  PAUSED: "Mi-temps",
  FINISHED: "Terminé",
  POSTPONED: "Reporté",
  SUSPENDED: "Suspendu",
  CANCELLED: "Annulé",
};

// Variantes de badge pour shadcn/ui
export const GAME_STATUS_VARIANTS: Record<
  GameStatus,
  "default" | "secondary" | "destructive" | "outline"
> = {
  SCHEDULED: "outline",
  LIVE: "destructive",
  IN_PLAY: "destructive",
  PAUSED: "secondary",
  FINISHED: "default",
  POSTPONED: "outline",
  SUSPENDED: "outline",
  CANCELLED: "secondary",
};
