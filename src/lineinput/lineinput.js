import React, { Component } from 'react';
import { PropTypes }  from 'prop-types'; 
import classnames from 'classnames';

import { themr } from 'react-css-themr';
import { LINEINPUT } from '../identifiers';

import DropDownline from '../frames/linedropdown';

import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { ListItem } from 'react-toolbox';

const factory = (FontIcon) => {
  class LineInput extends Component {

    render() {
      const PositionMenu = this.props.menu;
      const { actions, index, items, texts, theme, selected } = this.props;

      const changeDividerLine = function(value, img=null) {
        actions.changeDividerLine(index, value, img);
      };

      const input = (
        <div data-react-toolbox="divideselector" className={ classnames(theme.inputcontainer, theme.withIcon) }>
          <div className={theme.full}>
            <DropDownline key='decor' value={selected} items={items} action={changeDividerLine} texts={ { label: texts.placeholder, noLineText: texts.noLineText } }  />
          </div>
          <FontIcon value="remove" className={theme.icon} />
        </div>
      );

      const menuActions = [];

      if (PositionMenu) {
        menuActions.push(<PositionMenu key="0" />);
      }

      return (
        <ListItem
          key={'d' + index}
          itemContent={input}
          rightActions={menuActions}
          ripple={false}
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
