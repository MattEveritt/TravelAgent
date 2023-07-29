import {useDispatch} from 'react-redux';
import {register} from '../redux/auth/thunks/register';

export const useRegister = () => {
  const dispatch = useDispatch();
  const runRegister = async (email, username, password) => {
    const res = await dispatch(register({email, username, password})).unwrap();
    return res;
  };
  return {runRegister};
};
