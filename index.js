/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Initializer from './app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Initializer);

