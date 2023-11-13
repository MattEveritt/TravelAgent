import { getAccessToken } from "./getAccessToken";

export const setAuthHeader = (config: any) => {
  const accessToken = getAccessToken(); // Replace with your logic to get the access token
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};