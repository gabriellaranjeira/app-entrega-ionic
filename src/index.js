import React from 'react';
import { StyleSheet } from 'react-native';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eb3345",
    justifyContent: "flex-end",
  }
});

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
