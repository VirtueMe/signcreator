import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { themr } from 'react-css-themr';
import { PREVIEW } from '../identifiers';


const factory = () => {
  class Preview extends Component {
    render() {
      const { image, theme } = this.props;
      const img = image ? <img src={image} /> : null;

      return (
        <div className={theme.image}>{img}</div>
      )
    }
  }

  Preview.propTypes = {
    image: PropTypes.string,
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
