import {useSelector,useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const toggleCounter = useSelector(state => state.toggleCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter &&<><div className={classes.value}>{counter}</div>
      <div>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'increse',value:5})}>IncreseBy 5</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      </div></>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
