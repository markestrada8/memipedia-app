import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';
import CurrentUserProvider from './provider/CurrentUserProvider';
import router from './Router/router'
// import { createAppContainer } from 'react-navigation';
const AppContainer = router

export default function App() {
  return (
    <CurrentUserProvider>
      <StatusBar barStyle={'light-content'} />
      <AppContainer />
    </CurrentUserProvider>
  );
}


