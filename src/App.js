import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { decrement, increment, count } from './CounterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>

      <button onClick={()=>dispatch(count())}>Add50</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      
    </div>
  );
}

export default App;
