import { image, line } from './imageloader';
import _templates from './templates.json';

function convertImage(item) {
  const img = image(item.image);

  return Object.assign({}, item, img);
}

function convertItem(item) {
  switch (item.type) {
    case 2:
      item.value = item.value.map(convertImage);

      return item;
    default:
      return item;
  }
}

function convert(template) {
  template.items = template.items.map(convertItem);

  return template;
}

const templates = _templates.map(convert);

export { templates };
