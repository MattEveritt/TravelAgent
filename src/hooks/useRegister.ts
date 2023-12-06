import { useAppDispatch } from '../redux';
import { register } from '../redux/auth/thunks/register';

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const runRegister = async (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
  ) => {
    const res = await dispatch(
      register({ email, firstName, lastName, password }),
    ).unwrap();
    return res;
  };
  return { runRegister };
};
