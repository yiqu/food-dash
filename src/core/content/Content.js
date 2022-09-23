// eslint-disable-next-line no-unused-vars
import styles from './Content.module.scss';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
import MealsContext from "../store/MealsContext";
import MealItem from './meal-item/MealItem';

const Content = () => {

  const cartContext = useContext(MealsContext);

  return (
    <div className={ `container py-3` }>
      <div className={ `${styles.parent}` }>
        <div className={ `d-flex justify-content-center fs-25 poppins ${styles['menu-title']}` }>
          Our menu
        </div>
        <div>
          { 
            cartContext.mealsAvailable.map((res) => {
              return <MealItem mealInfo={ res } key={ res.id }></MealItem>;
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Content;