import React from 'react';
import  { imagemapper, linemapper } from './mappers';

function load(img, src) {
  img.src = src;

  return img;
}

function map(mapper, name) {
  const image = mapper[name];
  const img = image ? load(document.createElement('img'), image) : null;

  return { image, img };
}

function image(name) {
  return map(imagemapper, name);
}

function line(name) {
  return map(linemapper, name);
}

export { image, line };
