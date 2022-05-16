/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import TeamComponent from './components/TeamComponent';
import Unit from './components/UnitComponent';
import generateTeam from './gameLogic/generateTeam';
import orderedCurrentTeam from './gameLogic/orderedCurrentTeam';
import {
  currentTeamChange,
  currentUnitChange,
  orderedTeamChange,
} from './redux/actions/gameActions';
import {team1Change, team2Change} from './redux/actions/teamsActions';
import {teamState} from './redux/reducers/teamsReducer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const team: teamState = useSelector(({teamsReducer}) => teamsReducer);
  const dispatch = useDispatch(team);

  useEffect(() => {
    const team1 = generateTeam(6, 1);
    const team2 = generateTeam(6, 2);
    const orderedTeam1 = orderedCurrentTeam(team1);
    const currentUnit = orderedTeam1.pop();
    dispatch(team1Change(team1));
    dispatch(team2Change(team2));
    dispatch(orderedTeamChange(orderedTeam1));
    dispatch(currentUnitChange(currentUnit));
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        {team.team1.length ? (
          <TeamComponent heroes={team.team1} teamNumber={1} />
        ) : null}
        {team.team2.length ? (
          <TeamComponent heroes={team.team2} teamNumber={2} />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
