export const changeLeaderboard = (lastGamePlayers, leaderboard) => {
  const currentLastGamePlayers = JSON.parse(JSON.stringify(lastGamePlayers));

  const newLeaderboard = leaderboard.map((player) => {
    const { name } = player;

    if (!(name in currentLastGamePlayers)) {
      return player;
    }
    const { isWinner } = currentLastGamePlayers[name];

    player.numberOfGame = player.numberOfGame + 1;

    if (isWinner) {
      player.numberOfWins = player.numberOfWins + 1;
    } else {
      player.numberOfDefeats = player.numberOfDefeats + 1;
    }

    player.percentageOfWins = Math.floor(
      (player.numberOfWins / player.numberOfGame) * 100
    );

    currentLastGamePlayers[name].isTouched = true;
    return player;
  });

  Object.entries(currentLastGamePlayers).forEach(([key, value]) => {
    const { isWinner, isTouched } = value;
    if (isTouched) {
      return;
    }
    newLeaderboard.push({
      name: key,
      numberOfGame: 1,
      numberOfWins: isWinner ? 1 : 0,
      numberOfDefeats: isWinner ? 0 : 1,
      percentageOfWins: isWinner ? 100 : 0,
    });
  });
  return newLeaderboard;
};
