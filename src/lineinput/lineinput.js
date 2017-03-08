import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import { themr } from 'react-css-themr';
import { LINEINPUT } from '../identifiers';

import DropDownline from '../frames/linedropdown';

import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { FontIcon, IconButton, Input, ListItem } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const factory = (FontIcon) => {
  class LineInput extends Component {

    render() {
      const PositionMenu = this.props.menu;
      const { actions, index, items, texts, theme, value } = this.props;

      const input = <DropDownline key='decor' value={value} items={items} action={actions.addDecorLine} texts={ { label: texts.placeholder, noLineText: texts.noLineText } } />;

      const menuActions = [];

      if (PositionMenu) {
        menuActions.push(<PositionMenu key="0" />);
      }

      return (
        <ListItem
          itemContent={input}
          rightActions={menuActions}
        />
      );
    }
  }

  LineInput.propTypes = {
    theme: PropTypes.shape({
      full: PropTypes.string,
      icon: PropTypes.string,
      inputElement: PropTypes.string,
      width: PropTypes.string
    })
  };

  LineInput.defaultProps = {
    actions: {

    },
    texts: {
      placeholder: 'Dekorlinje',
      noLineText: 'Ingen linje valgt'
    }
  };

  return LineInput;
};

const LineInput = factory(InjectedFontIcon);

export default themr(LINEINPUT, null)(LineInput);

export { factory as lineInputFactory };
export { LineInput };
