import GameUnit, {UNIT_NAMES} from '../gameUnits/gameUnit';
import UnitFactory from '../gameUnits/UnitFactory';
import {GameUnitPropsType} from '../gameUnits/units/GameUnitPropsType';

const generateTeam = (numberUnits: number, teamNumber: 1 | 2) => {
  let team: Array<GameUnit> = [];
  for (let i = 0; i < numberUnits; i++) {
    let props: GameUnitPropsType = {
      id: (teamNumber - 1) * numberUnits + i,
      team: teamNumber,
      xPosition: (i % 3) + 2,
      yPosition: Math.floor(i / 3) + (teamNumber * 2 - 2) + 1,
    };
    switch (Math.floor(Math.random() * 9)) {
      case 0:
        team.push(UnitFactory.create(UNIT_NAMES.ARCHIMAGE, props));
        break;
      case 1:
        team.push(UnitFactory.create(UNIT_NAMES.BANDIT, props));
        break;
      case 2:
        team.push(UnitFactory.create(UNIT_NAMES.BISHOP, props));
        break;
      case 3:
        team.push(UnitFactory.create(UNIT_NAMES.CENTAUR, props));
        break;
      case 4:
        team.push(UnitFactory.create(UNIT_NAMES.ELF_ARCHER, props));
        break;
      case 5:
        team.push(UnitFactory.create(UNIT_NAMES.MONK, props));
        break;
      case 6:
        team.push(UnitFactory.create(UNIT_NAMES.SIREN, props));
        break;
      case 7:
        team.push(UnitFactory.create(UNIT_NAMES.SKELETON, props));
        break;
      case 8:
        team.push(UnitFactory.create(UNIT_NAMES.SKELETON_MAGE, props));
    }
  }
  return team;
};

export default generateTeam;
