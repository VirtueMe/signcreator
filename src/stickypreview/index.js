import { themr } from 'react-css-themr';
import { stickyPreviewFactory } from './stickypreview';
import { STICKYPREVIEW } from '../identifiers';
import theme from './theme.css';

const StickyPreview = stickyPreviewFactory();

const ThemedStickyPreview = themr(STICKYPREVIEW, theme)(StickyPreview);

export default ThemedStickyPreview;
export { ThemedStickyPreview as StickyPreview };
