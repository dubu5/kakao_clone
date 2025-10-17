export enum PAGE_PATHS {
  HOME = '/',
  LOGIN = '/login',
  SIGNUP = '/signup',
  FRIENDS = '/friends', // 임시
}

/* DB 연결 안했으니 일단 주석처리
export const HOST = import.meta.env.VITE_HOST || 'http://localhost:8001';

export const API_URL = import.meta.env.VITE_API_URL;
*/

// test용
export const API_HOST = 'http://localhost:4000';
export const HOST = 'http://localhost:3000';

export const BASE_IMG_URL = '/asset/base_profile.jpg';
