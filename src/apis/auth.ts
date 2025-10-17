import axios from 'axios';
import { API_HOST } from '~/constants';
import { LoginData, SignupData } from '~/types/auth';
import { ApiResponse } from '~/types/base';

interface SignupRequest {
  user_id: string;
  password: string;
  name: string;
}

interface LoginResponse {
  token: string;
}

// signup
export const signup = async (signupData: SignupData) => {
  // const signupRequest: SignupRequest = {
  //   user_id: signupData.userId,
  //   password: signupData.password,
  //   name: signupData.name
  // };
  // await axios.post(`${API_HOST}/auth/signup`, signupRequest);

  // 동작 확인을 위해 넘어가는 코드
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return;
};

// login
export const login = async (loginData: LoginData) => {
  // const request = {
  //   user_id: loginData.userId,
  //   password: loginData.password
  // };
  // const response: ApiResponse<LoginResponse> = await axios.post(
  //   `${API_HOST}/auth/login`,
  //   request
  // );
  // const token = response.data.data.token;

  // return token;

  // 동작 확인을 위해 넘어가는 코드
  await new Promise(resolve => setTimeout(resolve, 500));
  const fakeToken = "FAKE_JWT_TOKEN"; 
  return fakeToken;
};

export const logout = () => {
  window.sessionStorage.removeItem('jwt');
};
