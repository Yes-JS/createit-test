import * as React from 'react';
import './header-styles.scss';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { searchMovie } from 'models/movies';
import { useStyles } from './Header.styles';
import { useAppDispatch } from '../../store';
import {
  useActiveCategorySelector,
  useSearchbleStringSelectorSelector,
} from '../../models/movies/selectors';

interface IHeaderProps {
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
}

export const Header: React.FunctionComponent<IHeaderProps> = ({
  mobileOpen,
  setMobileOpen,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const activeCategory = useActiveCategorySelector();
  const searchbleString = useSearchbleStringSelectorSelector();

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(searchMovie(e.target.value));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.headerContainer}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <OutlinedInput
        value={searchbleString}
        placeholder={`search in ${activeCategory}`}
        className={classes.searchInput}
        onChange={(e) => handleSearch(e)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </div>
  );
};
