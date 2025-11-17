"use client";

import CompetitionCountdown from "./CompetitionCountdown";

export interface Competition {
  _id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  puzzleIds: number[];
  participantCount?: number;
}

export interface CompetitionData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  competitions: Competition[];
}

type CompetitionStatus = "active" | "upcoming" | "ended";

function getCompetitionStatus(competition: Competition): CompetitionStatus {
  const now = new Date();
  const startDate = new Date(competition.startDate);
  const endDate = new Date(competition.endDate);

  if (now < startDate) {
    return "upcoming";
  } else if (now >= startDate && now <= endDate) {
    return "active";
  } else {
    return "ended";
  }
}

interface CompetitionListProps {
  competitionData: CompetitionData;
  selectedCompetitionId: string | null;
  onSelectCompetition: (competitionId: string) => void;
  onStartCompetition?: (competitionId: string) => void;
}

export default function CompetitionList({
  competitionData,
  selectedCompetitionId,
  onSelectCompetition,
  onStartCompetition,
}: CompetitionListProps) {
  const handleStartClick = (e: React.MouseEvent, competitionId: string) => {
    e.stopPropagation();
    console.log({ competitionId });
    if (onStartCompetition) {
      onStartCompetition(competitionId);
    } else {
      onSelectCompetition(competitionId);
    }
  };

  return (
    <div className="min-w-[300px] bg-white rounded-lg shadow-md p-4 max-h-[600px] overflow-y-auto">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Competitions</h3>
      {competitionData.competitions.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No competitions available
        </p>
      ) : (
        <div className="space-y-3">
          {competitionData.competitions.map((competition) => {
            const status = getCompetitionStatus(competition);
            const isSelected = selectedCompetitionId === competition._id;
            const startDate = new Date(competition.startDate);
            const endDate = new Date(competition.endDate);

            const getStatusBadge = () => {
              switch (status) {
                case "active":
                  return (
                    <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded">
                      Active
                    </span>
                  );
                case "upcoming":
                  return (
                    <span className="ml-2 px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                      Upcoming
                    </span>
                  );
                case "ended":
                  return (
                    <span className="ml-2 px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded">
                      Ended
                    </span>
                  );
              }
            };

            return (
              <div
                key={competition._id}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  isSelected
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      {competition.name}
                    </h4>
                    {competition.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {competition.description}
                      </p>
                    )}
                    <div className="mt-2">
                      {status === "active" && (
                        <CompetitionCountdown
                          targetDate={endDate}
                          type="ends"
                        />
                      )}
                      {status === "upcoming" && (
                        <CompetitionCountdown
                          targetDate={startDate}
                          type="starts"
                        />
                      )}
                      {status === "ended" && (
                        <div className="text-xs text-gray-500 mt-1">
                          Ended: {endDate.toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>
                        {startDate.toLocaleDateString()} -{" "}{endDate.toLocaleDateString()}
                      </span>
                      {competition.participantCount !== undefined && (
                        <span>{competition.participantCount} participants</span>
                      )}
                    </div>
                  </div>
                  {getStatusBadge()}
                </div>
                {status === "ended" ? (
                  <button
                    onClick={(e) => handleStartClick(e, competition._id)}
                    className="w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
                  >
                    Practice
                  </button>
                ) : status === "upcoming" ? (
                  <div className="w-full mt-2 px-4 py-2 bg-gray-300 text-gray-600 font-semibold rounded-lg text-sm text-center cursor-not-allowed">
                    Competition Not Started Yet
                  </div>
                ) : (
                  <button
                    onClick={(e) => handleStartClick(e, competition._id)}
                    className="w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
                  >
                    Start Competition
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
