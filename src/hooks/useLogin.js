import {login} from '../redux/auth/thunks/login';
import {getTrips} from '../redux/trips/thunks/getTrips';
import {useDispatch} from 'react-redux';

export const useLogin = () => {
  const dispatch = useDispatch();
  const runLogin = async (username, password) => {
    dispatch(login({username, password})).then(action => {
      if (action.payload.userId) {
        dispatch(getTrips(action.payload.userId));
      }
    });
  };
  return {runLogin};
};
