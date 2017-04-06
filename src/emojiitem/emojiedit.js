import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { themr } from 'react-css-themr';
import { IMAGESSELECTOR } from '../identifiers';
import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { ListItem } from 'react-toolbox';

import { MenuItem } from 'react-toolbox';

import EmojiMenu from './emojiitems';
import EmojiList from './emojilist';

const factory = (FontIcon) => {
  class ImagesSelector extends Component {
    render() {
      const PositionMenu = this.props.menu;
      const { theme, value, index, actions, texts } = this.props;

      const input = (
        <div data-react-toolbox="imagesselector" className={ classnames(theme.input, theme.withIcon) }>
          <EmojiList theme={theme} className={theme.inputElement} value={value} index={index} actions={actions} />
          <FontIcon value='insert_photo' className={theme.icon} />
          <span className={theme.bar} />
          {!texts.emptyText || value.length ? null : (<span className={theme.empty}>{texts.emptyText}</span>)}
        </div>
      );

      const menuActions = [ <EmojiMenu key="0" theme={theme} actions={actions} index={index} texts={texts.menu} /> ];

      if (PositionMenu) {
        menuActions.push(
          <PositionMenu key="1">
            <MenuItem icon='clear' caption={texts.empty} onClick={() => actions.clearEmojis(index)} />
          </PositionMenu>
        );
      }

      return (
        <ListItem
          key={'e' + index}
          itemContent={input}
          rightActions={menuActions}
          ripple={false}
        />
      );
    }
  }



  ImagesSelector.propTypes = {
    texts: PropTypes.shape({
      menu: PropTypes.shape({
        larger: PropTypes.string,
        smaller: PropTypes.string,
        title: PropTypes.string,
      })
    }),
    theme: PropTypes.shape({
      icon: PropTypes.string,
      inputElement: PropTypes.string,
      width: PropTypes.string
    })
  };

  ImagesSelector.defaultProps = {
    texts: {
      empty: 'Tøm',
      emptyText: 'Velg emoji´s fra menyen',
      menu: {
        larger: 'Øk',
        smaller: 'Mindre',
        title: 'Velg'
      }
    }
  };

  return ImagesSelector;
};

const ImagesSelector = factory(InjectedFontIcon);

export default themr(IMAGESSELECTOR, null)(ImagesSelector);
export { factory as imagesSelectorFactory};
export { ImagesSelector };
