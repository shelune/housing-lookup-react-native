import React, { Component } from 'react';
import { Image, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './../../actions';

import styling from '../../utilities/styling';

class AutocompletePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlatList 
      
      />
    );
  }
}

const styles = {
  
};

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, actions)(AutocompletePanel);