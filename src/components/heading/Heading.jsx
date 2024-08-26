
function Heading({ children ,className }) {
    
  return (
      <section className={`text-[25px] mb-8 font-[700] text-center ${className}`}>{ children }</section>
      
  )
}

export default Heading