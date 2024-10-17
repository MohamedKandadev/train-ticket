/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './gesture-handler';
import 'react-native-reanimated';


AppRegistry.registerComponent(appName, () => App);
