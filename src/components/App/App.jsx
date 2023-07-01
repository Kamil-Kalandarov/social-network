import React from 'react';
import { Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import Header from '../Header/Header';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import UsersContainer from '../Users/UsersContainer';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <NavbarContainer />
      <main className={styles.app__main}>
        <Routes>
          <Route 
            path='/profile/:userId' 
            element={<ProfileContainer />}
          />
          <Route 
            path='/profile/*' 
            element={<ProfileContainer />}
          />
          <Route 
            path='/dialogs/*' 
            element={<DialogsContainer />}
          />
          <Route 
            path='/users/*' 
            element={<UsersContainer />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
