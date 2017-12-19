import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import { FormLabel, CheckBox, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from './../actions';

import resources from './../utilities/resources';
import styling from './../utilities/styling';

class CriteriaHousingTypes extends Component {
  constructor(props) {
    super(props);

    this.state = {roomCounts: this.props.roomCounts}
  }

  isChecked(type) {
    return this.props.roomCounts.some(room => room === type.value);
  }

  renderHousingTypes() {
    return resources.housingTypes.map((type, index) => {
      return (
        <CheckBox
          iconType='simple-line-icon'
          uncheckedIcon='check'
          checkedIcon='check'
          containerStyle={styles.checkbox}
          checkedColor={styling.accentColorRed}
          key={index}
          title={type.name}
          checked={this.isChecked(type)}
          onPress={() => this.isChecked(type) ? this.props.removeHousingType(type) : this.props.addHousingType(type)}
        />
      )
    });
  }
  
  render() {
    return (
      <View>
        <FormLabel>Housing Types:</FormLabel>
        <View style={styles.housingTypeContainer}>
          {this.renderHousingTypes()}
        </View>
      </View>
    );
  }
}

const styles = {
  housingTypeContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5,
  },
  checkbox: {
    width: (styling.screenWidth - 50) / 2
  }
}

const mapStateToProps = (state) => {
  // console.log('mapped states to props in housingtypes: ', state.criteria.roomCounts)
  return {
    roomCounts: state.criteria.roomCounts
  }
}

export default connect(mapStateToProps, actions)(CriteriaHousingTypes);