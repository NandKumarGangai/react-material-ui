/* import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>SignIn</Link></li>
        <li><Link to='/SignUp'>SignUp</Link></li>
        <li><Link to='/SignInSide'>SignInSide</Link></li>
      </ul>
    </nav>
  </header>
)
*/

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import RouterLink from '../helpers/RouterLink';
import TopNavigationBar from './NavigationBar';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    // backgroundColor: '#3b3c36',
    borderRadius: '10px'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));
const linkClasses = {
    'textDecoration': "none",
    'color': 'black',
    'fontWeight': 'bold',
    'fontSize': '150'
}
export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      {/* <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="" size="small">
          <RouterLink href='/SignUp' styles={linkClasses}>
            <AccountCircleIcon />
          </RouterLink>
        </Button>
      </Toolbar> */}
      <TopNavigationBar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <RouterLink
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              styles={linkClasses}
              className={classes.toolbarLink}
            >
              {section.title}
            </RouterLink>
          ))}
        </Toolbar>
      </TopNavigationBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};