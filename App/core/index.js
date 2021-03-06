import React from 'react';
import { Provider } from "react-redux";

import configureStore from "./store";

import Container from './container';

const store = configureStore();

export default () =>
  <Provider store={store}>
    <Container />
  </Provider>;
