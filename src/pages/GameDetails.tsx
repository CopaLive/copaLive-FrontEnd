import BackButton from "@/components/Buttons/BackButton";
import EventList from "@/components/EventList/EventList";
import GameCard from "@/components/GameCard/GameCard";
import { useGame } from "@/hooks/useGame";
import { GAME_STAGES } from "@/lib/types/competition-stages";
import type { Game, Team } from "@/lib/types/game";
import { CARD } from "@/lib/types/game-events";
import { GAME_STATUS } from "@/lib/types/game-status";
import { Link, useParams } from "react-router-dom";

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
  
  const { data } = useGame();
  
  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-xl text-slate-600">Match non trouvé</p>
        <Link
          to="/"
          className="text-green-600 hover:text-green-700 underline mt-4 inline-block"
        >
          Retour à la liste des matchs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <BackButton url="/" />

      <GameCard game={data} seeMore={false} />

      <EventList game={data} />
    </div>
  );
}
