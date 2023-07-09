import {useDispatch} from 'react-redux';
import {register} from '../redux/auth/thunks/register';

export const useRegister = () => {
  const dispatch = useDispatch();
  const runRegister = async (email: any, username: any, password: any) => {
    // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, Asyn... Remove this comment to see the full error message
    dispatch(register({email, username, password}));
  };
  return {runRegister};
};
