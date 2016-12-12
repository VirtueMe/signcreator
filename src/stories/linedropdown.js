import React from 'react';
import {Dropdown, Avatar} from 'react-toolbox';
import image from '../images/fancyline.png';

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

const horizontalStyle = Object.assign({}, imageStyle, horizontal);
const rotatedHorizontalStyle = Object.assign({}, horizontalStyle, { transform: 'rotate(180deg)' });



// const rotatedStyle = Object.assign({}, imageStyle, );

const items = [
  { value: 0, img: image}
];

function createStyleArray(items, style, offset) {
  offset = offset || 0;

  return
    items
      .map(
        (item) => {
          return Object.assign({}, item, { style: style, value: item.value + offset });
        }
      );
}


export class DropdownBase extends React.Component {
  constructor(options) {
    super(options);
    console.info(options, 'hello');

    console.info(createStyleArray(options.items, options.style));

    this.items = options.items && options.items.length ? [].concat(createStyleArray(options.items, options.style), createStyleArray(options.items, options.rotatedStyle, options.items.length)): [];

    console.dir(this.items);
  }

  state = {
    selected: -1
  };


  handleChange = (value) => {
    this.setState({ selected: value });
  };

  customItem (item) {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    return (
      <div style={containerStyle}>
        <img src={item.img} style={item.style} />
      </div>
    );
  }

  render () {
    console.info(this.items);

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

export default class HorizontalDropdown extends DropdownBase {
  constructor(options) {
    super(Object.assign({}, options || {}, { items: items, style: horizontalStyle, rotatedStyle: rotatedHorizontalStyle }));
  }
}
