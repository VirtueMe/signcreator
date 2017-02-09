import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { themr } from 'react-css-themr';
import { IMAGESSELECTOR } from '../identifiers';
import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { IconButton, FontIcon } from 'react-toolbox';
import { ListItem } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

import EmojiList from './emojilist';

const factory = (FontIcon) => {
  class ImagesSelector extends Component {
    render() {
      const { theme } = this.props;

      const FormatMenu = () => (
        <IconMenu icon='text_format' position='topRight' menuRipple>
          <MenuItem icon='format_bold' caption="Bold">
            <FontIcon value='checked' className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_italic' caption="Italic">
            <FontIcon value='' className={theme.width} />
          </MenuItem>
          <MenuItem icon='format_align_center' caption="Align center">
            <FontIcon value='' className={theme.width} />
          </MenuItem>
        </IconMenu>
      );

      const PositionMenu = () => (
        <IconMenu icon='more_vert' position='topRight' menuRipple>
          <MenuItem icon='keyboard_arrow_up' caption="Move up" />
          <MenuItem icon='keyboard_arrow_down' caption="Move down" />
          <MenuDivider />
          <MenuItem icon='delete' caption="Delete line" />
        </IconMenu>
      );

      const input = (
        <div data-react-toolbox="imagesselector" className={theme.inputElement}>
          <EmojiList className={theme.inputElement} />
          <FontIcon value='insert_photo' className={theme.icon} />
        </div>
      );

      const actions = [ <FormatMenu key="0" />, <PositionMenu key="1" /> ];

      return (
        <ListItem
          itemContent={input}
          rightActions={actions}
        />
      );
    }
  }

  ImagesSelector.propTypes = {
    theme: PropTypes.shape({
      icon: PropTypes.string,
      inputElement: PropTypes.string,
      width: PropTypes.string
    })
  };

  return ImagesSelector;
};

const ImagesSelector = factory(InjectedFontIcon);

export default themr(IMAGESSELECTOR, null)(ImagesSelector);
export { factory as imagesSelectorFactory};
export { ImagesSelector };
