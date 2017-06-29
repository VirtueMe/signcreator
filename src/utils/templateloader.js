import { image, line, preview } from './imageloader';
import _templates from './templates.json';

function convertImage(item) {
  const img = image(item.image);
  const result = Object.assign({}, item, img);

  return result;
}

function convertTypeItem(type) {
  return function convertItem(item) {
    switch (item.type) {
      case 3: {
        const { image, img, name } = line(item.value);

        item.value = { image, img, name };

        return item;
      }
      case 2:
        item.value = item.value.map(convertImage);

        return item;
      default:
        return item;
    }
  };
}

function convert(template) {
  template.items = template.items.map(convertTypeItem(template.type));

  if (template.image) {
    template.image = preview(template.image);
  }

  return template;
}

const templates = _templates.map(convert);

export { templates };
