import authService from '@appwrite/auth/auth';
import { useAppDispatch, useAppSelector } from '@hooks/useAppStore';
import { selectAuthStatus, selectUserData, signIn } from '@store/loginSlice';
import { useEffect } from 'react';

const useAuth = () => {
  const isAuthenticated = useAppSelector(selectAuthStatus);
  const userData = useAppSelector(selectUserData)

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(signIn({ userData }));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUser();
  }, [isAuthenticated]);

  return userData;
};

export default useAuth;
