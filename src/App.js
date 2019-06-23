/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { UIManager, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from 'navigation/RootNavigator';
import { store } from 'reduxStore';
import NavigationService from 'utils/NavigationService';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

type Props = {};
export default class App extends Component<Props> {
  _handleRef = (navigatorRef) => {
    NavigationService.setTopLevelNavigator(navigatorRef);
  };

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle='dark-content' backgroundColor='rgb(244, 244, 244)'/>
        <Navigation ref={this._handleRef} />
      </Provider>
    );
  }
}
