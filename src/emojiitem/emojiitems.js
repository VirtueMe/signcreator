import React from 'react';

import { FontIcon, IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

import { imagemapper as images }  from '../utils/imagemapper';


function getImageBounds(addEmoji, image, index) {
  return new Promise((resolve) => {
    let img = document.createElement('img');

    img.onload = function () { addEmoji(image, { height: img.height, width: img.width }, index, img); };

    img.src = image;
  });
}



const EmojiMenuItem = ({ image, theme, actions, index, style }) => (
  <MenuItem icon={<img src={image} alt='presentation' className={theme.menuimage} />} className={theme.menuemoji} onClick={() => getImageBounds(actions.addEmoji, image, index)} />
);

const zoom = {
  zoom: '90%'
};



const EmojiMenu = ({ actions, index, texts, theme }) => {
  const imagemenuitems = Object.keys(images).map((image, idx) => (
    <EmojiMenuItem key={idx} image={images[image]} theme={theme} actions={actions} index={index} />
  ));

  return (
    <IconMenu icon='add' position='topRight' iconRipple={false} menuRipple={false}>
      <MenuItem icon='photo_size_select_large' caption={texts.larger} onClick={() => actions.scaleUpEmoji(index)}>
        <FontIcon value='' className={theme.width} />
      </MenuItem>
      <MenuItem icon='photo_size_select_small' caption={texts.smaller} onClick={() => actions.scaleDownEmoji(index)}>
        <FontIcon value='' className={theme.width} />
      </MenuItem>
      <MenuDivider />
      { texts.title ? <MenuItem caption={texts.title} disabled /> : null }
      {imagemenuitems}
    </IconMenu>
  );
};


export default EmojiMenu;
