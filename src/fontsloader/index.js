const FontFaceObserver = require('fontfaceobserver');


const fonts = ['Cabin Condensed', 'Lobster', 'Neucha', 'Vidaloka']
                .map((name) => new FontFaceObserver(name))
                .map((f) => { return f.load(); });

var fontsLoaded = false;

function fontsLoader(cb) {
  return Promise
          .all(fonts)
          .then(function () {
            fontsLoaded = true;
            return cb();
          })
          .catch(() => {
            console.info(arguments);
          });
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
