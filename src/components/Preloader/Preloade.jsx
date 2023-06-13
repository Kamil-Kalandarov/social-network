import React from 'react';
import styles from './preloader.module.css';
import preloader from '../../images/Double Ring-3s-224px.svg';

const Preloader = () => {
  return (
    <div className={styles.preloader}><img src={preloader} alt='preloader'/></div>
  );
};

export default Preloader;
