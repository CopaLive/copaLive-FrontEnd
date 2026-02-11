import type { Game } from "@/lib/types/game";
import { formatEvents } from "@/lib/utils/formatEvents";
import { Clock } from "lucide-react";
import EventCard from "./EventCard";

type EventListProps = {
  game: Game;
};

export default function EventList(props: EventListProps) {
  
  const events = formatEvents(props.game);

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mt-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        <Clock className="w-8 h-8 text-green-600" />
        Événements du match
      </h2>
      
      {events.length ? (
        <div className="space-y-4">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          <Clock className="w-16 h-16 mx-auto mb-4 text-slate-300" />
          <p className="text-lg">Aucun événement pour ce match</p>
        </div>
      )}
    </div>
  );
}
