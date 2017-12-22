import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './../../actions';

import styling from '../../utilities/styling';

class AutocompletePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItem({item}) {
    return (
      <View style={styles.listItem}>
        <Text>{`${item.place.district ? item.place.district + ', ' : ''}`}{item.place.municipality}</Text>
      </View>
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
    zIndex: 2,
  },
  listItem: {
    paddingVertical: 5,
    paddingHorizontal: 10
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