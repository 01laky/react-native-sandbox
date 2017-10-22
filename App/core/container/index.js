import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModuleManager from '../../services/ModuleManager';
import StyleManager from '../../services/StyleManager';

import styleSheet from './styles';

// @StyleManager(styleSheet)
@ModuleManager
export default class Main extends Component {

  onPressButton = () => {
    console.log('ON BUTTON PRESS')
  }

  render() {
    const {
      onPressButton,
      props: { styles, moduleContainer },
    } = this;
    console.log('RENDER PROPS => ', this.props)
    return(
      <View>
        {moduleContainer}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     justifyContent: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     flexWrap: 'nowrap',
//     borderWidth: 5,
//   },
//   button: {
//     flex: 0,
//     alignSelf: 'center',
//     borderColor: 'black',
//     backgroundColor: 'silver',
//     borderWidth: 2,
//     padding: 5,
//   },
// });
