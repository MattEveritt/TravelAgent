import {createSlice} from '@reduxjs/toolkit';
import {login, loginCases} from './thunks/login';
import {
  refreshAccessToken,
  refreshAccessTokenCases,
} from './thunks/refreshAccessToken';
import {register, registerCases} from './thunks/register';

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  logInError: undefined,
  userId: undefined,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
    },
    setSignOut: state => {
      state.email = null;
      state.userName = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, loginCases.fulfilled);
    builder.addCase(
      refreshAccessToken.fulfilled,
      refreshAccessTokenCases.fulfilled,
    );
    builder.addCase(
      register.fulfilled,
      registerCases.fulfilled,
      // @ts-expect-error TS(2554): Expected 2 arguments, but got 3.
      registerCases.rejected,
    );
  },
});

export const {setSignIn, setSignOut} = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.userAuth.isLoggedIn;
export const selectEmail = (state: any) => state.userAuth.email;
export const selectUserName = (state: any) => state.userAuth.userName;

export default authSlice.reducer;
