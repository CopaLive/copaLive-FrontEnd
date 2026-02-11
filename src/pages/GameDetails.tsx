import BackButton from "@/components/Buttons/BackButton";
import EventList from "@/components/EventList/EventList";
import GameCard from "@/components/GameCard/GameCard";
import { useGame } from "@/hooks/useGame";
import { Link } from "react-router-dom";

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
