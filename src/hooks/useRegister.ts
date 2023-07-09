import {useDispatch} from 'react-redux';
import {register} from '../redux/auth/thunks/register';

export const useRegister = () => {
  const dispatch = useDispatch();
  const runRegister = async (email, username, password) => {
    dispatch(register({email, username, password}));
  };
  return {runRegister};
};
