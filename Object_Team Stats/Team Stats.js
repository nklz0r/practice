const team = {
    _players: [{
        firstName: 'Pablo',
        lastName: 'Escobar',
        age: 32
    }, {
        firstName: 'Pencho',
        lastName: 'Vazov',
        age: 25
    }, {
        firstName: 'Mike',
        lastName: 'Booboopoop',
        age: 39
    }],
    _games: [{
        opponent: 'Bronx',
        teamPoints: 42,
        opponentPoints: 17
    }, {
        opponent: 'MYM',
        teamPoints: 23,
        opponentPoints: 45
    }, {
        opponent: 'SKT1',
        teamPoints: 26,
        opponentPoints: 23
    }],
  get players() {
      return this._players;
  },
  get games() {
    return this._games;
  },
  addplayer(firstName, lastName, age) {
    let player = {
    firstName, lastName, age
    };
    this.players.push(player)
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
        opponent, teamPoints, opponentPoints
    }
    this.games.push(game);
  }
};

team.addplayer('Steph', 'Curry', 28);
team.addplayer('Lisa', 'Leslie', 44);
team.addplayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Opo', 23, 12);
team.addGame('Uga', 643, 532);
team.addGame('Booga', 35, 23);
console.log(team.games);