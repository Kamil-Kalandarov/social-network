import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styles from './App.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Navbar state={props.state.friendsList}/>
        <main className={styles.app__main}>
          <Routes>
            <Route 
              path='/profile' 
              element={<Profile profilePageState={props.state.profilePage} dispatch={props.dispatch} />}/>
            <Route 
              path='/dialogs/*' 
              element={<Dialogs messagesPageState={props.state.messagesPage} dispatch={props.dispatch} />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
