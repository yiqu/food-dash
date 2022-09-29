// eslint-disable-next-line no-unused-vars
import classes from './TopNavCart.module.scss';
import CartIcon from './CartIcon';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';

const TopNavCart = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartOpenHandler = () => {
    props.onCartClick();
  };

  useEffect(() => {
    if (props.totalMealsCount === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [props.totalMealsCount]);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  return (
    <button className={ `${classes.button} ${btnClasses}` } onClick={ cartOpenHandler } disabled={ props.isLoading }>
      <span className={ classes.icon }>
        <CartIcon />
      </span>
      <span>{ props.isLoading ? 'Loading...' : 'Your Cart' }  </span>
      <span className={ classes.badge }>{ props.totalMealsCount }</span>
    </button>
  );
};

export default TopNavCart;