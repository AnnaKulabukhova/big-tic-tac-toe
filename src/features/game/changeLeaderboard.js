export const changeLeaderboard = (lastGamePlayers, leaderboard) => {
  const currentLastGamePlayers = JSON.parse(JSON.stringify(lastGamePlayers));

  const newLeaderboard = leaderboard.map((player) => {
    const { name } = player;

    if (!(name in currentLastGamePlayers)) {
      return player;
    }

    const { isWinner } = currentLastGamePlayers[name];

    const numberOfGame = player.numberOfGame + 1;
    let numberOfWins = player.numberOfWins;
    let numberOfDefeats = player.numberOfDefeats;

    if (isWinner) {
      numberOfWins = player.numberOfWins + 1;
    } else {
      numberOfDefeats = player.numberOfDefeats + 1;
    }

    const percentageOfWins = Math.floor((numberOfWins / numberOfGame) * 100);

    currentLastGamePlayers[name].isTouched = true;
    return {
      ...player,
      numberOfGame,
      numberOfWins,
      numberOfDefeats,
      percentageOfWins,
    };
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
