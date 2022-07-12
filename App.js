import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/redux/store/store';
import {Provider as ReduxProvider} from 'react-redux';

import Navigator from './src/navigation/navigator';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
