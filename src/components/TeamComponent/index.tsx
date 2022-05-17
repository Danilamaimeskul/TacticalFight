import React from 'react';
import {View} from 'react-native';
import GameUnit from '../../gameUnits/gameUnit';
import Unit from '../UnitComponent';
import styles from './style';

export type TeamProps = {
  heroes: Array<GameUnit>;
  teamNumber: number;
};

const TeamComponent: React.FC<TeamProps> = ({heroes, teamNumber}) => {
  return (
    <View
      style={styles.team}
      onLayout={event => {
        const {x, y, height, width} = event.nativeEvent.layout;
        console.log(height, width);
      }}>
      {heroes.map((unit, index) => {
        return <Unit unit={unit} key={index} team={teamNumber} />;
      })}
    </View>
  );
};

export default TeamComponent;
