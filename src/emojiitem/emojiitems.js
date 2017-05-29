import React from 'react';

import classnames from 'classnames';

import { Button, FontIcon, IconMenu, MenuItem, MenuDivider, Tooltip } from 'react-toolbox';

import { Visible, Container, Row, Col } from 'react-grid-system';

import { imagemapper as images }  from '../utils/imagemapper';


function getImageBounds(addEmoji, image, index) {
  return new Promise((resolve) => {
    let img = document.createElement('img');

    img.onload = function () { addEmoji(image, { height: img.height, width: img.width }, index, img); };

    img.src = image;
  });
}

const TooltipButton = Tooltip(Button);

const EmojiMenuItem = ({ image, theme, actions, index, style }) => (
  <MenuItem icon={<img src={image} alt='presentation' className={theme.menuimage} />} className={theme.menuemoji} onClick={() => getImageBounds(actions.addEmoji, image, index)} />
);

const EmojiButton = ({ image, theme, actions, index, style }) => (
  <Button icon={<img src={image} alt='presentation' className={theme.menuimagesmall} />} floating mini className={classnames(theme.menuemoji, theme.menubutton) } onClick={() => getImageBounds(actions.addEmoji, image, index)} />
);


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

const EmojiContent = ({ actions, index, texts, theme }) => {
  const imagemenuitems = Object.keys(images).map((image, idx) => (
    <EmojiButton key={idx} image={images[image]} theme={theme} actions={actions} index={index} />
  ));

  return (
    <Container fluid>
      <Visible xs sm lg>
        <Row>
          <Col xs={12}>
            <TooltipButton icon='photo_size_select_large' tooltip={texts.larger} floating mini onClick={() => actions.scaleUpEmoji(index)} />&nbsp;
            <TooltipButton icon='photo_size_select_small' tooltip={texts.smaller} floating mini onClick={() => actions.scaleDownEmoji(index)} />
          </Col>
        </Row>
      </Visible>
      <Visible md xl>
        <Row>
          <Col xs={12}>
            <Button icon='photo_size_select_large' label={texts.larger} raised onClick={() => actions.scaleUpEmoji(index)} />&nbsp;
            <Button icon='photo_size_select_small' label={texts.smaller} raised onClick={() => actions.scaleDownEmoji(index)} />
          </Col>
        </Row>
      </Visible>
      <Row>
        <Col xs={12}>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={theme.emojilist}>
          {imagemenuitems}
        </Col>
      </Row>
    </Container>
  )
};


export default EmojiMenu;

export { EmojiMenu, EmojiContent };
