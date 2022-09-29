// eslint-disable-next-line no-unused-vars
import styles from './Content.module.scss';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import MealsContext from "../store/MealsContext";
import MealItem from './meal-item/MealItem';
import hash from 'object-hash';
import useMemoCompare from '../../shared/hooks/useMemoCompare';

const Content = () => {

  const cartContext = useContext(MealsContext);
  
  const mealsAvailable = useMemoCompare(cartContext.mealsAvailable, (prev, curr) => {
    const prevHash = hash.MD5(prev??{});
    const currHash = hash.MD5(curr??{});
    return prevHash === currHash;
  });

  const refreshMenu = () => {
    cartContext.refreshMenu();
  };

  const addActionHandler = (menuInfo) => (amountToAdd) => {
    const amount = +amountToAdd;
    cartContext.addMealToCart({
      meal: menuInfo,
      amount
    });
  };
  

  useEffect(() => {
    document.title = `${cartContext.totalMealsCount > 0 ? '('+cartContext.totalMealsCount+')' : ''} Food Dash`;
  }, [cartContext.totalMealsCount]);

  return (
    <div className={ `container py-3` }>
      <div className={ `${styles.parent}` }>
        <div className={ `d-flex justify-content-between fs-25 poppins ${styles['menu-title']}` }>
          <div className="w-33p"></div>
          <div className="w-33p">
            Our menu
            <button onClick={ refreshMenu } className="btn btn-outline-light ml-2" disabled={ cartContext.menuLoading }>Refresh menu</button>
          </div>
          <div className="w-33p d-flex justify-content-end fs-18 align-items-center">
            { cartContext.cartLoading ? 'Adding to cart...' : '' }
          </div>
        </div>
        <div>
          {
            cartContext.menuLoading ? (<>Loading...</>) : 
            <>
              { mealsAvailable && mealsAvailable.map((res) => {
                return <MealItem mealInfo={ res } key={ res.id } onAddAction={ addActionHandler(res) }></MealItem>;
              })}
            </>
            
          }
        </div>
      </div>
    </div>
  );
};

export default Content;