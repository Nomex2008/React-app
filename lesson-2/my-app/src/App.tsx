import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const {count} = useAppSelector(state => state.userReducer);
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <div className='App'>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
    </div>
  );
}

export default App;
