import React from 'react';
import Container from '@material-ui/core/Container';
import Button from './helpers/button';
import SignIn from './User/SignIn';
import SignUp from './User/SignUp';
import SignInSide from './User/SignInSide';
import Routes from './Header/index';
import Header from './Header/Header';
import TopNavigationBar from './Header/NavigationBar';

const sections = [
    { title: 'Sign In', url: '/SignIn' },
    { title: 'Sign Up', url: '/SignUp' },
    { title: 'Sign In Side', url: '/SignInSide' }
  ];

export default () => (
    <div>
        {/* <Container maxWidth="lg">
            <Button />
        </Container>
        <SignIn />
        <SignUp />
        <SignInSide /> */}
        <Header title='Nandkumar Gangai' sections={sections} />
        <Routes />
    </div>
)
