import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import { FormLabel, Slider } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from './../actions';

import resources from './../utilities/resources';
import styling from './../utilities/styling';

class CriteriaRent extends Component {
  constructor(props) {
    super(props);

    this.state = { maxRent: this.props.maxRent };
  }

  componentWillReceiveProps() {
    this.state.maxRent = this.props.maxRent
  }

  render() {
    // console.log(this.props);

    return (
      <View>
        <FormLabel>Rent Max:</FormLabel>
        <View style={styles.rentSliderContainer}>
          <Slider
            thumbTintColor={styling.accentColorRed}
            minimumValue={resources.rentLimit.min}
            maximumValue={resources.rentLimit.max}
            step={resources.rentLimit.step}
            value={this.props.maxRent}
            onValueChange={(rent) => this.props.updateRent(rent)} />
          <Text>Can pay up to €{this.props.maxRent} per month</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  rentSliderContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  }
}

const mapStateToProps = (state) => {
  return {
    maxRent: state.criteria.maxRent
  }
}

export default connect(mapStateToProps, actions)(CriteriaRent);