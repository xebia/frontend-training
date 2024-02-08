import { style } from '@vanilla-extract/css';

export const list = style({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
});

export const listItem = style({
  selectors: {
    [`${list} &`]: {
      margin: '0 0 0.5rem',
    },
  },
});

export const listItemLink = style({
  selectors: {
    [`${listItem} &`]: {
      background: 'lightblue',
      border: '1px solid transparent',
      borderRadius: 2,
      color: 'steelblue',
      display: 'inline-block',
      padding: 6,
      textDecoration: 'none',
    },
    [`${listItem} &:hover`]: {
      borderColor: 'steelblue',
    },
  },
});
