import React from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './TopNav.module.scss';
import TopNavTitle from './TopNavTitle';
import TopNavCart from './TopNavCart';

const TopNav = () => {

  const appTitle = 'Food Dash';

  return (
    <div className={ `${styles.parent}` }>
      <TopNavTitle display={ appTitle }/>
      <TopNavCart />
    </div>
  );
};

export default TopNav;