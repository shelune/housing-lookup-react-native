import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import { FormLabel, CheckBox, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { addExtraFeature, removeExtraFeature } from './../actions';

import resources from './../utilities/resources';
import styling from './../utilities/styling';

class CriteriaFeatures extends Component {
  constructor(props) {
    super(props);
  }

  isChecked(checkbox) {
    return this.props.extraFeatures.some(feature => feature === checkbox.value);
  }

  renderExtraFeatures() {
    return resources.extraFeatures.map((feature, index) => {
      return (
        <CheckBox
          iconType='simple-line-icon'
          uncheckedIcon='check'
          checkedIcon='check'
          checkedColor={styling.accentColorRed}
          containerStyle={styles.checkbox}
          key={index}
          title={feature.name}
          checked={this.isChecked(feature)}
          onPress={() => this.isChecked(feature) ? this.props.removeExtraFeature(feature) : this.props.addExtraFeature(feature)}
        />
      )
    });
  }

  render() {
    return (
      <View>
        <FormLabel>Extra:</FormLabel>
        <View style={styles.featuresContainer}>
          {this.renderExtraFeatures()}
        </View>
      </View>
    );
  }
}

const styles = {
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5,
  },
  checkbox: {
    width: styling.screenWidth - 30
  }
}

const mapStateToProps = (state) => {
  // console.log('mapped states to props in housingtypes: ', state.criteria.roomCounts)
  return {
    extraFeatures: state.criteria.extraFeatures
  }
}

export default connect(mapStateToProps, {addExtraFeature, removeExtraFeature})(CriteriaFeatures);