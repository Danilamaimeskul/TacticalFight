import Archimage from '../gameUnits/units/Archimage';
import Bandit from '../gameUnits/units/Bandit';
import Bishop from '../gameUnits/units/Bishop';
import Centaur from '../gameUnits/units/Centaur';
import ElfArcher from '../gameUnits/units/ElfArcher';
import GameUnit from '../gameUnits/gameUnit';
import Monk from '../gameUnits/units/Monk';
import Sirena from '../gameUnits/units/Sirena';
import Skeleton from '../gameUnits/units/Skeleton';
import SkeletonMage from '../gameUnits/units/SkeletonMage';

const generateTeam = (numberUnits: number, teamNumber: 1 | 2) => {
  let team: Array<GameUnit> = [];
  for (let i = 0; i < numberUnits; i++) {
    let xPosition: number = i % 3;
    let yPosition: number = Math.floor(i / 3) + (teamNumber * 2 - 2);
    let id = (teamNumber - 1) * numberUnits + i;
    switch (Math.floor(Math.random() * 9)) {
      case 0:
        team.push(Archimage({xPosition, yPosition, id, team: teamNumber}));
        break;
      case 1:
        team.push(Bandit({xPosition, yPosition, id, team: teamNumber}));
        break;
      case 2:
        team.push(Bishop({xPosition, yPosition, id, team: teamNumber}));
        break;
      case 3:
        team.push(Centaur({xPosition, yPosition, id, team: teamNumber}));
        break;
      case 4:
        team.push(ElfArcher({xPosition, yPosition, id, team: teamNumber}));
        break;
      case 5:
        team.push(Monk({xPosition, yPosition, id, team: teamNumber}));
        break;
      case 6:
        team.push(Sirena({xPosition, yPosition, id, team: teamNumber}));
        break;
      case 7:
        team.push(Skeleton({xPosition, yPosition, id, team: teamNumber}));
        break;
      case 8:
        team.push(SkeletonMage({xPosition, yPosition, id, team: teamNumber}));
    }
  }
  return team;
};

export default generateTeam;
