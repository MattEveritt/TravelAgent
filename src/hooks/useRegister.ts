import { useAppDispatch } from '../redux';
import {register} from '../redux/auth/thunks/register';

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const runRegister = async (email: any, username: any, password: any) => {
    const res = await dispatch(register({email, username, password})).unwrap();
    return res;
  };
  return {runRegister};
};
