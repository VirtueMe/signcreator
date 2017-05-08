
const settings = { type: 0, backplate: '0', padding: 40, top: 0, topImage: null, left: 0, right: 0, bottom: 0 };
const textitem = { type: 1, value: '', padding: 30, height: 20, center: true, bold: false, italic: false, font: 'Lobster', color: { r: '0', g: '0', b: '0', a: '1' } };
const imageLine = { type: 2, value: [], scale: 1.6 }
const dividerLine = { type: 3, value: null, selected: 0, scale: 1.5 };
const scaleStep = 0.1;

function createSettings(type) {
  return Object.assign({}, settings, { type });
}

const items = [
  {
    items: [textitem],
    settings: settings
  },
  {
    items: [textitem],
    settings: createSettings(1)
  },
  {
    items: [textitem],
    settings: createSettings(2)
  },
  {
    items: [textitem],
    settings: createSettings(3)
  }
]

export {
  dividerLine,
  imageLine,
  items,
  scaleStep,
  settings,
  textitem
};
