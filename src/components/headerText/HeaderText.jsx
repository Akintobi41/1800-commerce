import { useState } from 'react';
import CloseIcon from './../../assets/Icons/CloseIcon';

const HeaderText = () => {
  const [close, setClose] = useState(false)
  const num = 1000000;
  return (
   close ? null : <section data-testid='banner' className={`absolute bg-[var(--pry-col)] flex justify-between items-center p-2 gap-2 sm:px-8 z-20 top-0 left-0 w-full transition-all translate-y-0 duration-300 opacity-100 h-10 ${close ? 'h-0 opacity-0 invisible -translate-y-4' : ''}`}>
      <p className='text-white text-center text-sm grow'>
      Free express shipping for orders over &#8358;{num.toLocaleString()}
      </p>
      <button data-testid='banner-button' aria-label='close banner' onClick={()=>setClose(true) }>
      <CloseIcon size='size-4' className='cursor-pointer' strokeWidth='5.5'  />
      </button>
    </section>
    
  );
};

export default HeaderText;
