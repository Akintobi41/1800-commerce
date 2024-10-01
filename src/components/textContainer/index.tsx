import  { FC, ReactNode } from 'react';

interface TextContainerProps {
  children: ReactNode;
  className?: string;    
}

const TextContainer: FC<TextContainerProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-[2.35rem] font-bold ${className}`}>
      {children}
    </p>
  );
};

export default TextContainer;
