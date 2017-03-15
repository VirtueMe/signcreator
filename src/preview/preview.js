import React, { Component, PropTypes } from 'react';

import { themr } from 'react-css-themr';
import { PREVIEW } from '../identifiers';


const factory = () => {
  class Preview extends Component {
    state = {
      image: null
    };

    componentDidMount() {
      this.loadImage(this.props);
    }

    componentWillReceiveProps(nextProps) {
      const { image } = nextProps;

      if (image !== this.props.image) {
        this.loadImage(nextProps);
      }
    }

    loadImage(props) {
      const { image } = props;
      const self = this;

      image.then(function(data) {
        self.setState({ image: data.image });
      });
    }

    render() {
      const { theme, className, style } = this.props;
      const { image } = this.state;

      const img = image ? <img src={image} role='presentation' /> : null;

      return (
        <div className={theme[className]} style={style}>{img}</div>
      )
    }
  }

  Preview.propTypes = {
    className: PropTypes.string,
    image: PropTypes.object,
    theme: PropTypes.shape({
      preview: PropTypes.string
    })
  };

  return Preview;
}


const Preview = factory();

export default themr(PREVIEW, null)(Preview);

export { factory as previewFactory };
export { Preview };
