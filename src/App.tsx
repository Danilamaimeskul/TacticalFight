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
  Text,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import Board from './components/BoardComponent';
import UnitCard from './components/UnitCard';
import Unit from './components/UnitComponent';
import generateTeam from './gameLogic/generateTeam';
import orderedCurrentTeam from './gameLogic/orderedCurrentTeam';
import GameUnit from './gameUnits/gameUnit';
import {
  currentUnitIndexChange,
  orderedTeamChange,
} from './redux/actions/gameActions';
import {ChangeAllUnits} from './redux/actions/teamsActions';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const currentUnits: GameUnit[] = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits,
  );

  const [units, setUnits] = useState<GameUnit[]>([]);
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const createdUnits = [...generateTeam(6, 1), ...generateTeam(6, 2)];
    setUnits(createdUnits);
    dispatch(ChangeAllUnits(createdUnits));
    const orderedUnits = orderedCurrentTeam(createdUnits);
    dispatch(orderedTeamChange(orderedUnits));
    dispatch(currentUnitIndexChange(0));
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Board>
        {units?.map((item, index) => {
          return <Unit unit={item} key={index} id={index} />;
        })}
      </Board>
      <ScrollView horizontal style={{height: 120}}>
        {currentUnits?.map((item, index) => {
          return <UnitCard index={index} unit={item} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
