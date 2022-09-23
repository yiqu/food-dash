// eslint-disable-next-line no-unused-vars
import classes from './TopNavCart.module.scss';
import CartIcon from './CartIcon';

const TopNavCart = () => {

  return (
    <button className={ classes.button }>
      <span className={ classes.icon }>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={ classes.badge }>3</span>
    </button>
  );
};

export default TopNavCart;