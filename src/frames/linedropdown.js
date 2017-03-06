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

const items = [
  { value: 1, img: image0 },
  { value: 2, img: image1 },
  { value: 3, img: image2 },
  { value: 4, img: image3 },
  { value: 5, img: image4 },
  { value: 6, img: image5 }
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
  allItems() {
    const { items, rotatedStyle, style, texts } = this.props;
    return items &&  items.length ? [{ value: 0, text: texts.noLineText }].concat(createStyleArray(items, style), createStyleArray(items, rotatedStyle, items.length)): [];
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
    const { action, texts, value } = this.props;

    return (
      <Dropdown
        auto={false}
        source={this.allItems()}
        onChange={action}
        label={texts.label}
        template={this.customItem}
        value={value}
      />
    );
  }
}

export class HorizontalDropdown extends DropdownBase {
  constructor(props) {
    super(props);
  }
}

HorizontalDropdown.defaultProps = {
  items: items,
  rotatedStyle: Object.assign({}, imageStyle, horizontal,  { transform: 'rotate(180deg)' }),
  style: Object.assign({}, imageStyle, horizontal),
  texts: {
    label: 'Velg hvilken linje du ønsker',
    noLineText: 'Ingen linje'
  },
  value: 0
};

export default HorizontalDropdown;
