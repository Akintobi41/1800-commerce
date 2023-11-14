/* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from "react";
import s from "./s_Details.module.css";
const Details = ({ el, activeIndex, setActiveIndex }) => {
  function handleClick() {
    setActiveIndex((prevIndex) =>
      prevIndex === el.id ? null : el.id
    );
    // console.log(el.id);
    // console.log(activeIndex);
  }

  return (
    <>
      <button
        className={`${s.accordion} ${
          activeIndex ? s.active : ""
        }`}
        onClick={handleClick}
        // aria-expanded={
        //   el.id === activeIndex ? "true" : "false"
        // }
        // aria-controls={`panel-${el.id}`}
      >
        {el.title}
      </button>
      <div
        className={`${s.panel} ${
          activeIndex ? s.show : ""
        }`}
        style={{
          maxHeight: activeIndex ? "1000px" : "0",
        }}
        // aria-hidden={!activeIndex}
      >
        <p className={s["accordion-text"]}>{el.text}</p>
      </div>
    </>
  );
};

export default Details;
