import React from 'react';

import { FontIcon, IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

import m_woman from '../images/farger/mor-mellom2.png';
import b_woman from '../images/farger/mor-blond2.png';
import d_woman from '../images/farger/mor-mork2.png';
import f_woman from '../images/standard/dame-farge2.png';
import woman from '../images/standard/dame2.png';
import m_man from '../images/farger/far-mellom2.png';
import b_man from '../images/farger/far-blond2.png';
import d_man from '../images/farger/far-mork2.png';
import f_man from '../images/standard/mann-farge2.png';
import man from '../images/standard/mann2.png';
import f_boy from '../images/standard/gutt-farge2.png';
import boy from '../images/standard/gutt2.png';
import m_boy from '../images/farger/gutt-mellom2.png';
import b_boy from '../images/farger/gutt-blond2.png';
import d_boy from '../images/farger/gutt-mork2.png';
import f_girl from '../images/standard/jente-farge2.png';
import girl from '../images/standard/jente2.png';
import m_girl from '../images/farger/jente-mellom2.png';
import b_girl from '../images/farger/jente-blond2.png';
import d_girl from '../images/farger/jente-mork2.png';

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


const EmojiMenu = ({ actions, index, texts, theme }) => (
  <IconMenu icon='add' position='topRight' iconRipple={false} menuRipple={false}>
    <MenuItem icon='photo_size_select_large' caption={texts.larger} onClick={() => actions.scaleUpEmoji(index)}>
      <FontIcon value='' className={theme.width} />
    </MenuItem>
    <MenuItem icon='photo_size_select_small' caption={texts.smaller} onClick={() => actions.scaleDownEmoji(index)}>
      <FontIcon value='' className={theme.width} />
    </MenuItem>
    <MenuDivider />
    { texts.title ? <MenuItem caption={texts.title} disabled /> : null }
    <EmojiMenuItem key='0' image={woman} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='0f' image={f_woman} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='0m' image={m_woman} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='0b' image={b_woman} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='0d' image={d_woman} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='1' image={man} theme={theme} actions={actions} index={index} style={zoom} />
    <EmojiMenuItem key='1f' image={f_man} theme={theme} actions={actions} index={index} style={zoom} />
    <EmojiMenuItem key='1m' image={m_man} theme={theme} actions={actions} index={index} style={zoom} />
    <EmojiMenuItem key='1b' image={b_man} theme={theme} actions={actions} index={index} style={zoom} />
    <EmojiMenuItem key='1d' image={d_man} theme={theme} actions={actions} index={index} style={zoom} />
    <EmojiMenuItem key='2' image={boy} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='2f' image={f_boy} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='2m' image={m_boy} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='2b' image={b_boy} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='2d' image={d_boy} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='3' image={girl} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='3f' image={f_girl} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='3m' image={m_girl} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='3b' image={b_girl} theme={theme} actions={actions} index={index} />
    <EmojiMenuItem key='3d' image={d_girl} theme={theme} actions={actions} index={index} />
  </IconMenu>
);


export default EmojiMenu;
