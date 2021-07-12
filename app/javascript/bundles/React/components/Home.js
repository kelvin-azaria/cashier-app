import { testActions } from '../store/test-slice';
import { useDispatch, useSelector } from 'react-redux';

const Home = (props) => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.test.status);

  const toggleButtonHandler = () => {
    dispatch(testActions.toggle());
  }
  return (
    <div>
      <h1>Status is : {status.toString()}</h1>
      
      <button onClick={toggleButtonHandler}>
        Toggle status
      </button>
    </div>
  );
}
 
export default Home;