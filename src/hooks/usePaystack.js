/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../store/cartSlice';

const usePaystack = () => {
  const publicKey =
    "pk_test_7a2adf6b19c82a86521fc2277348355f2f16bc79";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function approved() {
    dispatch(clearCart());
    navigate("/");
  }
   

  return {publicKey,approved}
};

export default usePaystack;
