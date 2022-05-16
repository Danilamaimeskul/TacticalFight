import GameUnit from '../gameUnits/gameUnit';

const orderedCurrentTeam = (team: Array<GameUnit>) => {
  let orderedTeam = [...team];
  orderedTeam.sort(function (a, b) {
    if (a.initiative > b.initiative) {
      return 1;
    }
    if (a.initiative < b.initiative) {
      return -1;
    }
    return 0;
  });
  return orderedTeam;
};

export default orderedCurrentTeam;
