import { Trophy, Crown, Zap } from "lucide-react";
import { useGames } from "@/hooks/useGames";
import BracketCard from "@/components/BracketCard/BracketCard";
import { GAME_STAGE_LABELS, GAME_STAGES } from "@/lib/types/competition-stages";
import type { Game } from "@/lib/types/game";
import { Spinner } from "@/components/ui/spinner";

export default function TournamentBracket() {
  const { data, isLoading } = useGames();
  const games = data?.games || ([] as Game[]);

  const roundOf16 = games.filter((g) => g.stage === GAME_STAGES.LAST_16) || [];
  const quarterFinals =
    games.filter((g) => g.stage === GAME_STAGES.QUARTER_FINALS) || [];
  const semiFinals =
    games.filter((g) => g.stage === GAME_STAGES.SEMI_FINALS) || [];
  const final = games.find((g) => g.stage === GAME_STAGES.FINAL);

  return (
    <div className="max-w-450 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* En-tête */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-linear-to-br from-yellow-400 to-yellow-600 p-4 rounded-2xl shadow-xl">
            <Trophy className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-2">
          Coupe du Monde 2026
        </h1>
        <p className="text-xl text-slate-600">Tournoi complet</p>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="hidden xl:block">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-center font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">
                  {GAME_STAGE_LABELS.LAST_16}
                </h3>
                {roundOf16.map((match) => (
                  <BracketCard key={match.id} match={match} />
                ))}
                {Array.from({ length: 8 - roundOf16.length }).map(
                  (_, index) => (
                    <BracketCard key={index} match={null} />
                  ),
                )}
              </div>

              <div className="flex flex-col justify-around h-full py-12 gap-30">
                <div className="h-px w-8 bg-slate-300"></div>
                <div className="h-px w-8 bg-slate-300"></div>
              </div>

              <div className="space-y-6">
                <h3 className="text-center font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">
                  {GAME_STAGE_LABELS.QUARTER_FINALS}
                </h3>
                <div className="space-y-22">
                  {quarterFinals.map((match) => (
                    <BracketCard key={match.id} match={match} />
                  ))}
                  {Array.from({ length: 4 - quarterFinals.length }).map(
                    (_, index) => (
                      <BracketCard key={index} match={null} />
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-around h-full py-24">
                <div className="h-px w-8 bg-slate-300"></div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-center font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">
                    {GAME_STAGE_LABELS.SEMI_FINALS}
                  </h3>
                  <div className="space-y-45">
                    {semiFinals.map((match) => (
                      <BracketCard key={match.id} match={match} />
                    ))}
                    {Array.from({ length: 2 - semiFinals.length }).map(
                      (_, index) => (
                        <BracketCard key={index} match={null} />
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="h-px w-8 bg-slate-300"></div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="mb-6">
                  <div className="bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-white font-extrabold text-lg px-6 py-3 rounded-full shadow-xl flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    {GAME_STAGE_LABELS.FINAL}
                  </div>
                </div>
                {final ? (
                  <BracketCard match={final} isFinal />
                ) : (
                  <BracketCard match={null} />
                )}
              </div>
            </div>
          </div>

          {/* Légende */}
          <div className="mt-12 bg-linear-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-green-600" />
              Légende
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-yellow-500" />
                <span className="text-slate-700">Équipe qualifiée</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span className="text-slate-700">Score vainqueur</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-500" />
                <span className="text-slate-700">Match en direct</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="text-slate-700">Tirs au but</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
