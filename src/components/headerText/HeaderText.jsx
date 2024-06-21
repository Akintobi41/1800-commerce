const HeaderText = () => {
  const num = 1000000;
  return (
    <p className='p-2 text-[var(--white)] text-center bg-[var(--pry-col)] text-[.8rem]'>
      Free express shipping for orders over &#8358;{num.toLocaleString()}
    </p>
  );
};

export default HeaderText;
