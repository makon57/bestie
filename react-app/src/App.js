import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Splash from './components/Splash';
import { authenticate } from './store/session';
import Listings from './components/Listings';
import CreateListingForm from './components/Listings/CreateListingForm';
import EditListingForm from './components/Listings/EditListingForm';
import Sponsor from './components/Sponsor';
import Foster from './components/Foster';
import { fetchAllListings } from './store/listings';
import CreateApplication from './components/Applications';



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(fetchAllListings())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
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
        <Route path='/sponsor' exact={true} >
          <Sponsor />
        </Route>
        <Route path='/foster' exact={true} >
          <Foster />
        </Route>
        <Route path='/' exact={true} >
          <Splash />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:id' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/create-listing' exact={true} >
          <CreateListingForm />
        </ProtectedRoute>
        <ProtectedRoute path='/listings/:id/edit' exact={true} >
          <EditListingForm />
        </ProtectedRoute>
        <ProtectedRoute path='/applications/:id/create' exact={true} >
          <CreateApplication />
        </ProtectedRoute>
        <Route>
          404 page not found
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
