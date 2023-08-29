export const sortLeaderboard = (leaderboard) => {
  const newLeaderboard = [...leaderboard];
  const sortedLeaderboard = newLeaderboard.sort((a, b) => {
    return b.percentageOfWins - a.percentageOfWins;
  });
  return sortedLeaderboard;
};
