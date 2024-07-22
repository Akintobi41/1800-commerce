function TextContainer({ children,className }) {
  return (
      <p className={`text-[2.35rem] font-bold ${className}`}>
      {children}
    </p>
  );
}

export default TextContainer;
