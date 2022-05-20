/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import Board from '../components/BoardComponent';
import ChosenUnitStatistic from '../components/ChosenUnitStatistic';
import CurrentUnitStatistic from '../components/CurrentUnitStatistic';
import GameStatus from '../components/GameStatus';
import UnitCard from '../components/UnitCard';
import Unit from '../components/UnitComponent';
import generateTeam from '../gameLogic/generateTeam';
import orderedCurrentTeam from '../gameLogic/orderedCurrentTeam';
import GameUnit from '../gameUnits/gameUnit';
import {
  chosenUnitIndexChange,
  currentUnitIndexChange,
  orderedTeamChange,
  restartGameTick,
} from '../redux/actions/gameActions';
import {ChangeAllUnits} from '../redux/actions/teamsActions';

const GameScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const currentUnits: GameUnit[] = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits,
  );
  const [units, setUnits] = useState<GameUnit[]>([]);
  const dispatch = useDispatch();

  const restart = (): void => {
    dispatch(ChangeAllUnits([]));
    dispatch(orderedTeamChange([]));
    const createdUnits = [...generateTeam(6, 1), ...generateTeam(6, 2)];
    setUnits(createdUnits);
    dispatch(ChangeAllUnits(createdUnits));
    const orderedUnits = orderedCurrentTeam(createdUnits);
    dispatch(orderedTeamChange(orderedUnits));
    dispatch(chosenUnitIndexChange(null));
    dispatch(currentUnitIndexChange(0));
    dispatch(restartGameTick());
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <GameStatus restart={restart} navigation={navigation} />
      <Board>
        {units?.map((item, index) => {
          return <Unit unit={item} key={index} id={index} />;
        })}
      </Board>
      <ScrollView horizontal style={{height: 120, marginHorizontal: 10}}>
        {currentUnits?.map((item, index) => {
          return <UnitCard index={index} key={item.id} />;
        })}
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CurrentUnitStatistic />
        <ChosenUnitStatistic />
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;
