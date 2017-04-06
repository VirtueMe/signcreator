const font = 'Arial';
const ppmm = 11.8;
const imageFactor = 2;
const dividerGap = 24;
const imageSpace = 10;

function createFont(line) {
  return (line.italic ? 'italic ' : '') + (line.bold ? 'bold ' : '') + (line.size || 12) + 'px ' + (line.font || font);
}

function createTextTool(context, canvas, scaleFactor) {
  const _canvas = canvas;
  let _context = context;

  return {
    fillText: function (line) {
      if (line.text) {
        const color = context.fillStyle;

        _context.font = createFont(line);

        if (line.baseline) {
          _context.textBaseline = line.baseline;
        }

        if (line.color) {
          context.fillStyle = line.color;
        }

        context.fillText(line.text, (line.center ? ((_canvas.width)/(scaleFactor * 2)) - (line.width/2): line.x), line.y);

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
        const img = image.img;

        _context.save();

        _context.translate(_canvas.width/(scaleFactor * 2), _canvas.height/(scaleFactor * 2));
        _context.rotate(Math.PI);
        _context.drawImage(img, -image.width / 2, -(image.y - (_canvas.height/(scaleFactor * 2))) - (image.height/2), image.width, image.height);

        _context.restore();
      }
    },

    drawFlip90Imagefunction(image) {
      if (image.img) {
        const { img, factor, factor2 } = image;

        _context.save();

        _context.translate(_canvas.width/(scaleFactor * 2), _canvas.height/(scaleFactor * 2));
        _context.rotate(Math.PI/2);
        _context.drawImage(img, -image.width/2, (factor * image.x/2)  + (factor2), image.width, image.height);

        _context.restore();
      }
    },

    drawFlip270Imagefunction(image) {
      if (image.img) {
        const { img, factor, factor2 } = image;

        _context.save();

        _context.translate(_canvas.width/(scaleFactor * 2), _canvas.height/(scaleFactor * 2));
        _context.rotate(factor * Math.PI/2);
        _context.drawImage(img, -image.width/2 , (factor * image.x/2) + (factor2), image.width, image.height);

        _context.restore();
      }
    },

    measureText: function(line) {
      _context.font = createFont(line);

      return _context.measureText(line.text);
    }
  };
}


const height = {
  1: function(item) {
    return Math.ceil(item.height * ppmm);
  },

  2: function(item) {
    const items = item.value.map(src => (src.img ? src.img.height : 50));
    console.info(Math.max(...items));
    return (items.length > 0 ? (Math.max(...items) * item.scale) : 0 ) + dividerGap;
  },

  3: function (item) {
    return dividerGap + (item.value ? (item.value.height * imageFactor) : Math.ceil(8 * ppmm));
  }
};

function createRGBAString(color) {
  const { r, g, b, a} = color;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}


function calculateImageBounds(item) {
  const items = item.text.map(src => (src.img));

  return items.reduce((acc, item) => (acc + (item ? item.width : 0)), 0);
}

export default function generator(dimensions) {
  const scaleFactor = dimensions.scaleFactor || 1;

  return function imagegenerator(lines, settings, center) {

    const areaWidth = Math.ceil(dimensions.width * ppmm);
    const areaheight = Math.ceil(dimensions.height * ppmm);
    const padding = Math.ceil(dimensions.padding * ppmm);
    const maxAreaHeightFont = areaheight - (padding * 2);
    const lineDivider = settings.padding;

    const calculateHeight = function calculateHeight(item) {
      const type = item.type || 1;

      return height[type](item);
    }

    const scaleUp = function (value) {
      if (scaleFactor === 1) {
        return value;
      }

      return Math.ceil(value * scaleFactor)
    };


    const createCanvas = function createCanvas() {
      let canvas = document.createElement('canvas');

      canvas.width = scaleUp(areaWidth);
      canvas.height = scaleUp(areaheight);

      return canvas;
    };

    return {
      lines: lines,
      center: center,

      getImage: function getImage() {
        const maxwidth = areaWidth - (padding * 2);

        const canvas = createCanvas();

        let context = canvas.getContext('2d');

        if (scaleFactor !== 1) {
          context.scale(scaleFactor, scaleFactor);
        }

        // var measureText = createSpaceCalculator(context);
        const textTool = createTextTool(context, canvas, scaleFactor);

        const width = {
          1: function(item) {
            return textTool.measureText(item).width;
          },

          2: function(item) {
            const value = calculateImageBounds(item);

            return (value * item.scale) + (item.text.length * imageSpace * item.scale) - (imageSpace * item.scale);
          },

          3: function(item) {
            return (item.text ? item.text.width : 0) * imageFactor;
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

            const value = {
              type: item.type,
              size: size,
              start: start,
              text: item.value,
              font: item.font,
              italic: item.italic,
              bold: item.bold,
              color: item.color,
              center: item.center,
              selected: item.selected,
              scale: item.scale
            };

            value.width = calculateWidth(value);

            result.push(value);

            if (rest && rest.length > 0) {
              calculateElements(start + size + lineDivider, ...rest);
            }
          };

          calculateElements(0, ...items);

          return result;
        }

        const items = calculateItems(this.lines);

        const totalheight = this.lines.reduce((sum, item) => (sum + calculateHeight(item) + (sum !== 0 ? lineDivider : 0)), 0);
        const arr = items.map(item => item.width);
        const startOffset = Math.ceil((maxwidth - Math.max(...arr)) / 2);
        const y = ((maxAreaHeightFont - totalheight) / 2);

        const print = {
          1: function(item) {
            const { center, text, width, size, start, font, italic, bold } = item;

            textTool.fillText({
              text: text,
              size: size,
              x: padding + startOffset,
              y: padding + y + start,
              italic: italic,
              bold: bold,
              font: font,
              center: center,
              width: width,
              baseline: 'hanging',
              color: createRGBAString(item.color || { r: 0, g: 0, b: 0, a: 1 })
            });
          },

          2: function(item) {
            const { text, start, scale } = item;
            const imageWidth = calculateWidth(item);
            const posY = padding + y + start + (dividerGap / 2);

            let x = padding + Math.ceil((maxwidth - imageWidth) / 2);


            text.forEach(value => {
              const {image, img} = value;
              const theImage = {
                src: image,
                img: img,
                x: x,
                y: posY,
                height: img.height * scale,
                width: img.width  * scale
              };
              try {
                textTool.drawImage(theImage);
              }
              catch(e) {
                console.info(e);
              }

              x += ((img.width * scale) + (imageSpace * scale));
            });
          },

          3: function(item) {
            const { text, start, selected } = item;

            if (text) {
              const imageWidth = text.width * imageFactor;

              const drawImage = selected > 0 ? textTool.drawImage : textTool.drawFlipImage;

              drawImage({
                img: text,
                x: padding + Math.ceil((maxwidth - imageWidth) / 2),
                y: padding + y + start + (dividerGap / 2),
                height: text.height * imageFactor,
                width: imageWidth
              });
            }
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
            const drawImage = settings.top > 0 ? textTool.drawImage : textTool.drawFlipImage;

            drawImage({
              img: settings.topImage,
              x: (areaWidth - imageWidth) / 2,
              y: 10 * imageFactor,
              height: settings.topImage.height * imageFactor,
              width: imageWidth
            });
          }

          if (settings.bottomImage) {
            const imageWidth = settings.bottomImage.width * imageFactor;
            const imageHeight = settings.bottomImage.height * imageFactor;

            const [drawImage, offset] = settings.bottom > 0 ? [textTool.drawImage, imageHeight+(10 * imageFactor)] : [textTool.drawFlipImage, imageHeight/2];

            console.info(drawImage);
            drawImage({
              img: settings.bottomImage,
              x: (areaWidth - imageWidth) / 2,
              y: areaheight-offset,
              height: imageHeight,
              width: imageWidth
            });
          }

          if (settings.leftImage) {
            const imageHeight = settings.leftImage.height * imageFactor;
            const [factor, factor2] = settings.left > 0 ? [-1, (10 * imageFactor)] : [1, -(settings.leftImage.height * imageFactor) - (10 * imageFactor)];

            textTool.drawFlip270Imagefunction({
              img: settings.leftImage,
              x: areaWidth,
              factor: factor,
              factor2: factor2,
              height: imageHeight,
              width: settings.leftImage.width * imageFactor
            });
          }

          if (settings.rightImage) {
            const imageHeight = settings.rightImage.height * imageFactor;

            const [factor, height] = settings.right > 0 ? [-1, imageHeight] : [1, 0];

            textTool.drawFlip270Imagefunction({
              img: settings.rightImage,
              x: -areaWidth,
              factor: factor,
              factor2: factor * ((height) + (10 * imageFactor)),
              height: settings.rightImage.height * imageFactor,
              width: settings.rightImage.width * imageFactor
            });
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
