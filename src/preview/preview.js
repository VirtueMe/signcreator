import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';
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

    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        delete this.timer;
      }
    }

    componentWillUnmount() {
      this.clearTimer();
    }

    loadImage(props) {
      const { image } = props;
      const self = this;

      this.clearTimer();

      this.timer = setTimeout(function() {
        if (self.timer) {
          clearTimeout(self.timer);
          delete self.timer;
        }

        image
          .get().then(function(data) {
            self.setState({ image: data.image });
          });
      }, 500);

    }

    render() {
      const { style, theme } = this.props;
      const { className } = this.props.image;
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
