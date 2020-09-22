import * as React from 'react';
import { SideMenu } from 'components/SideMenu';
import { Header } from 'components/header';
import { useStyles } from './Main.styles';

interface IMain {
  children: React.ReactNode;
}

export const Main: React.FunctionComponent<IMain> = ({ children }: IMain) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className={`${classes.main}`}>
      <div className={classes.menu}>
        <SideMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.headerContent}>
          <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        </div>
        <div className={`${classes.content}`}>{children}</div>
      </div>
    </div>
  );
};
