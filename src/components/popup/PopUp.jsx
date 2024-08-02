import { useEffect } from 'react';
import s from './s_popUp.module.css'

const PopUp = ({ text,isVisible,setIsVisible,className}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
          setIsVisible(false)
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div 
      className={`${s.popup} ${isVisible ? s.visible : ''} ${className}`} 

    >
      <p className={s.text}>{text}</p>
    </div>
  );
};
export default PopUp;
