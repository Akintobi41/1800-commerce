/* eslint-disable react/prop-types */

function Button({children,styles,...props}) {
  return (
      <button className={styles} {...props}>{children}</button>
  )
}

export default Button