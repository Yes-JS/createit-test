import * as React from 'react';
import { Categories } from 'components/categories';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useStyles } from './SideBar.styles';

interface IMain {
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
}

export const SideBar: React.FunctionComponent<IMain> = ({
  mobileOpen,
  setMobileOpen,
}: IMain) => {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.wrapper}>
      <div className={classNames(classes.toolbar, classes.headerLogo)}>
        Movix
      </div>
      <Divider />
      <List>
        <Categories onChoose={() => setMobileOpen(false)} />
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
