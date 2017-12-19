import React, { Component } from 'react';
import { Text, Input, View } from 'react-native';

import styling from '../../utilities/styling';

class TextCell extends Component {
  render() {
    return (
      <View style={styles.cell}>
        <View style={styles.cellProperty}>
          <Text>{this.props.cellProperty}</Text>
        </View>
        <View style={styles.cellValue}>
          <Text>{this.props.cellValue}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  cell: {
    flexDirection: 'row',
  },
  cellProperty: {
    paddingTop: 5,
    paddingBottom: 5,
    width: '40%'
  },
  cellValue: {
    paddingTop: 5,
    paddingBottom: 5,  
    width: '60%'
  }
}

export default TextCell;