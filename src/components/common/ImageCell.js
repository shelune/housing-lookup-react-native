import React, { Component } from 'react';
import { Image, View } from 'react-native';

import styling from '../../utilities/styling';

class ImageCell extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 0, height: 0};
  }

  componentDidMount() {
    this.setImageDimension(this.props.uri)
  }

  setImageDimension(url) {
    Image.getSize(url, (width, height) => {
      this.setState({width, height});
    })
  }

  getCardStyle(currentStyles, width, height) {
    return {
      ...currentStyles,
      width,
      height
    }
  }

  render() {
    return (
      <Image
        source={{ uri: this.props.uri }}
        style={this.getCardStyle(styles.image, this.state.width, this.state.height)}
      />
    );
  }
}

const styles = {
  image: {
    alignSelf: 'center',
    marginBottom: 10
  }
}

export default ImageCell;