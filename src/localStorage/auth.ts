const AUTH_STORAGE = 'auth';

export const checkAuthStorage = () => localStorage.getItem(AUTH_STORAGE);
export const setAuthStorage = () => localStorage.setItem(AUTH_STORAGE, 'true');
