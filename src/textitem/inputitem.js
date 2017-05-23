import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';

import { themr } from 'react-css-themr';
import { TEXTINPUT } from '../identifiers';

import { FontIcon as InjectedFontIcon } from 'react-toolbox';

import { Button, Input, ListItem, Tooltip } from 'react-toolbox';

import { IconMenu, MenuItem } from 'react-toolbox';

import FontPicker from 'react-font-picker';

import { SliderPicker as ColorPicker, CirclePicker as Picker } from 'react-color';

const ToolTipButton = Tooltip(Button);

const factory = (FontIcon) => {
  class TextInput extends Component {
    state = {
      showFont: false
    };

    focus = (value) => {
      this.setState((prevState) => {
        return { showFont: value };
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
      const { actions, bold, center, color, font, fontPlaceholder, fonts, height, italic, index, selectColor, selectFont, theme, texts, value } = this.props;
      const { menu } = texts;

      console.info(this.props);

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

      const input = <Input type='text' label={texts.placeholder} icon='text_fields' value={value} onChange={changeText} onFocus={() => this.focus(true)} className={theme.full} />;

      const menuActions = [ <FormatMenu key="0" /> ];

      if (PositionMenu) {
        menuActions.push(<PositionMenu key="1" />);
      }

      const content = this.state.showFont ? (<span listItemIgnore={true} className={theme.full}>
        <div className={theme.maxheight}>
          <ToolTipButton icon="format_align_center" floating mini primary={center} tooltip="Senter" onMouseUp={() => actions.toggleCenter(index)} />&nbsp;
          <ToolTipButton label="F" floating mini primary={bold} tooltip="Fet" onMouseUp={() => actions.toggleBold(index)} />&nbsp;
          <ToolTipButton label="K" floating mini primary={italic} tooltip="Kursiv" onMouseUp={() => actions.toggleItalic(index)} />
          <Input type='number' label="Font size" error={null} value={height} hint="Font size" name={ 'fontsize' + index } onChange={(value) => actions.setFontSize(index, value ? parseInt(value) : 0)} />
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
