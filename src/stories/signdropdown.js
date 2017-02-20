import React from 'react';
import {Dropdown, Avatar} from 'react-toolbox';
import image from '../images/rectangle.png';
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

export default class DropdownTest extends React.Component {
  state = {
    selected: 3
  };

  items = [
    { value: 1, name: 'Avlangt skilt', description: 'Bedre plass for lange navn', img: image, style: imageStyle },
    { value: 2, name: 'Kvadratisk skilt', description: 'Når du ikke trenger så stor plass', img: square, style: squareStyle },
    { value: 3, name: 'Hjerteformet skilt', description: 'For en kjærlig familie', img: heart, style: squareStyle },
  ];

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
    return (
      <Dropdown
        auto={false}
        source={this.items}
        onChange={this.handleChange}
        label='Velg hvilket skilt du ønsker'
        template={this.customItem}
        value={this.state.selected}
      />
    );
  }
}
