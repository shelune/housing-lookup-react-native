import React, { Component, PureComponent } from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './../actions';

import SuggestionCell from './common/SuggestionCell';

import styling from '../utilities/styling';

class AutocompletePanel extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderItem({item}) {
    return (
      <SuggestionCell 
        place={item.place}
      />
    );
  }

  render() {
    return this.props.status === 'ok'
    ? (
      <FlatList
        style={styles.list}
        data={this.props.items}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index}
      />
    ) : null;
  }
}

const styles = {
  list: {
    position: 'absolute',
    backgroundColor: '#fafafa',
    top: 70,
    left: 10,
    width: styling.screenWidth - 20,
    zIndex: 3,
  },
  listItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 30,
  }
};

const mapStateToProps = state => {
  const {items, status} = state.suggestions;
  return {
    items,
    status
  }
}

export default connect(mapStateToProps, actions)(AutocompletePanel);