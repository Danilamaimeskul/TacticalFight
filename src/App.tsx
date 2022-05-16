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
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import TeamComponent from './components/TeamComponent';
import UnitCard from './components/UnitCard';
import generateTeam from './gameLogic/generateTeam';
import orderedCurrentTeam from './gameLogic/orderedCurrentTeam';
import GameUnit from './gameUnits/gameUnit';
import {
  currentTeamChange,
  currentUnitChange,
  orderedTeamChange,
} from './redux/actions/gameActions';
import {team1Change, team2Change} from './redux/actions/teamsActions';
import {teamState} from './redux/reducers/teamsReducer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const orderedTeam: Array<GameUnit> = useSelector(({gameReducer}) => [
    ...gameReducer.orderedCurrentTeam,
    gameReducer.currentUnit,
  ]);

  const team: teamState = useSelector(({teamsReducer}) => teamsReducer);
  const dispatch = useDispatch(team);

  useEffect(() => {
    const team1 = generateTeam(6, 1);
    const team2 = generateTeam(6, 2);
    const orderedTeam1 = orderedCurrentTeam(team1);
    const currentUnit = orderedTeam1.pop();
    dispatch(team1Change(team1));
    dispatch(team2Change(team2));
    dispatch(currentTeamChange(1));
    dispatch(orderedTeamChange(orderedTeam1));
    dispatch(currentUnitChange(currentUnit));
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={{marginTop: 15, marginBottom: 45}}>
        {team.team1.length ? (
          <TeamComponent heroes={team.team1} teamNumber={1} />
        ) : null}
        {team.team2.length ? (
          <TeamComponent heroes={team.team2} teamNumber={2} />
        ) : null}
      </ScrollView>
      <View style={{flexDirection: 'row'}}>
        {orderedTeam.map((item, index) => {
          return <UnitCard unit={item} key={index} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default App;
