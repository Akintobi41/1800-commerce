
function Heading({ children ,className }) {
    
  return (
      <section className={`text-[25px] font-[700] text-center ${className}`}>{ children }</section>
      
  )
}

export default Heading