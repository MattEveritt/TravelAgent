import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/redux/store/store';
import {Provider as ReduxProvider} from 'react-redux';

import Router from './src/navigation/Router';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
