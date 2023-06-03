import React from 'react';
import { Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import DialogsContainer from '../Dialogs/DialogsContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import UsersContainer from '../Users/UsersContainer';

const App = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <NavbarContainer />
      <main className={styles.app__main}>
        <Routes>
          <Route 
            path='/profile' 
            element={<Profile />}/>
          <Route 
            path='/dialogs/*' 
            element={<DialogsContainer />}/>
          <Route 
            path='/users/*' 
            element={<UsersContainer />}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;
