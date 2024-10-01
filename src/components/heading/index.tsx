import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode; 
  className?: string; 
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className = '',
  level = 'h2'
}) => { 

  const HeadingTag = level; // Determine which heading tag to use

  return (
    <HeadingTag className={`text-[25px] mt-4 mb-12 font-[700] text-center ${className}`}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
