const FontFaceObserver = require('fontfaceobserver');


const fonts = ['Cabin Condensed', 'Lobster', 'Neucha', 'Vidaloka']
                .map((name) => new FontFaceObserver(name, { weight: 400 }))
                .map((f) => f.load());

var fontsLoaded = false;


function fontsLoader(cb) {
  return Promise
          .all(fonts)
          .then(function (...results) {
            // console.info('what: ', results);
            fontsLoaded = true;
            return cb();
          });
          /*
          .catch((reason) => {
            // console.info('fail: ', reason);
          });
          */
}

function whenFontsLoaded(cb) {
  if (fontsLoaded) {
    return cb();
  }
  else {
    return fontsLoader(cb);
  }
}

export default whenFontsLoaded;

export {
  whenFontsLoaded
};
