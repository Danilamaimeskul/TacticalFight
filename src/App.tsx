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
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import Board from './components/BoardComponent';
import Unit from './components/UnitComponent';
import generateTeam from './gameLogic/generateTeam';
import GameUnit from './gameUnits/gameUnit';
import {unitsChange} from './redux/actions/teamsActions';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [units, setUnits] = useState<GameUnit[]>([]);
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const createdUnits = [...generateTeam(6, 1), ...generateTeam(6, 2)];
    setUnits(createdUnits);
    dispatch(unitsChange(createdUnits));
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Board>
        {units.map((item, index) => {
          return <Unit unit={item} key={index} id={index} />;
        })}
      </Board>
    </SafeAreaView>
  );
};

export default App;
