import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    searchInput: {
      [theme.breakpoints.up('sm')]: {
        gridColumnStart: 2,
      },
    },
    headerContainer: {
      color: 'white',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: 'max-content max-content',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: '0 32px 0 20px',
    },
  }),
);
