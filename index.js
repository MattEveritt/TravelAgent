/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App.tsx';
import { name as appName } from './app.json';
import { init } from './src/localization/FCLocalized';

init();

AppRegistry.registerComponent(appName, () => App);
