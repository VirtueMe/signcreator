import React from 'react';
import {Dropdown, Avatar} from 'react-toolbox';
import image from '../images/rectangle.png';
import heart from '../images/heart.png';
import square from '../images/square.png';

const imageStyle = {
  display: 'flex',
  height: '32px',
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

  albums = [
    { value: 1, artist: 'Avlangt skilt', album: 'Bedre plass for lange navn', img: image, style: Object.assign({}, imageStyle, { width: '64px' }) },
    { value: 2, artist: 'Kvadratisk skilt', album: 'Når du ikke trenger så stor plass', img: heart, style: squareStyle },
    { value: 3, artist: 'Hjerteformet skilt', album: 'For en kjærlig familie', img: square, style: squareStyle },
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
          <strong>{item.artist}</strong>
          <small>{item.album}</small>
        </div>
      </div>
    );
  }

  render () {
    return (
      <Dropdown
        auto={false}
        source={this.albums}
        onChange={this.handleChange}
        label='Velg hvilket skilt du ønsker'
        template={this.customItem}
        value={this.state.selected}
      />
    );
  }
}
