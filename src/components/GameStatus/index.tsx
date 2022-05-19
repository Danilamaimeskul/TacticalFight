import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import styles from './style';

const GameStatus = () => {
  const [team1Hp, setTeam1Hp] = useState(0);
  const [team2Hp, setTeam2Hp] = useState(0);

  const currentIndex: number = useSelector(
    ({gameReducer}) => gameReducer.currentUnitIndex,
  );

  const units: GameUnit[] = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits,
  );

  const countTeamsHP = () => {
    let team1: number = 0;
    let team2: number = 0;
    units.forEach(item => {
      item.team === 1 ? (team1 += item.hp) : (team2 += item.hp);
    });
    setTeam1Hp(team1);
    setTeam2Hp(team2);
  };

  useEffect(countTeamsHP, [currentIndex]);

  return (
    <View style={styles.statusBlock}>
      <View>
        <Text>Team 1 HP: {team1Hp}</Text>
        <Text>Team 2 HP: {team2Hp}</Text>
      </View>
      <View>
        <Text>Current Team: {units[currentIndex]?.team}</Text>
      </View>
    </View>
  );
};

export default GameStatus;
