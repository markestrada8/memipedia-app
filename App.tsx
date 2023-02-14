import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import CurrentUserProvider from './provider/CurrentUserProvider';
import router from './utils/router'
// import { createAppContainer } from 'react-navigation';
const AppContainer = router

export default function App() {
  return (
    <CurrentUserProvider>
      <AppContainer />
    </CurrentUserProvider>
  );
}


