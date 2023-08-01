import {login} from '../redux/auth/thunks/login';
import {getTrips, getTravellers, useAppDispatch} from '../redux';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const runLogin = async (username: string, password: string) => {
    dispatch(login({username, password})).then(() => {
        dispatch(getTrips());
        dispatch(getTravellers());
    });
  };
  return {runLogin};
};
