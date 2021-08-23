import { registerRootComponent } from 'expo';
import React from'react';
import {AppRegistry} from 'react-native';
import App from './App';
 const TodoApp=()=> <App/>

	AppRegistry.registerComponent('main',()=>App);
	AppRegistry.registerComponent('Todo',()=>TodoApp);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
