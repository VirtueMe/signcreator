import woman from '../images/farger/mor-mellom4.png';
import man from '../images/farger/far-mellom4.png';
import boy from '../images/farger/gutt-mellom4.png';
import girl from '../images/farger/jente-mellom4.png';

let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let img4 = document.createElement('img');

img1.src = woman;
img2.src = man;
img3.src = girl;
img4.src = boy;

const information = {
  description: 'Start med blanke ark og lag ditt eget unike skilt.',
  subtitle: 'Bedre plass til lange navn',
  stylesubtitle: 'Et elegant skilt som vekker oppsikt',
  styletitle: 'Monokrom',
  title: 'Liggende skilt'
};


const imageData = [{
  items: [
    { type: 1, value: 'Velkommen', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 10, g: 10, b: 10, a: 1} },
    { type: 1, value: 'Familien Thomas', height: 10, center: true, italic: false, bold: true, font: 'Arial', color: { r: 144, g: 19, b: 254, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, padding: 30, backplate: '0', top: 0, left: 0, right: 0, bottom: 0 },
  information: information
}, {
  items: [
    { type: 1, value: 'Velkommen', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 13, g: 150, b: 243, a: 1} },
    { type: 1, value: 'Familien Thomas', height: 10, center: true, italic: false, bold: true, font: 'Arial', color: { r: 13, g: 150, b: 243, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', padding: 30, top: 0, left: 0, right: 0, bottom: 0 }
}, {
  items: [
    { type: 1, value: 'Velkommen', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 76, g: 175, b: 80, a: 1} },
    { type: 1, value: '', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 76, g: 175, b: 80, a: 1} },
    { type: 1, value: 'Familien Jensen', height: 10, center: true, italic: false, bold: true, font: 'Arial', color: { r: 76, g: 175, b: 80, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', padding: 30, top: 0, left: 0, right: 0, bottom: 0 },
  information: information
}, {
  items: [
    { type: 1, value: 'Velkommen', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 255, g: 87, b: 34, a: 1} },
    { type: 1, value: 'Familien Olsen', height: 10, center: true, italic: false, bold: true, font: 'Arial', color: { r: 255, g: 87, b: 34, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', padding: 30, top: 0, left: 0, right: 0, bottom: 0 },
  information: information
}];

const texts = {
  amount: {
    symbol: "kr",
    decimal: ",",
    thousand: " ",
    precision: 2,
    format: "%v %s"
  },
  receipt: {
    avatar: 'https://placeimg.com/80/80/animals',
    header: 'Navnemerket',
    subheader: 'Stedet for navnelapper og skilt',
    image: 'https://placeimg.com/800/450/nature',
    title: 'Kvittering',
    subtitle: 'Takk for din bestilling',
    description: 'Vi setter pris på at du har valgt å bli kunden vår. Skulle det være noe du lurer på med bestillingen, nøl ikke med å ta kontakt med kundeservice.',
    buttons: {
      new: {
        text: 'Lag ditt neste skilt'
      }
    }
  },
  templates: {
    item: {
      buttons: {
        select: {
          text: 'Velg mal'
        }
      }
    },
    header: {
      description: 'Velg en av malene under for å lage ditt eget unike skilt, du kan etterpå redigere og endre det slik det passer deg best.',
      subtitle: 'Noe for en hver smak...',
      title: 'Lag ditt eget skilt på 1-2-3!'
    }
  },
  design: {
    buttons: {
      back: {
        text: 'Endre mal'
      }
    },
    editlist: {
      title: 'Tekst på skilt',
      menu: {
        action: {
          delete: 'Slett',
          down: 'Flytt ned',
          up: 'Flytt opp'
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
      textline: {
        menu: {
          increase: "Øk skrift",
          decrease: 'Mink skrift',
          font: 'Font',
          bold: 'Fet',
          italic: 'Italic',
          center: 'Sentrer',
          color: 'Farge'
        },
        placeholder: 'Tekstlinje'
      },
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
      }
    },
    preview: {
      title: 'Forhåndsvisning',
      continue: {
        text: 'Gå videre'
      },
    },
    settings: {
      title: 'Lag ditt dørskilt på 1-2-3!',
      frames: {
        title: 'Border',
        noLineText: 'Ingen linje',
        labelTop: 'Velg øvre linje',
        labelLeft: 'Velg venstre linje',
        labelRight: 'Velg høyre linje',
        labelBottom: 'Velg nedre linje'
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
      },
      price: {
        title: 'Priser',
        total: 'Sum:'
      }
    }
  },
  payment: {
    customer: {
      title: 'Kundeinformasjon',
      email: {
        placeholder: 'E-post',
        error: 'E-post påkrevd'
      },

      name: {
        placeholder: 'Fullt navn',
        error: 'Navn påkrevd'
      },

      address: {
        placeholder: 'Adresse',
        error: 'Adresse påkrevd'
      },

      zip: {
        placeholder: 'Postnummer',
        error: 'Adresse påkrevde'
      },

      city: {
        placeholder: 'Poststed',
        error: 'Poststed påkrevd'
      }
    },
    price: {
      title: 'Priser',
      total: 'Totalt:'
    },
    options: {
      title: 'Betalingsinformasjon',
      email: {
        title: 'Faktura',
        description: 'Faktura sendes på epost',
      },
      creditcard: {
        title: 'Kredittkort',
        description: 'Her legger du inn kredittkortopplysningene for kredittkortet du ønsker å benytte.',
        number: {
          placeholder: 'Kredittkortnummer',
          error: 'Ugyldig kredittkortnummer'
        },
        month: {
          placeholder: 'MM'
        },
        year: {
          placeholder: 'ÅÅ'
        },
        ccv2: {
          placeholder: 'CCV2',
          hint: 'Se på baksiden av ditt kort'
        },
        logo: {
          src: 'https://cdn.dibspayment.com/logo/checkout/combo/horiz/DIBS_checkout_kombo_horizontal_04.png',
          alt: 'DIBS + Payments made easy'
        }
      }
    },
    buttons: {
      continue: {
        text: 'Bestill'
      },
      back: {
        text: 'Gå tilbake'
      }
    }
  }
};

const state = {
  templates: {
    items: imageData.concat(
      imageData.map(item => (Object.assign({}, item, { settings: Object.assign({}, item.settings, { type: 1 }) }))),
      imageData.map(item => (Object.assign({}, item, { settings: Object.assign({}, item.settings, { type: 2 }) }))),
      imageData.map(item => (Object.assign({}, item, { settings: Object.assign({}, item.settings, { type: 3 }) })))
    )
  },
  customer: { email: '', emailValid: false, name: '', nameValid: false, address: '', addressValid: false, zip: '', zipValid: false, city: '', cityValid: false, valid: false },
  payment: { type: 0, number: '', numberValid: false, month: '', year: '', expiresValid: false, ccv2: '', ccv2Valid: false, valid: true },
  prices: {
    signs: {
      0: {
        amount: 399,
        text: 'Liggende skilt 10x15cm'
      },
      1: {
        amount: 399,
        text: 'Stående skilt 15x10cm'
      },
      2: {
        amount: 449,
        text: 'Kvadratisk skilt'
      },
      3: {
        amount: 499,
        text: 'Hjerteformet skilt'
      }
    },
    backplates: {
      0: {
        amount: 0,
        text: 'Ingen bakplate'
      },
      8: {
        amount: 15,
        text: 'Hvit plast bakplate'
      },
      4: {
        amount: 30,
        text: 'Børstet aluminium bakplate'
      }
    },
    fee: {
      amount: 15,
      text: 'Fakturagebyr'
    },
    shipping: {
      amount: 50,
      text: 'Frakt'
    }
  },
  items: [
    { type: 1, value: 'Her bor', height: 7, center: true, italic: false, bold: false, font: 'Arial', color: { r: 10, g: 10, b: 10, a: 1} },
    { type: 1, value: 'Familien Thomas', height: 8, center: true, italic: false, bold: true, font: 'Arial', color: { r: 144, g: 19, b: 254, a: 1} },
    { type: 1, value: 'Anita, Benny, Nathaniel og Alea', height: 8, center: true, italic: false, bold: false, font: 'Arial', color: { r: 208, g: 2, b: 27, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', padding: 20, top: 0, left: 0, right: 0, bottom: 0 },
  texts: texts
};

export default state;
