import { FETCH_PRICES_SUCCESS } from '../constants/actiontypes';

const initialState = {
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
};

export default function sendstatus(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case FETCH_PRICES_SUCCESS: {

      console.info(payload);

      return payload || state;
    }

    default:
      return state;
  }
}
