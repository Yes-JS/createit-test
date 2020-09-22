import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      background: '#182227',
    },
    toolbar: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    headerLogo: {
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      fontSize: 36,
      fontWeight: 'bold',
      color: 'white',
    },
  }),
);
