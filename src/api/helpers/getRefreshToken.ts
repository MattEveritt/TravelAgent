import * as SecureStore from 'expo-secure-store';

export const getRefreshToken = async () => {
  try {
    const refreshToken = await SecureStore.getItemAsync('refreshToken');
    return refreshToken;
  } catch (e) {
    return undefined;
  }
};