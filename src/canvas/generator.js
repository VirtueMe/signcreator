
'use strict';

const font = 'Arial';
const ppmm = 11.8;
const dpi = 300;
const scaleFactor = dpi / 72;


function createSpaceCalculator(context) {
  var _context = context;

  return function measureText(line, size) {
    _context.font = (line.italic ? 'italic ' : '') + (line.bold ? 'bold ' : '') + size + 'px ' + (line.font || font);

    line.size = size;
    line.height = line.text ? size : 0;
    line.realHeight =  line.text ? Math.floor(size * (line.bold ? 1.5 : 1.4)) : 0;

    line.width = _context.measureText(line.text).width;

    return line;
  };
}

function createTextTool(context) {
  var _context = context;

  return {
    font: function (line) {
      return (line.italic ? 'italic ' : '') + (line.bold ? 'bold ' : '') + (line.size || 12) + 'px ' + (line.font || font);
    },

    fillText: function (line) {
      if (line.text) {
        const color = context.fillStyle;

        _context.font = this.font(line);

        if (line.baseline) {
          _context.textBaseline = line.baseline;
        }

        context.fillStyle = line.color;

        context.fillText(line.text, line.x, line.y);

        context.fillStyle = color;
      }
    },

    measureText: function(line) {
      _context.font = this.font(line);

      return _context.measureText(line.text);
    }
  };
}

export default function generator(dimensions) {
  return function imagegenerator(lines, center) {

    const width = Math.ceil(dimensions.width * ppmm);
    const areaheight = Math.ceil(dimensions.height * ppmm);
    const padding = Math.ceil(dimensions.padding * ppmm);
    const maxAreaHeightFont = areaheight - (padding * 2);


    const createCanvas = function createCanvas() {
      let canvas = document.createElement('canvas');

      canvas.width = Math.ceil(width * scaleFactor);
      canvas.height = Math.ceil(areaheight * scaleFactor);

      return canvas;
    };

    return {
      lines: lines,
      center: center,

      getImage: function getImage() {
        const divider = 2, multiplier = 1, mwidth = 0;
        const maxwidth = width - (padding * 2);

        const canvas = createCanvas();

        let context = canvas.getContext('2d');

        context.scale(scaleFactor, scaleFactor);

        // var measureText = createSpaceCalculator(context);
        const textTool = createTextTool(context);

        const calculateItems = function calculateItems(items) {
          let result = [];

          var calculateElements = function(start, item, ...rest) {
            const size = Math.ceil(item.height * ppmm);

            console.dir(start, item, rest);

            result.push({
                size: size,
                start: start,
                text: item.value,
                font: item.font,
                color: item.color
            });

            if (rest && rest.length > 0) {
              calculateElements(start + size, ...rest);
            }
          };

          calculateElements(0, ...items);

          return result;
        }

        const items = calculateItems(this.lines);

        console.dir(items);

        const totalheight = this.lines.reduce((sum, item) => (sum + Math.ceil(item.height * ppmm) + (sum !== 0 ? 20 : 0)), 0);
        const arr = items.map(item => (textTool.measureText(item).width));
        const startOffset = Math.ceil((maxwidth - Math.max(...arr)) / 2);
        const y = ((maxAreaHeightFont - totalheight) / 2);

        items.forEach(({ text, size, start}) => textTool.fillText({
          text: text,
          size: size,
          x: padding + startOffset,
          y: padding + y + start,
          baseline: 'hanging',
          color: '#000000'
        }));

        var data = canvas.toDataURL();

        return {
          image: data
        };
      }
    };
  };
};
