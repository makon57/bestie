import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Splash from './components/Splash';
import { authenticate } from './store/session';
import Header from './components/Header';
import Listings from './components/Listings';
import { fetchAllListings } from './store/listings';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(fetchAllListings());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      {/* <Header /> */}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/about' exact={true} >
          <Splash />
        </Route>
        <Route path='/adopt' exact={true} >
          <Listings />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:id' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <Splash />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
