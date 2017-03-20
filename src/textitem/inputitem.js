import React, { Component, PropTypes } from 'react';

import { themr } from 'react-css-themr';
import { TEXTINPUT } from '../identifiers';

import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { Input, ListItem } from 'react-toolbox';

import { IconMenu, MenuItem } from 'react-toolbox';

const factory = (FontIcon) => {
  class TextInput extends Component {

    render() {
      const PositionMenu = this.props.menu;
      const { actions, bold, center, italic, index, selectColor, selectFont, theme, texts, value } = this.props;
      const { menu } = texts;

      const FormatMenu = () => (
        <IconMenu icon='text_format' position='topRight' iconRipple={false} menuRipple={false}>
          <MenuItem icon='format_size' caption={menu.increase} key="0" onClick={() => actions.increaseFont(index)}>
            <FontIcon className={theme.width} />
          </MenuItem>
          <MenuItem icon='text_fields' caption={menu.decrease} key="1" onClick={() => actions.decreaseFont(index)}>
            <FontIcon className={theme.width} />
          </MenuItem>
          <MenuItem icon='text_format' caption={menu.font} key="1a" onClick={selectFont}>
            <FontIcon value='' className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_align_center' caption={menu.center} key="2a" onClick={() => actions.toggleCenter(index)}>
            <FontIcon value={ center ? 'checked' : ''} className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_bold' caption={menu.bold} key="2" onClick={() => actions.toggleBold(index)}>
            <FontIcon value={ bold ? 'checked' : ''} className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_italic' caption={menu.italic} key="3" onClick={() => actions.toggleItalic(index)}>
            <FontIcon value={ italic ? 'checked' : ''} className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_color_text' caption={menu.color} key="4" onClick={selectColor}>
            <FontIcon value='' className={theme.width} />
          </MenuItem>
        </IconMenu>
      );

      const changeText = function(value) {
        actions.changeText(value, index);
      }

      const input = <Input type='text' label={texts.placeholder} icon='text_fields' value={value} onChange={changeText} className={theme.full} />;

      const menuActions = [ <FormatMenu key="0" /> ];

      if (PositionMenu) {
        menuActions.push(<PositionMenu key="1" />);
      }

      return (
        <ListItem
          key={'i' + index}
          itemContent={input}
          rightActions={menuActions}
          ripple={false}
        />
      );
    }
  }

  TextInput.propTypes = {
    theme: PropTypes.shape({
      full: PropTypes.string,
      icon: PropTypes.string,
      inputElement: PropTypes.string,
      width: PropTypes.string
    })
  };

  TextInput.defaultProps = {
    actions: {

    },
    texts: {
      menu: {
        increase: "Større",
        decrease: 'Mindre',
        center: 'Sentrer',
        bold: 'Fet',
        font: 'Endre font',
        italic: 'Kursiv',
        color: 'Farge'
      },
      placeholder: 'Tekstlinje'
    }
  };

  return TextInput;
};

const TextInput = factory(InjectedFontIcon);

export default themr(TEXTINPUT, null)(TextInput);

export { factory as textInputFactory };
export { TextInput };
