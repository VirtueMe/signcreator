import React, { Component } from 'react';

import { themr } from 'react-css-themr';
import { STICKYPREVIEW } from '../identifiers';
import { Dialog } from 'react-toolbox';
import Sticky from 'react-sticky-state';


const factory = () => {
  class StickyPreview extends Component {
    state = {
      active: false
    };

    toggleDialog = (event) => {
      const { theme } = this.props;

      if (event.currentTarget.className.indexOf(theme['is-sticky']) > -1) {
          event.preventDefault();
          this.handleToggle();
      }
    }

    handleToggle = () => {
      this.setState((prevState) => ({
        active: !prevState.active
      }));
    };

    render() {
      const { theme, children, Preview } = this.props;

      const props = {
        stickyClass: theme.sticky,
        stateClass: theme['is-sticky'],
        fixedClass: theme['sticky-fixed'],
        absoluteClass: theme['is-absolute']
      };

      return (
        <Sticky {...props}>
          <div className={theme['top-right']} onClick={this.toggleDialog}>
            {children}
            <Dialog
              active={this.state.active}
              onEscKeyDown={this.handleToggle}
              onOverlayClick={this.handleToggle}
            >
              {Preview ? <Preview /> : children}
            </Dialog>
          </div>
        </Sticky>
      );
    }
  }

  return StickyPreview;
};

const StickyPreview = factory();

export default themr(STICKYPREVIEW, null)(StickyPreview);

export { factory as stickyPreviewFactory };
export { StickyPreview };
