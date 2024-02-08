import { style } from '@vanilla-extract/css';

export const card = style({
  border: '1px solid #ccc',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  padding: 16,
  borderRadius: 4,
});

export const title = style({
  textTransform: 'capitalize',
});

export const subtitle = style({
  margin: '0 0 0.5rem',
  color: 'slategray',
});
