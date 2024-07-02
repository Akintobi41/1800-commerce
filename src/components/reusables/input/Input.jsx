function Input({ type, name,styles, ...props }) {
  return (
    <input type={type} name={name} className={styles} {...props} />
  );
}

export default Input;
