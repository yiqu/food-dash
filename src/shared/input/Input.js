import { useRef } from 'react';
import classes from './Input.module.css';

const Input = (props) => {

  const inputRef = useRef();

  const focusHandler = () => {
    inputRef.current.select();
  };

  return (
    <div className={ classes.input }>
      <label htmlFor={ props.input.id }>{props.label}</label>
      <input { ...props.input } onFocus={ focusHandler } ref={ inputRef }/>
    </div>
  );
};

export default Input;
