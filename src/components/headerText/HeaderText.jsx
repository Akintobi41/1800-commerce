import CloseIcon from './../../assets/Icons/CloseIcon';
import { useState } from 'react';

const HeaderText = () => {
  const [close, setClose] = useState(false)
  const num = 1000000;
  return (
    <section className={`absolute z-40 top-0 left-0 w-full transition-all translate-y-0 duration-300 opacity-100 h-10 ${close ? 'h-0 opacity-0 invisible -translate-y-4' : ''}`}>
      <CloseIcon size='size-4' className={'absolute right-0 lg:right-2 top-2 cursor-pointer'} onClick={()=>setClose(true) } />
      <p className='p-[.15rem] text-[var(--white)] text-center bg-[var(--pry-col)] text-[.75rem]'>
      Free express shipping for orders over &#8358;{num.toLocaleString()}
    </p>
    </section>
    
  );
};

export default HeaderText;
