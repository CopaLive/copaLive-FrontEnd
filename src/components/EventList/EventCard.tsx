import { CARD, GAME_EVENT, type GameEvent, type GameEventType } from "@/lib/types/game-events";

type EventCardProps = {
  event: GameEvent;
}


function getEventPlayerLabel(event: GameEvent) {
  switch (event.type) {
    case GAME_EVENT.GOAL:
      return event.goal ? event.goal.scorer.name : 'N/A';
    case GAME_EVENT.SUBS:
      return event.subs ? `${event.subs.playerIn.name} → ${event.subs.playerOut.name}` : 'N/A';
    case GAME_EVENT.PENALTY:
      return event.penalty ? event.penalty.player.name : 'N/A';
    case GAME_EVENT.BOOKING:
      return event.booking ? event.booking.player.name : 'N/A';
    default:
      return '';
  }
}

function getEventLabel(type: GameEventType, event: GameEvent) {
  switch (type) {
    case GAME_EVENT.GOAL:
      return 'But !';
    case GAME_EVENT.SUBS:
      return 'Remplacement';
    case GAME_EVENT.PENALTY:
      return 'Penalty';
    case GAME_EVENT.BOOKING:
      return event.booking ? event.booking.card === CARD.YELLOW ? 'Carton Jaune' : 'Carton Rouge' : 'Faute';
    default:
      return '';
  }
}

function getMinute(event: GameEvent) {
  switch (event.type) {
    case GAME_EVENT.GOAL:
      return event.goal ? event.goal.minute.toString() : 'N/A';
    case GAME_EVENT.SUBS:
      return event.subs ? event.subs.minute.toString() : 'N/A';
    case GAME_EVENT.PENALTY:
      return event.penalty ? event.penalty.minute.toString() : 'N/A';
    case GAME_EVENT.BOOKING:
      return event.booking ? event.booking.minute.toString() : 'N/A';
    default:
      return '';
  }
}

function getEventIcon(type: GameEventType, event: GameEvent) {
  switch (type) {
    case GAME_EVENT.GOAL:
      return '⚽';
    case GAME_EVENT.SUBS:
      return '🔄';
    case GAME_EVENT.PENALTY:
      return ' 🥅 ';
    case GAME_EVENT.BOOKING:
      return event.booking ? event.booking.card === CARD.YELLOW ? '🟨' : '🟥' : '😬';
    default:
      return '⚽';
  }
}

function getEventTeam(type: GameEventType, event: GameEvent) {
  switch (type) {
    case GAME_EVENT.GOAL:
      return '⚽';
    case GAME_EVENT.SUBS:
      return event.subs ? event.subs.team.name : '';
    case GAME_EVENT.PENALTY:
      return event.penalty ? event.penalty.team.name : '🥅';
    case GAME_EVENT.BOOKING:
      return event.booking ? event.booking.team.name : '😬';
    default:
      return '⚽';
  }
}

export default function EventCard(props: EventCardProps) {
  const { type } = props.event
  const player = getEventPlayerLabel(props.event)
  
  console.log(props.event)
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 gap-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg min-w-15 text-center">
          {getMinute(props.event)}'
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl">{getEventIcon(type, props.event)}</span>
          <div>
            <div className="font-bold text-slate-900 text-sm sm:text-base">{getEventLabel(type, props.event)}</div>
            {player}
          </div>
        </div>
      </div>

      <div className="text-left sm:text-right w-full sm:w-auto">
        <div className="px-4 py-2 bg-white rounded-lg border border-slate-300 font-medium text-slate-700 text-sm">
          {getEventTeam(type, props.event)}
        </div>
      </div>
    </div>
  );
}