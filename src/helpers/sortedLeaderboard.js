export const sortLeaderboard = (leaderboard) => {
  const sortedLeaderboard = leaderboard.sort(
    (a, b) => b.percentageOfWins - a.percentageOfWins
  );
  return sortedLeaderboard;
};
