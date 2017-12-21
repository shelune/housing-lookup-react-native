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

  onChangeArea(area) {
    this.setState({area});
    if (area.length >= 3) {
      this.props.fetchSuggestions(area);
    }
  }

  renderAreaBadges() {
    const { selectedPlaces } = this.props;
    if (selectedPlaces) {
      return selectedPlaces.map((place, index) => {
        return (
          <Badge
            key={index}
            containerStyle={styles.badge}
            value={place.district ? `${place.district}, ${place.municipality}` : place.municipality}
            onPress={() => this.props.removeArea(index)}
          />
        )
      });
    }
    
    return null;
  }

  onBtnPress() {
    const commaPos = this.state.area.indexOf(',');
    if (commaPos !== -1) {
      const district = this.state.area.substring(commaPos, 0).trim()
      const municipality = this.state.area.substring(commaPos + 1, this.state.area.length).trim();
      this.props.selectArea({municipality: municipality, district: district});
    } else {
      this.props.selectArea({municipality: this.state.area});
    }
    this.setState({ area: '' });
  }

  render() {
    // console.log('criteria props when rendering: ', this.state.area);
    
    return (
      <View>
        <FormLabel>City / Area:</FormLabel>
        <FormInput
          placeholder='Where do you want to live in?'
          value={this.state.area}
          onChangeText={(area) => this.onChangeArea(area)}
        />
        <View style={styles.badgeContainer}>
          {this.renderAreaBadges()}
        </View>
        <Button
          style={styles.button}
          title='Add'
          onPress={() => this.onBtnPress()}
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