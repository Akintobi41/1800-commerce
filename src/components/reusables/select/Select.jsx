/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { options, label, styles, ...props },
  ref,
) {
  const id = useId();

  return (
    <div className="w-full">
      {" "}
      {label && (
        <label htmlFor={id} className="">
          {label}{" "}
        </label>
      )}
      <select
        className={styles}
        {...props}
        id={id}
        ref={ref}
      >
        {" "}
        {options.map((option) => (
          <option key={option} value={option}></option>
        ))}{" "}
      </select>
    </div>
  );
});

export default Select;
