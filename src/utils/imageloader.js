import React from 'react';
import  { imagemapper, linemapper } from './mappers';

function map(mapper, name) {
  const image = imagemapper[name];
  const img = image ? <img src={image} role='presentation' /> : null;

  return { image, img };
}

function image(name) {
  return map(imagemapper, name);
}

function line(name) {
  return map(linemapper, name);
}

export { image, line };
