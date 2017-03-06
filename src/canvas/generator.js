
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

    drawImage: function(image) {
      if (image.img) {
        _context.drawImage(image.img, image.x, image.y, image.width, image.height);
      }
    },

    measureText: function(line) {
      _context.font = this.font(line);

      return _context.measureText(line.text);
    }
  };
}


const height = {
  1: function(item) {
    return Math.ceil(item.height * ppmm);
  },

  2: function(item) {
    const items = item.value.map(src => (src.size.height));

    return Math.max(...items);
  }
};


function calculateImageBounds(item) {
  const items = item.text.map(src => (src.size));

  return items.reduce((acc, item) => (acc + item.width), 0);
}

export default function generator(dimensions) {
  return function imagegenerator(lines, center) {

    const areaWidth = Math.ceil(dimensions.width * ppmm);
    const areaheight = Math.ceil(dimensions.height * ppmm);
    const padding = Math.ceil(dimensions.padding * ppmm);
    const maxAreaHeightFont = areaheight - (padding * 2);

    const calculateHeight = function calculateHeight(item) {
      const type = item.type || 1;

      return height[type](item);
    }



    const createCanvas = function createCanvas() {
      let canvas = document.createElement('canvas');

      canvas.width = Math.ceil(areaWidth * scaleFactor);
      canvas.height = Math.ceil(areaheight * scaleFactor);

      return canvas;
    };

    return {
      lines: lines,
      center: center,

      getImage: function getImage() {
        const divider = 2, multiplier = 1, mwidth = 0;
        const maxwidth = areaWidth - (padding * 2);

        const canvas = createCanvas();

        let context = canvas.getContext('2d');

        context.scale(scaleFactor, scaleFactor);

        // var measureText = createSpaceCalculator(context);
        const textTool = createTextTool(context);

        const width = {
          1: function(item) {
            return textTool.measureText(item).width;
          },

          2: function(item) {
            const value = calculateImageBounds(item);

            return value;
          }
        }


        const calculateWidth = function calculateWidth(item) {
          const type = item.type || 1;

          return width[type](item);
        }

        const calculateItems = function calculateItems(items) {
          let result = [];

          var calculateElements = function(start, item, ...rest) {
            const size = calculateHeight(item);
            result.push({
              type: item.type,
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

        const totalheight = this.lines.reduce((sum, item) => (sum + calculateHeight(item) + (sum !== 0 ? 20 : 0)), 0);
        const arr = items.map(item => (calculateWidth(item)));
        const startOffset = Math.ceil((maxwidth - Math.max(...arr)) / 2);
        const y = ((maxAreaHeightFont - totalheight) / 2);

        const print = {
          1: function(item) {
            const { text, size, start} = item;

            textTool.fillText({
              text: text,
              size: size,
              x: padding + startOffset,
              y: padding + y + start,
              baseline: 'hanging',
              color: item.color || '#000000'
            });
          },

          2: function(item) {
            const { text, start} = item;
            const imageFactor = 2;
            const imageSpace = 10;
            let x = padding + Math.ceil( (maxwidth - (( calculateWidth(item) * imageFactor) + ((item.text.length - 1) * imageSpace) )) / 2);

            text.forEach(value => {
              const {image, size, img} = value;

              textTool.drawImage({
                src: image,
                img: img,
                x: x,
                y: padding + y + start,
                height: size.height * imageFactor,
                width: size.width * imageFactor
              })

              x += ((size.width * imageFactor) + imageSpace);
            });
          }
        }

        const printItem = function printItem(item) {
          const type = item.type || 1;

          print[type](item);
        }

        items.forEach(printItem);

        var data = canvas.toDataURL();

        console.info('letting go');

        return {
          image: data
        };
      }
    };
  };
};