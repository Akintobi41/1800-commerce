
function LeftArrow({size = 'size-6',className}) {
  return (
      <svg data-testid = 'left-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${size} ${className}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

  )
}

export default LeftArrow