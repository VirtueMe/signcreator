import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import { themr } from 'react-css-themr';
import { TEXTINPUT } from '../identifiers';

import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { ListItem, IconButton, Input, FontIcon } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const factory = (FontIcon) => {
  class TextInput extends Component {
    render() {
      const PositionMenu = this.props.menu;
      const { theme, texts } = this.props;
      const { menu } = texts;
      const { format, action } = menu;

      console.info(this.props.menu);

      const FormatMenu = () => (
        <IconMenu icon='text_format' position='topRight' menuRipple>
          <MenuItem icon='format_bold' caption={format.bold} key="0">
            <FontIcon value='checked' className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_italic' caption={format.italic} key="1">
            <FontIcon value='' className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_align_center' caption={format.center} key="2">
            <FontIcon value='' className={theme.width} />
          </MenuItem>
        </IconMenu>
      );

      const input = <Input type='text' label={texts.placeholder} icon='text_fields' className={theme.full} />;

      const actions = [ <FormatMenu key="0" /> ];

      if (PositionMenu) {
        actions.push(PositionMenu);
      }

      return (
        <ListItem
          itemContent={input}
          rightActions={actions}
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
          bold: 'Fet',
          italic: 'Italic',
          center: 'Sentrer'
        }
      },
      placeholder: 'Text linje'
    }
  };

  return TextInput;
};

const TextInput = factory(InjectedFontIcon);

export default themr(TEXTINPUT, null)(TextInput);

export { factory as textInputFactory };
export { TextInput };
