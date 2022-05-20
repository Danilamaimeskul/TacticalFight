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
  View,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
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

const MainMenuScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const currentUnits: GameUnit[] = useSelector(
    ({gameReducer}) => gameReducer.orderedUnits,
  );

  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const restart = (): void => {
    dispatch(ChangeAllUnits([]));
    dispatch(orderedTeamChange([]));
    const createdUnits = [...generateTeam(6, 1), ...generateTeam(6, 2)];
    dispatch(ChangeAllUnits(createdUnits));
    const orderedUnits = orderedCurrentTeam(createdUnits);
    dispatch(orderedTeamChange(orderedUnits));
    dispatch(currentUnitIndexChange(0));
    dispatch(restartGameTick());
    dispatch(chosenUnitIndexChange(null));
  };

  const newGame = () => {
    restart();
    navigation.navigate('Game');
  };

  const continueGame = () => {
    navigation.navigate('Game');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.menuBlock}>
        <Text style={styles.gameName}>Best Game Ever Made</Text>
        <TouchableOpacity onPress={newGame}>
          <Text style={styles.button}>New Game</Text>
        </TouchableOpacity>
        {currentUnits.length !== 0 && (
          <TouchableOpacity onPress={continueGame}>
            <Text style={styles.button}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuBlock: {
    alignItems: 'center',
    marginTop: 120,
  },
  gameName: {
    fontSize: 30,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    fontSize: 30,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 50,
    color: 'white',
    textDecorationLine: 'underline',
    borderColor: 'pink',
    borderWidth: 1,
  },
});

export default MainMenuScreen;
