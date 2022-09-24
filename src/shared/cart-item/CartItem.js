// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './CartItem.module.scss';

const CartItem = (props) => {

  const addOneMoreHandler = () => {
    props.onAdd({
      meal: props.item,
      amount: 1
    });
  };

  const removeOneMoreHandler = () => {
    props.onRemove({
      meal: props.item,
      amount: 1
    });
  };

  return (
    <li className={ styles['cart-item'] }>
      <div>
        <h2>{props.item.name}</h2>
        <div className={ styles.summary }>
          <div className={ styles.price }>{props.item.price}</div>
          <div className={ styles.amount }>x {props.item.countInCart}</div>
          <div className={ styles.amount }>= ${(Math.trunc(props.item.price * props.item.countInCart * 100) / 100)}</div>
        </div>
      </div>
      <div className={ styles.actions }>
        <button onClick={ removeOneMoreHandler } disabled={ props.item.countInCart < 1 } > − </button>
        <button onClick={ addOneMoreHandler }> + </button>
      </div>
    </li>
  );
};

export default CartItem;