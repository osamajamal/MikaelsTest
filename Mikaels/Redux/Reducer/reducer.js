import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const initialState = {
  listTask: [],
  countt: 0,
};

const listTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALLLIST-TASK':
      return {
        ...state,
        listTask: action.payload.entries,
        countt: action.payload.count,
      };
    default:
      return state;
  }
};
export default listTaskReducer;
