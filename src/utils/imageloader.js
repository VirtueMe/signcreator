import  { imagemapper, linemapper, previewmapper } from './mappers';

function load(img, src) {
  img.src = src;

  return img;
}

function map(mapper, name) {
  const image = mapper[name];
  const img = image ? load(document.createElement('img'), image) : null;

  return { image, img, name };
}

function image(name) {
  return map(imagemapper, name);
}

function line(name) {
  return map(linemapper, name);
}

function preview(name) {
  return map(previewmapper, name);
}

export { image, line, preview };
