import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import GameUnit from '../../gameUnits/gameUnit';
import styles from './style';

interface GameStatusProps {
  restart: () => void;
  navigation: any;
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

  const handleAlert = (winTeam: 1 | 2) => {
    Alert.alert(`Team ${winTeam} Win!!!`, '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Go to Main Menu',
        onPress: () => props.navigation.navigate('MainMenu'),
      },
    ]);
  };

  useEffect(() => {
    countTeamsHP();
    if (team1Hp <= 0 && gameTick) {
      handleAlert(2);
    }
    if (team2Hp <= 0 && gameTick) {
      handleAlert(1);
    }
  }, [units, gameTick]);

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
        <TouchableOpacity onPress={() => props.navigation.navigate('MainMenu')}>
          <Image source={require('../../assets/Home.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameStatus;
