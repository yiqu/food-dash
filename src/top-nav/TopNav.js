// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState, useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './TopNav.module.scss';
import ReactDOM from 'react-dom';
import TopNavTitle from './TopNavTitle';
import TopNavCart from './TopNavCart';
import MealsContext from "../core/store/MealsContext";
import CartModal from '../shared/cart-modal/CartModal';


const TopNav = () => {

  const appTitle = 'Food Dash';
  const cartContext = useContext(MealsContext);
  const [modalOpen, setModalOpen] = useState({
    isOpen: false
  });

  const onCartOpenHandler = () => {
    setModalOpen((prevState) => {
      return {
        ...prevState,
        isOpen: cartContext.totalMealsCount > 0 ? (!prevState.isOpen) : false
      };
    });
  };

  const backdropHandler = () => {
    setModalOpen((prevState) => {
      return {
        ...prevState,
        isOpen: false
      };
    });
  };

  const cartModal = (<CartModal classes={ `app-modal` } meals={ cartContext.mealsInCart }
    onAddMealCount={ cartContext.addMealToCart } onRemoveMealCount={ cartContext.deleteMealFromCart } 
    totalCost={ cartContext.totalMealsCost } onClose={ backdropHandler }/>);
  
  const Backdrop = (props) => {
    return <div className={ `backdrop` } onClick={ backdropHandler }/>;
  };

  return (
    <>
      <div className={ `${styles.parent}` }>
        <TopNavTitle display={ appTitle }/>
        <TopNavCart onCartClick={ onCartOpenHandler } totalMealsCount={ cartContext.totalMealsCount } isLoading={ cartContext.cartFetchingLoading }/>
      </div>
      <>
        { modalOpen.isOpen && (
          <React.Fragment>
            { ReactDOM.createPortal(<Backdrop />, document.getElementById('app-overlay')) }
            { ReactDOM.createPortal(cartModal, document.getElementById('app-modal')) }
          </React.Fragment>
        ) }
      </>
    </>
    
  );
};

export default React.memo(TopNav);