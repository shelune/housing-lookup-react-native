import React, { Component } from 'react';
import { 
  Text,
  View,
  TextInput
} from 'react-native';
import { Tile, Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import * as actions from './../actions';

class ApartmentTile extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  onTilePress() {
    Actions.apartmentPage({ url: `https://www.sato.fi/en/rental-apartments/${encodeURIComponent(this.props.municipality)}/${encodeURIComponent(this.props.district)}/${encodeURIComponent(this.props.streetAddress)}/${this.props.realEstateId}/apartment/${this.props.id}`, floorPlan: this.props.floorPlan});
  }
  
  render() {
    return (
      <Tile
        title={`${this.props.streetAddress} ${this.props.addressNumber}`}
        contentContainerStyle={styles.tile}
        imageContainerStyle={styles.tileImage}
        imageSrc={{ uri: this.props.image }}
        onPress={() => this.onTilePress()}
      >
        <View style={styles.tileContent}>
          <View>
            <Text>{`${this.props.district}, ${this.props.municipality}`}</Text>
            <Text>{`Floor: ${this.props.floor} - Block: ${this.props.block}`} </Text>
          </View>
          <View>
            <Text>{`€${this.props.price}`}</Text>
            <Text>{`${this.props.livingArea}m2 - ${this.props.type}`} </Text>
          </View>
        </View>
        
      </Tile>
    );
  };
}

const styles = {
  tile: {
    minHeight: 120
  },
  tileContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tileImage: {
    height: 70
  }
}

export default ApartmentTile;