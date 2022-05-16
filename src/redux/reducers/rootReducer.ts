import gameReducer from './gameReducer';
import {combineReducers} from 'redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persistReducer} from 'redux-persist';
import teamsReducer from './teamsReducer';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  gameReducer,
  teamsReducer,
});

export default rootReducer;

// export default persistReducer(persistConfig, rootReducer);
