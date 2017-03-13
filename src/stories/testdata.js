import woman from '../images/farger/mor-mellom2.png';
import man from '../images/farger/far-mellom2.png';
import boy from '../images/farger/gutt-mellom2.png';
import girl from '../images/farger/jente-mellom2.png';

let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let img4 = document.createElement('img');

img1.src = woman;
img2.src = man;
img3.src = girl;
img4.src = boy;

const texts = {
  receipt: {
    avatar: 'https://placeimg.com/80/80/animals',
    header: 'Navnemerket',
    subheader: 'Stedet for navnelapper og skilt',
    image: 'https://placeimg.com/800/450/nature',
    title: 'Kvittering',
    subtitle: 'Takk for din bestilling',
    description: 'Vi setter pris på at du har valgt å bli kunden vår. Skulle det være noe du lurer på med bestillingen, nøl ikke med å ta kontakt med kundeservice.',
    new: {
      text: 'Lag ditt neste skilt'
    }
  },
  step1: {
    editlist: {
      title: 'Tekst på skilt',
      menu: {
        action: {
          delete: 'Slett',
          down: 'Flytt ned',
          up: 'Flytt opp'
        }
      },
      textitem: {
        menu: {
          format: {
            increase: "Øk skrift",
            decrease: 'Mink skrift',
            center: 'Sentrer',
            font: 'Font',
            bold: 'Fet',
            italic: 'Italic',
            center: 'Sentrer',
            color: 'Farge'
          }
        },
        placeholder: 'Text linje'
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
      title: 'Lag ditt dørskilt på 1-2-3!'
    }
  }
};

const state = {
  view: { index: 0 },
  customer: { email: '', emailValid: false, name: '', nameValid: false, address: '', addressValid: false, zip: '', zipValid: false, city: '', cityValid: false, valid: false },
  payment: { type: 0, number: '', numberValid: false, month: '', year: '', expiresValid: false, ccv2: '', ccv2Valid: false, valid: true },
  items: [
    { type: 1, value: 'Her bor', height: 7, center: false, italic: false, bold: false, font: 'Arial', color: { r: 10, g: 10, b: 10, a: 1} },
    { type: 1, value: 'Familien Thomas', height: 10, center: false, italic: false, bold: false, font: 'Arial', color: { r: 10, g: 10, b: 10, a: 1} },
    { type: 1, value: 'Anita, Benny, Nathaniel og Alea', height: 8, center: false, italic: false, bold: false, font: 'Arial', color: { r: 10, g: 10, b: 10, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, size: { height: 50, width: 19 }, img: img1 },
        { image: man, id: 1, size: { height: 50, width: 18 }, img: img2 },
        { image: boy, id: 3, size: { height: 50, width: 11 }, img: img4 },
        { image: girl, id: 2, size: { height: 50, width: 14 }, img: img3 }
      ]
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', top: 0, left: 0, right: 0, bottom: 0 },
  texts: texts
};

export default state;
