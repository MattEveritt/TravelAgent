import {login} from '../redux/auth/thunks/login';
import {getTrips, getTravellers} from '../redux';
import {useDispatch} from 'react-redux';

export const useLogin = () => {
  const dispatch = useDispatch();
  const runLogin = async (username: any, password: any) => {
    // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, Asyn... Remove this comment to see the full error message
    dispatch(login({username, password})).then((action: any) => {
      if (action.payload.userId) {
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, Asyn... Remove this comment to see the full error message
        dispatch(getTrips(action.payload.userId));
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, Asyn... Remove this comment to see the full error message
        dispatch(getTravellers(action.payload.userId));
      }
    });
  };
  return {runLogin};
};
