import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import { FormLabel, FormInput, Button, Badge } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from './../actions';

import styling from './../utilities/styling';

class CriteriaArea extends Component {
  constructor(props) {
    super(props);
    this.state = {area: ''};
  }

  // before receiving props from store, reset AREA to empty
  componentWillReceiveProps() {
    this.setState({ area: '' });
  }

  renderAreaBadges() {
    const { selectedPlaces } = this.props;
    if (selectedPlaces) {
      return selectedPlaces.map((place, index) => {
        return (
          <Badge
            key={index}
            containerStyle={styles.badge}
            value={place.municipality}
            onPress={() => this.props.removeArea(index)}
          />
        )
      });
    }
    
    return null;
  }

  render() {
    // console.log('criteria props when rendering: ', this.state.area);
    
    return (
      <View>
        <FormLabel>City / Area:</FormLabel>
        <FormInput
          placeholder='Where do you want to live in?'
          value={this.state.area}
          onChangeText={(area) => {this.setState({area})}}
        />
        <View style={styles.badgeContainer}>
          {this.renderAreaBadges()}
        </View>
        <Button
          style={styles.button}
          title='Add'
          onPress={() => this.props.selectArea(this.state.area)}
        />
      </View>
    )
  }
}

const styles = {
  button: {
    marginTop: 10
  },
  badge: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: styling.accentColorRed
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  }
}

const mapStateToProps = state => {
  return {
    selectedPlaces: state.criteria.selectedPlaces
  }
}

export default connect(mapStateToProps, actions)(CriteriaArea);