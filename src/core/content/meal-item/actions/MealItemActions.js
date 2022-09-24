import styles from './MealItemActions.module.scss';
import Input from '../../../../shared/input/Input';
// eslint-disable-next-line no-unused-vars
import { useRef, useState } from 'react';

const MealItemActions = (props) => {
  const [amountState, setAmountState] = useState(1);

  const mealAddActionHandlder = (event) => {
    event.preventDefault();
    props.onAddAction(amountState);
    setAmountState(1);
  };

  const inputChangeHandler = (value) => {
    setAmountState(value.target.value);
  };

  return (
    <form className={ `${styles.form}` }>
      <Input
        label='Amount'
        input={ {
          id: 'amount_' + props.item.id,
          type: 'number',
          value: amountState,
          onChange: inputChangeHandler
        } }
      />
      <button onClick={ mealAddActionHandlder } disabled={ amountState < 1 }>+ Add</button>
    </form>
  );
};

export default MealItemActions;
