import React, { Component } from 'react';

import InputItem from '../textitem';
import EmojiEdit from '../emojiitem';
import LineInput from '../lineinput';
import Menu from './menu';
import { SketchPicker } from 'react-color';
import FontPicker from 'react-font-picker';
import PositionMenu from './positionmenu';

import { themr } from 'react-css-themr';
import { EDITLIST } from '../identifiers';
import { FontIcon as InjectedFontIcon } from 'react-toolbox';




import { Dialog, List, ListItem } from 'react-toolbox';

const factory = (FontIcon) => {

  class EditList extends Component {
    state = {
      show_color: false,
      show_delete: false,
      show_font: false
    };

    showDelete(display, index=null) {
      this.setState({ show_delete: display, index: index });
    }

    cancelDelete = () => {
      this.showDelete(false);
    }

    cancelColor = () => {
      this.showColor(false);
    };

    showColor(display, index=null, color=null) {
      this.setState({
        show_color: display,
        index: index,
        color: color || {
          r: 0,
          g: 0,
          b: 0,
          a: 1,
        }
      });
    }

    selectColor() {
      this.showColor(false);
    }

    showFont = (display=false, index=null, font=null) => {
      this.setState({ show_font: display, index: index, font: font })
    };

    colorChanged = (color) => {
      const { actions } = this.props;
      const { changeTextColor } = actions;
      const { rgb } = color;

      changeTextColor(this.state.index, rgb);
      this.setState({ color: rgb });
    };

    fontChanged = (font) => {
      const { actions } = this.props;
      const { changeFont } = actions;

      changeFont(this.state.index, font);

      this.setState({ font: font });
    }


    deleteLine() {
      const { actions } = this.props;
      const { deleteLine } = actions;

      deleteLine(this.state.index);
      this.showDelete(false);
    }

    createColorPicker () {
      const popover = {
        position: 'absolute',
        zIndex: '2',
      };

      const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      };

      return (
        <div key="cp" style={ popover }>
          <div style={ cover } onClick={ this.cancelColor }/>
          <SketchPicker color={this.state.color} width={300} onChange={ this.colorChanged } />
        </div>
      )
    }

    render() {
      const { actions, decoration, fonts, items, texts, theme } = this.props;

      const colorPicker = this.state.show_color ? this.createColorPicker() : null;

      const delete_actions = [
        { label: texts.dialogs.remove.buttons.cancel, onClick: () => this.cancelDelete() },
        { label: texts.dialogs.remove.buttons.delete, onClick: () => this.deleteLine() }
      ];

      const font_actions = [
        { label: texts.dialogs.font.buttons.close, onClick: () => this.showFont(false) }
      ];



      const list = items.map((item, index) => {
        const menu = ({children}) => (
          <PositionMenu index={index} length={items.length} actions={actions} texts={texts} deleteLine={() => this.showDelete(true, index)}>
            {children}
          </PositionMenu>
        );

        switch (item.type) {
          case 1:
            return (
              <InputItem key={'0' + index} {...item} index={index} actions={actions} fonts={fonts} fontPlaceholder={texts.dialogs.font.placeholder} menu={menu} texts={texts.textline} selectColor={() => this.showColor(true, index, item.color )} selectFont={() => this.showFont(true, index, item.font)} />
            );
          case 2:
            return (
              <EmojiEdit key={'0' + index} {...item} index={index} actions={actions} menu={menu} texts={texts.emojiline} />
            );
          case 3:
            return (
              <LineInput key={'0' + index} {...item} index={index} actions={actions} menu={menu} texts={texts.dividerline} items={decoration} />
            );
          default:
            return null;
        }
      });

      return (
        <div key="root">
          { colorPicker}

          <List key="editlist1" ripple={false}>
            <ListItem key='0' itemContent={<span key="emptycontent" className={theme.content}></span>} rightActions={[<Menu key="addActions" actions={actions} />]} />
            {list}
          </List>

          <Dialog key="dd"
              actions={delete_actions}
              active={this.state.show_delete}
              onEscKeyDown={this.cancelDelete}
              onOverlayClick={this.cancelDelete}
              title={texts.dialogs.remove.title}
            >
            <p>{texts.dialogs.remove.description}</p>
          </Dialog>

          <Dialog key="fd"
              actions={font_actions}
              active={this.state.show_font}
              onEscKeyDown={this.showFont}
              onOverlayClick={this.showFont}
              title={texts.dialogs.font.title}
            >
            <FontPicker
              label={texts.dialogs.font.placeholder}
              fonts={fonts}
              value={this.state.font}
              onChange={this.fontChanged}
              />
          </Dialog>
        </div>
      )
    }
  }

  EditList.defaultProps = {
    items: [],

    fonts: [
      'Alegreya Sans',
      'Arial',
      'Arial Narrow',
  		'Arial Black',
  		'Courier New',
      'Cabin Condensed',
      'Copse',
      'Fredoka One',
      'Gentium Book Basic',
      'Georgia',
      'Lobster',
      'Lucida Console',
  		'Lucida Sans Unicode',
      'Neucha',
      'Playball',
      'Playfair Display SC',
      'Shadows Into Light Two',
      'Tahoma',
  		'Times New Roman',
  		'Verdana'
    ],

    actions: {},

    texts: {
      dialogs: {
        remove: {
          title: 'Bekreft sletting',
          description: 'Slette linjen?',
          buttons: {
            cancel: 'Avbryt',
            delete: 'Slett'
          }
        },

        font: {
          title: 'Velg font',
          placeholder: 'Velg font',
          buttons: {
            close: 'Lukk'
          }
        }
      },

      dividerline: {

      },

      emojiline: {
        menu: {
          larger: 'Øk',
          smaller: 'Mindre',
          title: 'Velg emoji'
        }
      },

      menu: {
        action: {
          delete: 'Slett',
          down: 'Flytt ned',
          up: 'Flytt opp'
        }
      },

      textline: {

      }
    }
  };

  return EditList;
};


const EditList = factory(InjectedFontIcon);

export default themr(EDITLIST, null)(EditList);
export { factory as editListFactory};
export { EditList };
