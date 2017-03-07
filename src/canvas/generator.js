
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

        if (line.color) {
          context.fillStyle = line.color;
        }

        context.fillText(line.text, line.x, line.y);

        context.fillStyle = color;
      }
    },

    drawImage: function(image) {
      if (image.img) {
        _context.drawImage(image.img, image.x, image.y, image.width, image.height);
      }
    },

    drawFlipImage: function(image) {
      if (image.img) {
        _context.save();
        _context.translate(image.x, image.y);
        _context.rotate(Math.PI);
        _context.drawImage(image.img, -image.width, -image.height, image.width, image.height);
        _context.restore();
      }
    },

    drawFlip90Imagefunction(image) {
      if (image.img) {
        _context.save();
        _context.translate(image.x, image.y);
        _context.rotate(Math.PI/2);
        _context.drawImage(image.img, -image.height/2, -image.height, image.width, image.height);
        _context.restore();
      }
    },

    drawFlip270Imagefunction(image) {
      if (image.img) {
        _context.save();
        _context.translate(image.x, image.y);
        _context.rotate(-Math.PI/2);
        _context.drawImage(image.img, -image.width, 0, image.width, image.height);
        _context.restore();
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

function createRGBAString(color) {
  const { r, g, b, a} = color;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}


function calculateImageBounds(item) {
  const items = item.text.map(src => (src.size));

  return items.reduce((acc, item) => (acc + item.width), 0);
}

export default function generator(dimensions) {
  return function imagegenerator(lines, settings, center) {

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
        const imageFactor = 2;

        const print = {
          1: function(item) {
            const { text, size, start} = item;

            textTool.fillText({
              text: text,
              size: size,
              x: padding + startOffset,
              y: padding + y + start,
              baseline: 'hanging',
              color: createRGBAString(item.color || { r: 0, g: 0, b: 0, a: 1 })
            });
          },

          2: function(item) {
            const { text, start} = item;
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
              });

              x += ((size.width * imageFactor) + imageSpace);
            });
          }
        }

        const printItem = function printItem(item) {
          const type = item.type || 1;

          print[type](item);
        }

        items.forEach(printItem);

        if (settings && settings.type !== 3) {
          if (settings.topImage) {
            const imageWidth = settings.topImage.width * imageFactor;
            const repeats = (maxwidth - (maxwidth % imageWidth)) / imageWidth;
            let start = padding + Math.ceil((maxwidth - ( imageWidth * repeats ) ) / 2);
            console.info(maxwidth, settings.topImage.width * imageFactor, (maxwidth % (settings.topImage.width * imageFactor)));
            const drawImage = settings.top > 0 ? textTool.drawImage : textTool.drawFlipImage;

            for (let i = 0; i<repeats; i++) {
              drawImage({
                img: settings.topImage,
                x: start + (i * settings.topImage.width * imageFactor),
                y: 10 * imageFactor,
                height: settings.topImage.height * imageFactor,
                width: imageWidth
              });
            }
          }

          if (settings.bottomImage) {
            const imageWidth = settings.bottomImage.width * imageFactor;
            const repeats = (maxwidth - ( maxwidth % imageWidth )) / imageWidth;
            let start = padding + Math.ceil((maxwidth - ( imageWidth * repeats ) ) / 2);
            let y = areaheight - (settings.bottomImage.height * imageFactor) -  (10 * imageFactor);

            const drawImage = settings.bottom > 0 ? textTool.drawImage : textTool.drawFlipImage;

            for (let i = 0; i<repeats; i++) {
              drawImage({
                img: settings.bottomImage,
                x: start + (i * imageWidth),
                y: y,
                height: settings.bottomImage.height * imageFactor,
                width: imageWidth
              });
            }
          }

          if (settings.leftImage) {
            const imageHeight = settings.leftImage.width * imageFactor;
            const repeats = (maxAreaHeightFont - (maxAreaHeightFont % imageHeight)) / imageHeight;
            let y = padding + Math.ceil((maxAreaHeightFont - ( settings.leftImage.width * repeats * imageFactor) ) / 2);

            const drawImage = settings.left > 0 ? textTool.drawFlip270Imagefunction : textTool.drawFlip90Imagefunction;

            for (let i = 0; i<repeats; i++) {
              drawImage({
                img: settings.leftImage,
                x: (10 * imageFactor),
                y: y + (i * settings.leftImage.width * imageFactor),
                height: settings.leftImage.height * imageFactor,
                width: settings.leftImage.width * imageFactor
              });
            }
          }

          if (settings.rightImage) {
            const imageHeight = settings.rightImage.width * imageFactor;
            const repeats = (maxAreaHeightFont - (maxAreaHeightFont % imageHeight)) / imageHeight;
            let y = padding + Math.ceil((maxAreaHeightFont - ( imageHeight * repeats ) ) / 2);

            const drawImage = settings.right > 0 ? textTool.drawFlip270Imagefunction : textTool.drawFlip90Imagefunction;

            for (let i = 0; i<repeats; i++) {
              drawImage({
                img: settings.rightImage,
                x: areaWidth - ( settings.rightImage.height * imageFactor) - (10 * imageFactor),
                y: y + (i * imageHeight),
                height: settings.rightImage.height * imageFactor,
                width: settings.rightImage.width * imageFactor
              });
            }
          }
        }

        var data = canvas.toDataURL();

        return {
          image: data
        };
      }
    };
  };
};
