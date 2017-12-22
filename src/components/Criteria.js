import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TextInput,
  ScrollView 
} from 'react-native';
import { connect } from 'react-redux';
import { fetchApartments } from './../actions';
import { Button } from 'react-native-elements';

import resources from './../utilities/resources';
import styling from './../utilities/styling';

import CriteriaArea from './CriteriaArea';
import CriteriaRent from './CriteriaRent';
import CriteriaHousingTypes from './CriteriaHousingTypes';
import CriteriaFeatures from './CriteriaFeatures';
import AutocompletePanel from './AutocompletePanel';

class Criteria extends Component {

  onButtonPress() {
    this.props.fetchApartments({ criteria: this.props.criteria, pageNumber: this.props.pageNumber});
  }

  render() {
    return (
      <ScrollView>
        {/* Area */}
        <CriteriaArea
          style={styles.section}
        />
        {/* Rent Price */}
        <CriteriaRent style={styles.section}/>
        {/* Housing Types */}
        <CriteriaHousingTypes style={styles.section} />
        <CriteriaFeatures style={styles.section} />
        <Button
          large
          backgroundColor={styling.accentColorRed}
          title='Search'
          loading={this.props.searchLoading}
          onPress={() => this.onButtonPress()}
          buttonStyle={styles.searchButton}
        />
        <AutocompletePanel />
      </ScrollView>
    )
  };
}

const styles = {
  section: {
    marginBottom: 20,
  },
  searchButton: {
    marginTop: 20
  }
}

const mapStateToProps = state => {
  // console.log('criteria states?', state.fetchApartments);
  return {
    criteria: state.criteria,
    searchLoading: state.fetchApartments.loading,
    pageNumber: state.fetchApartments.pageNumber
  }
}

export default connect(mapStateToProps, { fetchApartments })(Criteria);
