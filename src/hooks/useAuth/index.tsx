import authService from '@appwrite/auth/auth';
import { useAppSelector } from '@hooks/useAppStore';
import { selectUserData, signIn } from '@store/loginSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useAuth = () => {
  const isAuthenticated = useAppSelector(selectUserData);
  const userData = useAppSelector(selectUserData)

  const dispatch = useDispatch();

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
  }, []);

  return userData;
};

export default useAuth;
