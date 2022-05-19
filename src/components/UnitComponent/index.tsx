import React, {useEffect} from 'react';
import {View, Image, TouchableWithoutFeedback, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import {currentUnitIndexChange} from '../../redux/actions/gameActions';
import {ChangeAllUnits} from '../../redux/actions/teamsActions';
import {Mage} from '../../strategy/Strategies';
import {cellSize} from '../BoardComponent/style';
import StatusMark from '../StatusMark';
import styles from './style';

export type Props = {
  unit: GameUnit;
  id: number;
};

const Unit: React.FC<Props> = ({id}) => {
  const allUnits: GameUnit[] = useSelector(
    ({teamsReducer}) => teamsReducer.units,
  );

  const unit: GameUnit = useSelector(
    ({teamsReducer}) => teamsReducer.units[id],
  );
  const currentUnitIndex: number = useSelector(
    ({gameReducer}) => gameReducer.currentUnitIndex,
  );
  const currentUnit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits[currentUnitIndex],
  );

  const chosenUnitIndex: number = useSelector(
    ({gameReducer}) => gameReducer.chosenUnitIndex,
  );

  const chosenUnit: GameUnit = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits[chosenUnitIndex],
  );

  useEffect(() => {
    if (currentUnit.hp <= 0)
      dispatch(currentUnitIndexChange((currentUnitIndex + 1) % 12));
  }, [currentUnit]);

  const handlePress = (): void => {
    if (
      currentUnit.Action.constructor.name === 'Mage' ||
      currentUnit.Action.constructor.name === 'MassHeal'
    ) {
      if (unit.id === currentUnit.id) {
        if (currentUnit.doAction([currentUnit, ...allUnits])) {
          dispatch(currentUnitIndexChange((currentUnitIndex + 1) % 12));
          dispatch(ChangeAllUnits(allUnits));
        }
      } else {
        if (currentUnit.doAction(allUnits)) {
          dispatch(currentUnitIndexChange((currentUnitIndex + 1) % 12));
          dispatch(ChangeAllUnits(allUnits));
        }
      }
    } else {
      if (currentUnit.doAction(unit)) {
        dispatch(currentUnitIndexChange((currentUnitIndex + 1) % 12));
      }
    }
  };

  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.unit,
        {
          left: unit.xPosition * cellSize,
          top: unit.yPosition * cellSize,
        },
      ]}>
      {unit.hp > 0 ? (
        <>
          <StatusMark
            team={unit.team}
            canAttack={unit.canActed(currentUnit)}
            isCurrent={currentUnit.id === unit.id}
            isChosen={chosenUnit?.id === unit.id}
          />
          <TouchableWithoutFeedback onPress={handlePress}>
            <View>
              <Image
                source={unit.image}
                style={[
                  {
                    width: cellSize,
                    height: cellSize,
                  },
                  unit.isParalyzed && {tintColor: 'lightgreen'},
                ]}
              />
              {unit.isDefend && (
                <Image
                  style={styles.shield}
                  source={require('../../assets/Shield.png')}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </>
      ) : (
        <Image
          source={require('../../assets/gameUnitsImages/Grave.png')}
          style={{width: cellSize, height: cellSize}}
        />
      )}
    </View>
  );
};

export default Unit;
