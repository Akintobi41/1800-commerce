import { useEffect } from 'react';
import s from './s_popUp.module.css'

const PopUp = ({ isVisible,setIsVisible}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
          setIsVisible(false)
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div 
      className={`${s.popup} ${isVisible ? s.visible : ''}`} 
      role="alert" 
      aria-live="assertive"
    >
      <p>Some fields are still empty</p>
    </div>
  );
};
export default PopUp;
