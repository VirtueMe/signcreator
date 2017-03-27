import React, { Component } from 'react';

import Backplate from './backplate';
import Frames from './frames';
import Padding from './padding';
import Selector from './type';

class Settings extends Component {
  render() {
    const { actions, borders, settings, texts } = this.props;
    const { type, backplate, padding } = settings;

    return (
      <div>
        <Selector value={type} actions={actions} texts={texts.selector} />
        <br />
        <Backplate backplate={backplate} actions={actions} texts={texts.plate} />
        <br />
        <Padding padding={padding} actions={actions} texts={texts.padding} />
        <br />
        <Frames actions={actions} borders={borders} {...settings} texts={texts.frames} />
      </div>
    );
  }
}

Settings.defaultProps = {
  texts: {
    frames: {
      title: 'Border',
      noLineText: 'Ingen linje',
      labelTop: 'Velg øvre linje',
      labelLeft: 'Velg venstre linje',
      labelRight: 'Velg høyre linje',
      labelBottom: 'Velg nedre linje'
    },
    padding: {
      title: 'Linjeavstand',
      placeholder: 'Linjeavstand',
      hint: 'Avstand mellom linjene'
    },
    plate: {
      title: 'Bakgrunn',
      '0': 'Nei',
      '4': 'Børstet aluminium',
      '8': 'Hvit plast'
    },
    selector: {
      title: 'Valg av skilt',
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
