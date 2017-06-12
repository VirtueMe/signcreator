const FontFaceObserver = require('fontfaceobserver');


const fonts = ['Cabin Condensed', 'Vidaloka', 'Neucha', 'Lobster']
                .map((name) => new FontFaceObserver(name))
                .map((f) => { return f.load(); });

var fontsLoaded = false;

function fontsLoader(cb) {
  return Promise.all(fonts).then(function () {
    fontsLoaded = true;
    return cb();
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
