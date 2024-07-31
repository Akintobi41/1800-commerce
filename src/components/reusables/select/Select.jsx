/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  {
    type,
    options,
    label,
    border = " border-solid border-[1px]",
    width,
    styles,
    text,
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <section className={`${width} flex flex-col`}>
      {" "}
      {label && (
        <label
          htmlFor={id}
          className="text-[.75rem] font-bold"
        >
          {label}{" "}
        </label>
      )}
      <select
        className={`${styles} ${border}`}
        {...props}
        id={id}
        ref={ref}
        defaultValue={text}
      >
        {" "}
        {options?.map((option) => (
          <option
            key={option}
            value={option}
            className="text-left"
          >
            {type === "products"
              ? option
              : type === "signup"
              ? option
              : type === "birthday"
              ? option
              : ""}
          </option>
        ))}{" "}
      </select>
    </section>
  );
});

export default Select;
