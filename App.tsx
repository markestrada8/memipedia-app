import { StyleSheet, View } from 'react-native';
import router from './utils/router'
import { createAppContainer } from 'react-navigation';
const AppContainer = createAppContainer(router)

export default function App() {
  return (
      <AppContainer />
  );
}


