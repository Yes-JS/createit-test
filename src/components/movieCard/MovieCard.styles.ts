import makeStyles from '@material-ui/core/styles/makeStyles';

export const useCategoriesStyles = makeStyles({
  card: {
    display: 'grid',
    gridTemplateColumns: 'max-content 1fr',
    gridTemplateRows: '1fr',
    background: '#182227',
    width: '100%',
    height: '170px',
    cursor: 'pointer',
    transition: 'all .2s',
    '&:hover': {
      background: '#0c1215',
      boxShadow: '10px 11px 29px -7px rgb(12 18 21 / 74%)',
    },
  },
  infoWrapper: {
    padding: 10,
    position: 'relative',
  },
  name: {
    fontSize: 20,
    color: 'white',
  },
  details: {
    fontSize: 16,
    color: '#ffffff54',
  },
  price: {
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  },
});
