import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, List } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { increasePageNumber, fetchMoreApartments } from './../actions';

import ApartmentTile from './ApartmentTile';

import styling from '../utilities/styling';

class ApartmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {pageNumber: 0};
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  _renderTile({item}) {
    // console.log('rendering a single tile: ', item.id);
    return (
      <ApartmentTile
        id={item.id}
        streetAddress={item.address.streetAddress}
        addressNumber={item.number}
        district={item.address.district}
        municipality={item.address.municipality}
        zipCode={item.address.zipCode}
        image={`https://res.cloudinary.com/sato/image/upload/c_scale,w_600,f_auto/prod/${item.building.realEstate.image.primary.cloudinaryId}`}
        livingArea={item.livingArea}
        vacantDate={item.vacantDate}
        price={item.price}
        type={item.type}
        floor={item.floor}
        block={item.entrance}
        realEstateId={item.building.realEstateId}
        style={styles.apartmentTile}
      />
    )
  }

  onButtonPress() {
    this.props.fetchMoreApartments({criteria: this.props.criteria, pageNumber: this.props.pageNumber + 1});
  }

  render() {
    //console.log('apartment list: ', this.props.items);
    return (this.props.status === 'OK') ? (
      <ScrollView>
        <FlatList
          data={this.props.items}
          extraData={this.props.items}
          renderItem={this._renderTile}
          keyExtractor={this._keyExtractor}
        />
        <Button
          buttonStyle={styles.buttonLoadMore}
          large
          backgroundColor={styling.accentColorRed}
          title='Load More'
          loading={false}
          onPress={() => this.onButtonPress()}
        />
      </ScrollView>
    ) : (
      <View style={styles.errorScreen}>
        <Text>{'Something has gone wrong'}</Text>
      </View>
    )
  };
}

const styles = {
  buttonLoadMore: {
    width: styling.screenWidth,
    marginLeft: -15
  },
  errorScreen: {
    flex: 1,
    alignSelf: 'center'
  },
  apartmentTile: {
    marginBottom: 10
  }
}

const mapStateToProps = state => {
  const { pageNumber, items, page, status } = state.fetchApartments;
  const criteria = state.criteria;
  // console.log('apt list mapped props: ', state)

  return {
    pageNumber,
    items,
    page,
    criteria,
    status
  }
}

export default connect(mapStateToProps, { increasePageNumber, fetchMoreApartments })(ApartmentList);