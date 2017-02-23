import React from 'react';
import {Dropdown, Avatar} from 'react-toolbox';
import image0 from '../images/dekor/bladbord.png';
import image1 from '../images/dekor/blomst.png';
import image2 from '../images/dekor/bord.png';
import image3 from '../images/dekor/bord-2.png';
import image4 from '../images/dekor/hjerte-bord.png';
import image5 from '../images/dekor/hjerte-bord-2.png';

const horizontal = {
  height: '32px',
  width: '256px'
};

const vertical = {
  height: horizontal.width,
  width: horizontal.height
};


const imageStyle = {
  display: 'flex',
  flexGrow: 0,
  marginRight: '8px',
  marginLeft: '8px',
  backgroundColor: 'white'
};

// const rotatedStyle = Object.assign({}, imageStyle, );

const items = [
  { value: 0, img: image0 },
  { value: 1, img: image1 },
  { value: 2, img: image2 },
  { value: 3, img: image3 },
  { value: 4, img: image4 },
  { value: 5, img: image5 }
];

function createStyleArray(items, style, offset) {
  offset = offset || 0;

  return items
          .map(
            (item) => {
              return Object.assign({}, item, { style: style, value: item.value + offset });
            }
          );
}

export class DropdownBase extends React.Component {
  constructor(options) {
    super(options);

    this.items = options.items || items;
    this.label = options.label || 'Velg hvilken linje du ønsker';
  }

  state = {
    selected: -1
  };

  handleChange = (value) => {
    this.setState({ selected: value });
  };

  allItems() {
    return this.items &&  this.items.length ? [{ value: -1, text: 'Ingen linje'}].concat(createStyleArray(this.items, this.style), createStyleArray(this.items, this.rotatedStyle, this.items.length)): [];
  }

  customItem (item) {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    const content = item.img ? <img key={item.value} src={item.img} style={item.style} /> : <span style={imageStyle}>{item.text}</span>;

    return (
      <div style={containerStyle}>
        {content}
      </div>
    );
  }

  render () {
    return (
      <Dropdown
        auto={false}
        source={this.allItems()}
        onChange={this.handleChange}
        label={this.label}
        template={this.customItem}
        value={this.state.selected}
      />
    );
  }
}

export class HorizontalDropdown extends DropdownBase {
  constructor(options) {
    super(options);
    this.style = Object.assign({}, imageStyle, horizontal);
    this.rotatedStyle = Object.assign({}, this.style, { transform: 'rotate(180deg)' });
  }
}

export default HorizontalDropdown;
