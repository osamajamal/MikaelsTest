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
};

const listTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALLLIST-TASK':
      return {
        ...state,
        listTask: [...state.listTask, action.payload],
      };
    default:
      return state;
  }
};
export default listTaskReducer;
