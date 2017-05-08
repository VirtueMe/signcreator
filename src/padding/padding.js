import React, { Component } from 'react';
import { PropTypes }  from 'prop-types'; 

import { Input } from 'react-toolbox';


const factory = () => {
  class Padding extends Component {
    render() {
      const {actions, padding, texts} = this.props;

      return (
        <Input type='number' label={texts.placeholder} hint={texts.hint} name='paddding' value={padding} onChange={actions.setPadding} />
      );
    }
  }

  Padding.propTypes = {
    actions: PropTypes.shape({

    }),
    backplate: PropTypes.string,
    texts: PropTypes.shape({

    })
  };

  Padding.defaultProps = {
    padding: 0,
    texts: {
      placeholder: 'Linjeavstand',
      hint: 'Setter avstand mellom linjene'
    }
  };

  return Padding;
};

const Padding = factory();

export default Padding;

export { factory as paddingFactory };
export { Padding };
