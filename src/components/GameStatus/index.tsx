import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import styles from './style';

interface GameStatusProps {
  restart: () => void;
}

const GameStatus = (props: GameStatusProps) => {
  const [team1Hp, setTeam1Hp] = useState(0);
  const [team2Hp, setTeam2Hp] = useState(0);

  const currentIndex: number = useSelector(
    ({gameReducer}) => gameReducer.currentUnitIndex,
  );

  const gameTick: number = useSelector(({gameReducer}) => gameReducer.gameTick);

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
        {/* <Text>Round: {Math.floor(gameTick / 12)}</Text> */}
        <Text>gameTick: {gameTick}</Text>
        <Text>Current Team: {units[currentIndex]?.team}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={props.restart}>
          <Image source={require('../../assets/Refresh.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('home')}>
          <Image source={require('../../assets/Home.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameStatus;
