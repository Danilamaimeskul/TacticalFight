import gameReducer from './gameReducer';
import {combineReducers} from 'redux';
import teamsReducer from './teamsReducer';

const rootReducer = combineReducers({
  gameReducer,
  teamsReducer,
});

export default rootReducer;
