import makeStyles from '@material-ui/core/styles/makeStyles';

export const useCategoriesStyles = makeStyles({
  wrapper: {
    display: 'grid',
    gridGap: 10,
  },
  categoryItem: {
    cursor: 'pointer',
    display: 'grid',
    gridTemplateColumns: 'max-content max-content',
    justifyContent: 'space-between',
    color: 'white',
    padding: '5px 20px',
    fontSize: '16px',
    outline: 'none',
    '&:hover': {
      background: '#ffffff12',
    },
    '&.active': {
      background: '#ffffff33',
    },
  },
});
