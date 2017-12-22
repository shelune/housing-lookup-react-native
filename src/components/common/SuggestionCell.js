import React, { Component, PureComponent } from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { selectArea } from './../../actions';

import styling from '../../utilities/styling';

class SuggestionCell extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { area: '' };
  }

  _onPressSuggestion(item) {
    
    const {district, municipality} = item;
    if (district) {
      this.props.selectArea({ municipality: municipality, district: district });
    } else {
      this.props.selectArea({ municipality: municipality });
    }
  }

  render() {
    const {place} = this.props
    return (
      <TouchableHighlight onPress={this._onPressSuggestion.bind(this, place)} style={styles.listItem}>
        <Text>
          {`${place.district ? place.district + ', ' : ''}`}{place.municipality}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = {
  listItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 30,
  }
};

const mapStateToProps = state => {
  
}

export default connect(null, {selectArea})(SuggestionCell);