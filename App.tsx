import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import router from './utils/router'
// import { createAppContainer } from 'react-navigation';
const AppContainer = router

export default function App() {
  return (
    <AppContainer />
  );
}


