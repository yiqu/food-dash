// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './CartModal.module.scss';
import CartItem from '../cart-item/CartItem';

const CartModal = (props) => {

  const totalMealsInCart = props.meals;

  return (
    <div className={ props.classes }>
      <>
        {
         totalMealsInCart.length >= 1 && <div className={ `${styles.total} d-flex justify-content-center poppins` }>Your Cart</div>
        }
      </>
      <>
        {
          totalMealsInCart.length < 1 && <div className={ `${styles.total} d-flex justify-content-center poppins` }>
            <div> Cart is empty </div>
          </div>
        }
      </>
      
      <ul className={ styles['cart-items'] }>
        { totalMealsInCart.map((meal) => {
          return <CartItem item={ meal } key={ meal.id } onAdd={ props.onAddMealCount } 
            onRemove={ props.onRemoveMealCount }/>;
        }) }
      </ul>
      <div className={ styles.total + ' poppins' }>
        <span>Total Amount</span>
        <span>${ props.totalCost }</span>
      </div>
      <div className={ styles.actions }>
        <button className={ styles['button--alt'] } onClick={ props.onClose }>
          Close
        </button>
        {false && <button className={ styles.button }>Order</button>}
      </div>
    </div>
  );
};

export default CartModal;