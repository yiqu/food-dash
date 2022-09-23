// eslint-disable-next-line no-unused-vars
import styles from './Content.module.scss';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
import MealsContext from "../store/MealsContext";

const Content = () => {

  const cartContext = useContext(MealsContext);

  return (
    <div className={ `container pt-3` }>
      <div className={ `${styles.parent}` }>
        Food Options
        <div>
          { cartContext.mealsAvailable.map((res) => {
            return <div key={ res.id }> {res.name} </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;