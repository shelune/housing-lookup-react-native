import React, { Component } from 'react';
import { Text, Input, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchApartmentPage } from './../actions';

import _ from 'lodash';

import { Divider } from 'react-native-elements';
import TextCell from './common/TextCell';
import ImageCell from './common/ImageCell';

import styling from '../utilities/styling';

class ApartmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.loading !== nextProps.loading) {
      this.setState({loading: nextProps.loading});
    }
  }

  componentDidMount() {
    //  console.log('mounted, fetch with url', this.props.url);
    this.props.fetchApartmentPage(this.props.url);
  }

  render() {
    return (this.state.loading) ? (
      <View>
        <Text>Loading...</Text>
      </View>
    ) : (
      <ScrollView>
        <Image
          source={{ uri: this.props.apartment.previewImage }}
          style={styles.previewImage}
        />
        <View style={styles.pageSection}>
          <Text style={styles.pageHeader}>
            {this.props.apartment.location}
          </Text>
        </View>
        <View style={styles.pageSection}>
          <Text style={styles.pageHeader}>
            {'Apartment Details'}
          </Text>
          {
            Object.keys(this.props.apartment).map((feature, index) => {
              if (feature !== 'apartmentImages' && feature !== 'previewImage' && feature !== 'location') {
                return (
                  <TextCell
                    key={index}
                    cellProperty={_.startCase(feature)}
                    cellValue={this.props.apartment[feature]}
                  />
                )
              }
            })
          }
        </View>
        <View style={styles.pageSection}>
          <Text style={styles.pageHeader}>{'Apartment Images'}</Text>
          <View>
            {
              this.props.apartment.apartmentImages.map((image, index) => {
                return (
                  <ImageCell 
                    key={index}
                    uri={image}
                  />
                )
              })
            }
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  pageDivider: {
    backgroundColor: styling.accentColorRed
  },
  pageHeader: {
    fontSize: 24,
    marginBottom: 10
  },
  pageSection: {
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  previewImage: {
    resizeMode: Image.resizeMode.cover,
    width: styling.screenWidth,
    height: 180,
    marginBottom: 10
  },
  floorPlanImage: {
    width: styling.screenWidth * 0.6,
    height: styling.screenWidth * 0.6,
    alignSelf: 'center'
  }
}

const mapStateToProps = state => {
  console.log('map state to props in apt page: ', state);
  return {
    loading: state.apartmentInfo.loading,
    statusTxt: state.apartmentInfo.statusTxt,
    apartment: state.apartmentInfo.apartment
  }
}

export default connect(mapStateToProps, { fetchApartmentPage })(ApartmentPage);