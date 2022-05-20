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
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import generateTeam from '../gameLogic/generateTeam';
import orderedCurrentTeam from '../gameLogic/orderedCurrentTeam';
import GameUnit from '../gameUnits/gameUnit';
import {
  currentUnitIndexChange,
  orderedTeamChange,
  restartGameTick,
} from '../redux/actions/gameActions';
import {ChangeAllUnits} from '../redux/actions/teamsActions';

const MainMenuScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const currentUnits: GameUnit[] = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits,
  );

  const [units, setUnits] = useState<GameUnit[]>([]);
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const restart = (): void => {
    dispatch(ChangeAllUnits([]));
    dispatch(orderedTeamChange([]));
    const createdUnits = [...generateTeam(6, 1), ...generateTeam(6, 2)];
    setUnits(createdUnits);
    dispatch(ChangeAllUnits(createdUnits));
    const orderedUnits = orderedCurrentTeam(createdUnits);
    dispatch(orderedTeamChange(orderedUnits));
    dispatch(currentUnitIndexChange(0));
    dispatch(restartGameTick());
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Best Game Ever Made</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text>New Game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('continue')}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainMenuScreen;
