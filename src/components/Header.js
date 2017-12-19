import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styling from './../utilities/styling'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>House Lookout</Text>
      </View>
    )
  };
}

const styles = {
  header: {
    backgroundColor: styling.accentColorRed,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  }
}

export default Header;