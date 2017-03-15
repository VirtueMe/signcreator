import React, { Component } from 'react';
import Selector from './type';
import Backplate from './backplate';
import Frames from './frames';

class Settings extends Component {
  render() {
    const { actions, borders, settings, texts } = this.props;
    const { type, backplate } = settings;

    return (
      <div>
        <Selector value={type} actions={actions} texts={texts.selector} />
        <br />
        <Backplate backplate={backplate} actions={actions} texts={texts.plate} />
        <br />
        <Frames actions={actions} borders={borders} {...settings} texts={texts.frames} />
      </div>
    );
  }
}

Settings.defaultProps = {
  texts: {
    frames: {

    },
    plate: {

    },
    selector: {
      label: 'Velg hvilket skilt du ønsker',
      items: {
        '0': {
          title: 'Liggende skilt',
          description: 'Bedre plass til lange navn'
        },
        '1': {
          title: 'Stående skilt',
          description: 'Plass til flere linjer tekst'
        },
        '2': {
          title: 'Kvadratisk skilt',
          description: 'Enkelt og stilrent skilt'
        },
        '3': {
          title: 'Hjerteformet skilt',
          description: 'Til en kjærlig familie'
        }
      }
    }
  }
};

export default Settings;
