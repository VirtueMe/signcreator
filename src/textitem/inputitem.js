import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';

import { themr } from 'react-css-themr';
import { TEXTINPUT } from '../identifiers';

import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { Button, IconButton, Input, ListItem, Tooltip } from 'react-toolbox';

import FontPicker from 'react-font-picker';

import { SliderPicker as ColorPicker, CirclePicker as Picker } from 'react-color';

const ToolTipButton = Tooltip(Button);

const factory = (FontIcon) => {
  class TextInput extends Component {
    state = {
      showFont: false
    };

    focus = () => {
      this.setState((prevState) => {
        return { showFont: !prevState.showFont };
      });
    }

    fontChanged = (font) => {
      const { actions, index } = this.props;

      actions.changeFont(index, font);
    }

    colorChanged = (color) => {
      const { actions, index } = this.props;
      const { rgb } = color;

      actions.changeTextColor(index, rgb);
    };


    render() {
      const PositionMenu = this.props.menu;
      const { actions, bold, center, color, font, fontPlaceholder, fonts, height, italic, index, theme, texts, value } = this.props;
      const { menu } = texts;

      const changeText = function(value) {
        actions.changeText(value, index);
      }

      const input = <Input type='text' label={texts.placeholder} icon='text_fields' value={value} onChange={changeText} className={theme.full} />;

      const menuActions = [ <IconButton key="0" icon='text_format' onMouseUp={() => this.focus()} accent={this.state.showFont} /> ];

      if (PositionMenu) {
        menuActions.push(<PositionMenu key="1" />);
      }

      const content = this.state.showFont ? (<span listItemIgnore={true} className={theme.full}>
        <div className={theme.maxheight}>
          <ToolTipButton icon="format_align_center" floating mini primary={center} tooltip={menu.center} onMouseUp={() => actions.toggleCenter(index)} />&nbsp;
          <ToolTipButton label={menu.bold[0]} floating mini primary={bold} tooltip={menu.bold} onMouseUp={() => actions.toggleBold(index)} />&nbsp;
          <ToolTipButton label={menu.italic[0]} floating mini primary={italic} tooltip={menu.italic} onMouseUp={() => actions.toggleItalic(index)} />&nbsp;
          <Input type='number' label={menu.fontsize || 'Font size'} error={null} value={height} hint={menu.fontsize || 'Font size'} name={ 'fontsize' + index } onChange={(value) => actions.setFontSize(index, value ? parseInt(value, 10) : 0)} />
          <FontPicker
            label={fontPlaceholder}
            fonts={fonts}
            value={font}
            onChange={this.fontChanged}
            />
          <br />
          <ColorPicker color={color} onChangeComplete={this.colorChanged} />
          <br />
          <Picker triangle='hide' color={color} onChangeComplete={this.colorChanged} width='' />
          <br />
        </div>
      </span> ) : null;

      return (
        <ListItem
          key={'i' + index}
          itemContent={input}
          rightActions={menuActions}
          ripple={false}
        >
          {content}
        </ListItem>
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
