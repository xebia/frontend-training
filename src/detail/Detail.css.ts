import { style } from '@vanilla-extract/css';
import { title as baseTitle } from '../styles.css';

export const backLink = style({
  display: 'inline-block',
  fontSize: 14,
  marginBottom: '1rem',
});

export const title = style([
  baseTitle,
  {
    margin: '0.5rem 0 0.25rem',
  },
]);

export const imgWrapper = style({
  border: '1px solid #ccc',
  background: 'gainsboro',
  display: 'inline-block',
  marginTop: 24,
});
