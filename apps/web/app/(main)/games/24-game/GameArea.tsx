"use client";

import { useState, useEffect, useRef } from "react";
import Game from "./Game";
import GameModeSelector from "./GameModeSelector";
import CompetitionList, { CompetitionData } from "./CompetitionList";
import Leaderboard, { LeaderboardEntry } from "./Leaderboard";
import CompetitionStats from "./CompetitionStats";
import CompetitionCountdown from "./CompetitionCountdown";
import { data } from "./Game/data";
import { updateGlobalLeaderboard } from "./updateLeaderboard";
import { useSession } from "next-auth/react";
import { createCompetitionLeaderboardEntry } from "./createCompetitionLeaderboardEntry";

interface LeaderboardData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  leaderboard: LeaderboardEntry[];
}
interface GameAreaProps {
  initialPuzzleId?: number;
  competitionData: CompetitionData;
  leaderboardData: LeaderboardData;
}

// Generate 10 random puzzle IDs
const generateRandomPuzzleIds = (count: number = 10): number[] => {
  const maxId = data.length;
  const ids: number[] = [];
  const usedIds = new Set<number>();

  while (ids.length < count) {
    const randomId = Math.floor(Math.random() * maxId) + 1; // IDs start from 1
    if (!usedIds.has(randomId)) {
      ids.push(randomId);
      usedIds.add(randomId);
    }
  }

  return ids;
};

export default function GameArea({
  initialPuzzleId,
  competitionData,
  leaderboardData,
}: GameAreaProps) {
  const [mode, setMode] = useState<"puzzle" | "competition">("puzzle");
  const [selectedCompetitionId, setSelectedCompetitionId] = useState<
    string | null
  >(null);
  const [competitionPuzzleIds, setCompetitionPuzzleIds] = useState<number[]>(
    []
  );
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [competitionStarted, setCompetitionStarted] = useState(false);
  const [solvedPuzzleIndices, setSolvedPuzzleIndices] = useState<Set<number>>(
    new Set()
  );
  const [competitionDuration, setCompetitionDuration] = useState<number>(60); // Default 10 minutes
  const [competitionEnded, setCompetitionEnded] = useState(false);
  const competitionEndedRef = useRef(false);
  const [competitionStartTime, setCompetitionStartTime] = useState<
    number | null
  >(null);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const timeElapsedRef = useRef<number>(0);
  const [globalLeaderboard, setGlobalLeaderboard] = useState<
    LeaderboardEntry[]
  >(leaderboardData.leaderboard);
  const [competitionLeaderboard, setCompetitionLeaderboard] = useState<
    LeaderboardEntry[]
  >([]);
  const [isLoadingCompetitions, setIsLoadingCompetitions] = useState(false);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(false);

  const { data: session } = useSession();

  // Fetch competition data when selected
  useEffect(() => {
    if (selectedCompetitionId && mode === "competition") {
      const fetchCompetitionData = async () => {
        try {
          const response = await fetch(
            `/api/24-game/competitions/${selectedCompetitionId}`
          );
          const data = await response.json();
          console.log({ data });
          setCompetitionPuzzleIds(data.competition.puzzleIds || []);
          setCompetitionLeaderboard(data.leaderboard || []);
          setCurrentPuzzleIndex(0);
          setCompetitionStarted(false); // Reset start state when competition changes
          setSolvedPuzzleIndices(new Set());
          // Set duration from competition data if available, otherwise use default
          if (data.competition.duration) {
            setCompetitionDuration(data.competition.duration);
          }
        } catch (error) {
          console.error("Error fetching competition data:", error);
        }
      };

      fetchCompetitionData();
    } else if (mode === "competition" && !selectedCompetitionId) {
      // If no competition selected, generate random puzzle IDs
      setCompetitionPuzzleIds([]);
      setCompetitionLeaderboard([]);
      setCurrentPuzzleIndex(0);
      setCompetitionStarted(false);
      setSolvedPuzzleIndices(new Set());
    }
  }, [selectedCompetitionId, mode]);

  // Reset when switching modes
  useEffect(() => {
    if (mode === "puzzle") {
      setSelectedCompetitionId(null);
      setCompetitionPuzzleIds([]);
      setCurrentPuzzleIndex(0);
      setCompetitionStarted(false);
      setSolvedPuzzleIndices(new Set());
      setCompetitionEnded(false);
      competitionEndedRef.current = false;
      setCompetitionStartTime(null);
      setTimeElapsed(0);
      timeElapsedRef.current = 0;
    }
  }, [mode]);

  useEffect(() => {
    if (competitionEnded && selectedCompetitionId) {
      createCompetitionLeaderboardEntry({
        competitionId: selectedCompetitionId!,
        time: timeElapsedRef.current,
        solvedPuzzleIds: Array.from(solvedPuzzleIndices),
      });
    }
  }, [competitionEnded]);

  const gameSectionRef = useRef<HTMLDivElement>(null);

  const handleSelectCompetition = (competitionId: string) => {
    console.log({ competitionId });
    setSelectedCompetitionId(competitionId);
    setMode("competition");
    setCompetitionStarted(false); // Reset start state when selecting a competition
  };

  const handleStartCompetitionFromList = (competitionId: string) => {
    // Check if competition is active
    const competition = competitionData.competitions.find(
      (c) => c._id === competitionId
    );
    if (!competition) return;

    const now = new Date();
    const startDate = new Date(competition.startDate);
    const endDate = new Date(competition.endDate);

    // Only allow starting if competition is active
    if (now < startDate) {
      // Competition hasn't started yet
      return;
    }

    if (now > endDate) {
      // Competition has ended
      return;
    }

    // Select the competition first
    handleSelectCompetition(competitionId);

    // Scroll to game section on mobile
    if (gameSectionRef.current && window.innerWidth < 1024) {
      setTimeout(() => {
        gameSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const handleStartCompetition = () => {
    if (mode === "competition") {
      if (selectedCompetitionId) {
        // Check if competition is active
        const competition = competitionData.competitions.find(
          (c) => c._id === selectedCompetitionId
        );
        if (competition) {
          const now = new Date();
          const startDate = new Date(competition.startDate);
          const endDate = new Date(competition.endDate);

          // Only allow starting if competition is active
          if (now < startDate) {
            // Competition hasn't started yet - don't allow starting
            return;
          }

          if (now > endDate) {
            // Competition has ended - don't allow starting
            return;
          }
        }

        // Competition selected - puzzle IDs already loaded
        setCompetitionStarted(true);
        setCurrentPuzzleIndex(0);
        setSolvedPuzzleIndices(new Set());
        setCompetitionEnded(false);
        competitionEndedRef.current = false;
        setCompetitionStartTime(Date.now());
        setTimeElapsed(0);
        timeElapsedRef.current = 0;
      } else {
        // No competition selected - generate 10 random puzzle IDs
        const randomIds = generateRandomPuzzleIds(10);
        setCompetitionPuzzleIds(randomIds);
        setCompetitionStarted(true);
        setCurrentPuzzleIndex(0);
        setSolvedPuzzleIndices(new Set());
        setCompetitionEnded(false);
        competitionEndedRef.current = false;
        setCompetitionStartTime(Date.now());
        setTimeElapsed(0);
        timeElapsedRef.current = 0;
      }
    }
  };

  // Track time elapsed during competition
  useEffect(() => {
    if (competitionStarted && !competitionEnded && competitionStartTime) {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - competitionStartTime) / 1000);
        setTimeElapsed(elapsed);
        timeElapsedRef.current = elapsed;
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [competitionStarted, competitionEnded, competitionStartTime]);

  const handleTimeUp = () => {
    if (
      mode === "competition" &&
      competitionStarted &&
      !competitionEnded &&
      !competitionEndedRef.current
    ) {
      competitionEndedRef.current = true;
      setCompetitionEnded(true);
      setTimeElapsed(timeElapsedRef.current);
    }
  };

  const handleAllPuzzlesSolved = () => {
    if (
      mode === "competition" &&
      competitionStarted &&
      !competitionEnded &&
      !competitionEndedRef.current
    ) {
      competitionEndedRef.current = true;
      setCompetitionEnded(true);
      setTimeElapsed(timeElapsedRef.current);
    }
  };

  // Find next unsolved puzzle in round-robin fashion
  const findNextUnsolvedPuzzle = (
    startIndex: number,
    solvedSet: Set<number>
  ): number => {
    if (competitionPuzzleIds.length === 0) return -1;

    // Check if all are solved
    if (solvedSet.size >= competitionPuzzleIds.length) return -1;

    // Start from next index and wrap around
    for (let i = 1; i <= competitionPuzzleIds.length; i++) {
      const nextIndex = (startIndex + i) % competitionPuzzleIds.length;
      if (!solvedSet.has(nextIndex)) {
        return nextIndex;
      }
    }

    return -1;
  };

  const handlePuzzleSolved = (puzzleId: number) => {
    updateGlobalLeaderboard({ username: session?.user?.username, puzzleId });
    if (mode === "competition" && competitionPuzzleIds.length > 0) {
      // Mark current puzzle as solved and find next unsolved puzzle
      setSolvedPuzzleIndices((prev) => {
        const updated = new Set(prev).add(currentPuzzleIndex);
        const nextUnsolvedIndex = findNextUnsolvedPuzzle(
          currentPuzzleIndex,
          updated
        );
        if (nextUnsolvedIndex !== -1) {
          // Use setTimeout to ensure state update happens after this one
          setTimeout(() => setCurrentPuzzleIndex(nextUnsolvedIndex), 0);
        } else {
          // All puzzles solved
          handleAllPuzzlesSolved();
        }
        return updated;
      });
    }
  };

  const handleSkip = () => {
    if (mode === "competition" && competitionPuzzleIds.length > 0) {
      // Don't mark as solved, just move to next unsolved puzzle
      const nextUnsolvedIndex = findNextUnsolvedPuzzle(
        currentPuzzleIndex,
        solvedPuzzleIndices
      );
      if (nextUnsolvedIndex !== -1) {
        setCurrentPuzzleIndex(nextUnsolvedIndex);
      }
    }
  };

  // Get current puzzle ID based on mode
  const getCurrentPuzzleId = (): number | undefined => {
    if (mode === "competition" && competitionPuzzleIds.length > 0) {
      return competitionPuzzleIds[currentPuzzleIndex];
    }
    return initialPuzzleId;
  };

  const currentLeaderboard =
    mode === "competition" && selectedCompetitionId
      ? competitionLeaderboard
      : globalLeaderboard || leaderboardData.leaderboard;

  const leaderboardTitle =
    mode === "competition" && selectedCompetitionId
      ? "Competition Leaderboard"
      : "Global Leaderboard";

  return (
    <div className="w-full mt-4 bg-white rounded-lg shadow-md">
      {/* Top Section: Two columns - Competitions | Game Board + Mode Selector */}
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        {/* Left Column: Competitions */}
        <div>
          <CompetitionList
            competitionData={competitionData}
            selectedCompetitionId={selectedCompetitionId}
            onSelectCompetition={handleSelectCompetition}
            onStartCompetition={handleStartCompetitionFromList}
          />
        </div>
        {/* Right Column: Mode Selector + Game Board */}
        <div
          ref={gameSectionRef}
          className="flex flex-col w-full border-l border-gray-300"
        >
          <div className="border-b p-2 md:p-4 border-gray-300">
            <GameModeSelector mode={mode} onModeChange={setMode} />
          </div>
          <div className="flex flex-col justify-center items-center py-6">
            {mode === "competition" && !competitionStarted ? (
              <div className="flex flex-col items-center gap-4">
                {selectedCompetitionId ? (
                  (() => {
                    const competition = competitionData.competitions.find(
                      (c) => c._id === selectedCompetitionId
                    );
                    if (competition) {
                      const now = new Date();
                      const startDate = new Date(competition.startDate);
                      const endDate = new Date(competition.endDate);

                      if (now < startDate) {
                        return (
                          <div className="text-center">
                            <p className="text-lg font-semibold text-gray-800 mb-2">
                              Competition Not Started Yet
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                              This competition starts on{" "}
                              {startDate.toLocaleDateString()} at{" "}
                              {startDate.toLocaleTimeString()}
                            </p>
                            <CompetitionCountdown
                              targetDate={startDate}
                              type="starts"
                            />
                          </div>
                        );
                      }

                      if (now > endDate) {
                        return (
                          <div className="text-center">
                            <p className="text-lg font-semibold text-gray-800 mb-2">
                              Competition Ended
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                              This competition ended on{" "}
                              {endDate.toLocaleDateString()}
                            </p>
                          </div>
                        );
                      }
                    }

                    return (
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-800 mb-2">
                          Ready to start the competition?
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          You'll solve {competitionPuzzleIds.length} puzzles.
                          Good luck!
                        </p>
                      </div>
                    );
                  })()
                ) : (
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      No competition selected
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Start with 10 random puzzles or select a competition from
                      the list.
                    </p>
                  </div>
                )}
                {selectedCompetitionId ? (
                  (() => {
                    const competition = competitionData.competitions.find(
                      (c) => c._id === selectedCompetitionId
                    );
                    if (competition) {
                      const now = new Date();
                      const startDate = new Date(competition.startDate);
                      const endDate = new Date(competition.endDate);

                      if (now < startDate || now > endDate) {
                        return null; // Don't show start button for upcoming or ended competitions
                      }
                    }
                    return (
                      <button
                        onClick={handleStartCompetition}
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors"
                      >
                        Start Competition
                      </button>
                    );
                  })()
                ) : (
                  <button
                    onClick={handleStartCompetition}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors"
                  >
                    Start Competition
                  </button>
                )}
              </div>
            ) : (
              <>
                <Game
                  initialPuzzleId={getCurrentPuzzleId()}
                  onPuzzleSolved={handlePuzzleSolved}
                  mode={mode}
                  competitionTotalPuzzles={
                    mode === "competition"
                      ? competitionPuzzleIds.length
                      : undefined
                  }
                  competitionSolvedCount={
                    mode === "competition"
                      ? solvedPuzzleIndices.size
                      : undefined
                  }
                  competitionDuration={
                    mode === "competition" &&
                    competitionStarted &&
                    !competitionEnded
                      ? competitionDuration
                      : undefined
                  }
                  onSkip={
                    mode === "competition" && !competitionEnded
                      ? handleSkip
                      : undefined
                  }
                  onTimeUp={mode === "competition" ? handleTimeUp : undefined}
                />
              </>
            )}

            {/* Show stats when competition ends */}
            {mode === "competition" && competitionEnded && (
              <CompetitionStats
                totalPuzzles={competitionPuzzleIds.length}
                solvedCount={solvedPuzzleIndices.size}
                timeElapsed={timeElapsed}
                onClose={() => {
                  setCompetitionEnded(false);
                  setCompetitionStarted(false);
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Divider above leaderboard */}
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Bottom Section: Leaderboard */}
      <div>
        <Leaderboard
          entries={currentLeaderboard}
          title={leaderboardTitle}
          isLoading={isLoadingLeaderboard}
        />
      </div>
    </div>
  );
}
