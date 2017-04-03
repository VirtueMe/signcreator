import React, { Component } from 'react';
import { Dropdown } from 'react-toolbox';
import landscape from '../images/landscape.png';
import portrait from '../images/portrait.png';
import heart from '../images/heart.png';
import square from '../images/square.png';

const defaultStyle = {
  display: 'flex',
  height: '32px',
  width: '32px',
  flexGrow: 0,
  marginRight: '8px',
  marginLeft: '8px',
  backgroundColor: 'white',
};

const borderStyle = {
  border: 'solid 1px darkgray'
};

const imageStyle = Object.assign({}, defaultStyle, borderStyle, { height: '16px', paddingTop: '8px' });
const squareStyle = Object.assign({}, defaultStyle, borderStyle);
const portraitStyle = Object.assign({}, defaultStyle, borderStyle, { width: '16px', marginLeft: '16px', marginRight: '16px'});




export default class SignDropdown extends Component {

  handleChange = (value) => {
    this.setState({ selected: value });
  };

  customItem (item) {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    const contentStyle = {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2
    };

    return (
      <div style={containerStyle}>
        <img src={item.img} style={item.style} role='presentation' />
        <div style={contentStyle}>
          <strong>{item.name}</strong>
          <small>{item.description}</small>
        </div>
      </div>
    );
  }

  render () {
    const { actions, texts, value } = this.props;

    const items = [
      { value: 0, name: texts.items['0'].title, description: texts.items['0'].description, img: landscape, style: imageStyle },
      { value: 1, name: texts.items['1'].title, description: texts.items['1'].description, img: portrait, style: portraitStyle },
      { value: 2, name: texts.items['2'].title, description: texts.items['2'].description, img: square, style: squareStyle },
      { value: 3, name: texts.items['3'].title, description: texts.items['3'].description, img: heart, style: defaultStyle },
    ];

    return (
      <Dropdown
        auto={false}
        source={items}
        onChange={actions.setType}
        label={texts.label}
        template={this.customItem}
        value={value}
      />
    );
  }
}

SignDropdown.defaultProps = {
  actions: {
    setType: function() {
      console.info(arguments);
    }
  },
  texts: {
    label: 'Velg hvilket skilt du ønsker',
    items: {
      '0': {
        title: 'Liggende skilt',
        description: 'Bedre plass til lange navn',
        longdescription: ''
      },
      '1': {
        title: 'Stående skilt',
        description: 'Plass til flere linjer tekst',
        longdescription: ''
      },
      '2': {
        title: 'Kvadratisk skilt',
        description: 'Enkelt og stilrent skilt',
        longdescription: ''
      },
      '3': {
        title: 'Hjerteformet skilt',
        description: 'Til en kjærlig familie',
        longdescription: ''
      }
    }
  },
  value: null,
}
