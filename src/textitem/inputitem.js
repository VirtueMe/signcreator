import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import { themr } from 'react-css-themr';
import { TEXTINPUT } from '../identifiers';

import { SketchPicker } from 'react-color';

import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { Dialog, FontIcon, IconButton, Input, ListItem } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const factory = (FontIcon) => {
  class TextInput extends Component {

    render() {
      const PositionMenu = this.props.menu;
      const { actions, bold, selectFont, italic, index, selectColor, texts, theme, value } = this.props;
      const { menu } = texts;
      const { format, action } = menu
      const center = (
        <MenuItem icon='format_align_center' caption={format.center} key="2a">
          <FontIcon value='' className={theme.width} />
        </MenuItem>
      );

      const FormatMenu = () => (
        <IconMenu icon='text_format' position='topRight'>
          <MenuItem icon='format_size' caption={format.increase} key="0" onClick={() => actions.increaseFont(index)}>
            <FontIcon className={theme.width} />
          </MenuItem>
          <MenuItem icon='text_fields' caption={format.decrease} key="1" onClick={() => actions.decreaseFont(index)}>
            <FontIcon className={theme.width} />
          </MenuItem>
          <MenuItem icon='text_format' caption={format.font} key="1a" onClick={selectFont}>
            <FontIcon value='' className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_bold' caption={format.bold} key="2" onClick={() => actions.toggleBold(index)}>
            <FontIcon value={ bold ? 'checked' : ''} className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_italic' caption={format.italic} key="3" onClick={() => actions.toggleItalic(index)}>
            <FontIcon value={ italic ? 'checked' : ''} className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_color_text' caption={format.color} key="4" onClick={selectColor}>
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
        format: {
          increase: "Øk skrift",
          decrease: 'Mink skrift',
          bold: 'Fet',
          italic: 'Kursiv',
          center: 'Sentrer',
          color: 'Farge'
        }
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
