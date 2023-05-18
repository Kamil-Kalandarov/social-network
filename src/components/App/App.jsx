import React from 'react';
import { Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import Header from '../Header/Header';
/* import Navbar from '../Navbar/Navbar'; */
import Profile from '../Profile/Profile';
/* import Dialogs from '../Dialogs/Dialogs'; */
import DialogsContainer from '../Dialogs/DialogsContainer';
import NavbarContainer from '../Navbar/NavbarContainer';

const App = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <NavbarContainer /* state={props.state.friendsList} *//>
      <main className={styles.app__main}>
        <Routes>
          <Route 
            path='/profile' 
            element={<Profile /* profilePageState={props.state.profilePage} dispatch={props.dispatch} */ /* store={props.store} */ />}/>
          <Route 
            path='/dialogs/*' 
            element={<DialogsContainer /* messagesPageState={props.state.messagesPage} dispatch={props.dispatch} */ /* store={props.store} */ />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
