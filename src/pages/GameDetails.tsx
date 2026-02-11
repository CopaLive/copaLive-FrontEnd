import BackButton from "@/components/Buttons/BackButton";
import EventList from "@/components/EventList/EventList";
import GameCard from "@/components/GameCard/GameCard";
import { GAME_STAGES } from "@/lib/types/competition-stages";
import type { Game, Team } from "@/lib/types/game";
import { CARD } from "@/lib/types/game-events";
import { GAME_STATUS } from "@/lib/types/game-status";
import { formatDate } from "@/lib/utils/formatDate";
// import { useParams } from "react-router-dom";

const mockMatch: Game = {
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
  goals: [
    {
      minute: 10,
      scorer: {
        name: "Messi",
        id: "123",
      },
    },
  ],
  substitutions: [
    {
      minute: 50,
      playerIn: {
        id: "15",
        name: "Di Maria",
      },
      playerOut: {
        id: "16",
        name: "Alvarez",
      },
      team: {
        id: "1",
        name: "Argentina",
      },
    },
    {
      minute: 55,
      playerIn: {
        id: "17",
        name: "Kimpembe",
      },
      playerOut: {
        id: "18",
        name: "Laporte",
      },
      team: {
        id: "2",
        name: "France",
      },
    },
  ],
  penalties: [
    {
      minute: 50,
      player: {
        name: "Messi",
        id: "123",
      },
      team: {
        id: "1",
        name: "Argentina",
      },
    },
  ],
  bookings: [
    {
      minute: 65,
      player: {
        id: "15",
        name: "Di Maria",
      },
      team: {
        id: "1",
        name: "Argentina",
      },
      card: CARD.YELLOW,
    },
    {
      minute: 80,
      player: {
        id: "17",
        name: "Kimpembe",
      },
      team: {
        id: "2",
        name: "France",
      },
      card: CARD.YELLOW,
    },
  ],
};

export default function GameDetails() {
  // const { id } = useParams();

  const date = formatDate(mockMatch.date)
  

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <BackButton url="/" />
      
      <GameCard game={mockMatch} seeMore={false} />
      
      <EventList game={mockMatch} />
    </div>
  )
}
