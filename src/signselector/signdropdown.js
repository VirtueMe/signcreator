import React, { Component } from 'react';
import { Dropdown, Avatar } from 'react-toolbox';
import landscape from '../images/landscape.png';
import portrait from '../images/portrait.png';
import heart from '../images/heart.png';
import square from '../images/square.png';

const imageStyle = {
  display: 'flex',
  height: '32px',
  width: '64px',
  flexGrow: 0,
  marginRight: '8px',
  marginLeft: '8px',
  backgroundColor: 'white'
};

const squareStyle = Object.assign({}, imageStyle, { width: '32px' });
const portraitStyle = Object.assign({}, imageStyle, { width: '16px'})

const items = [
  { value: 1, name: 'Liggende skilt', description: 'Bedre plass for lange navn', img: landscape, style: imageStyle },
  { value: 2, name: 'Stående skilt', description: 'Bedre plass i høyden', img: portrait, style: portraitStyle },
  { value: 3, name: 'Kvadratisk skilt', description: 'Når du ikke trenger så stor plass', img: square, style: squareStyle },
  { value: 4, name: 'Hjerteformet skilt', description: 'For en kjærlig familie', img: heart, style: squareStyle },
];


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
        <img src={item.img} style={item.style} />
        <div style={contentStyle}>
          <strong>{item.name}</strong>
          <small>{item.description}</small>
        </div>
      </div>
    );
  }

  render () {
    const { actions, items, label, value } = this.props;

    return (
      <Dropdown
        auto={false}
        source={items}
        onChange={actions.setType}
        label={label}
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
  items: items,
  label: 'Velg hvilket skilt du ønsker',
  value: null,
}
