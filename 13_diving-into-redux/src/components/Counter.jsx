import {useSelector,useDispatch} from 'react-redux'

import {icrement,decrment,toggleCounter,incresse} from '../store/slices/counterSlice'
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<><div className={classes.value}>{counter}</div>
      <div>
        <button onClick={()=>dispatch(icrement())}>Increment</button>
        <button onClick={()=>dispatch(incresse(5))}>IncreseBy 5</button>
        <button onClick={()=>dispatch(decrment())}>Decrement</button>
      </div></>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
