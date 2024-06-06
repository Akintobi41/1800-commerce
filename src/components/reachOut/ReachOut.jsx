import { Link } from "react-router-dom";
import React from "react";
import HundredIcon from "./../../assets/Icons/HundredIcon";

const ReachOut = () => {
  const textOptions = ["Happiness", "Guarantee"];
  const btnOptions = ["Contact Us", "FAQ"];

  return (
    <section className='flex flex-col pt-6 px-6 pb-12'>
      <section>
        <section className='flex items-center'>
          {/* <img
            src="/Images/100-percent.svg"
            alt="100 percent"
            className={s.percent} w-[6.5rem]
          /> */}
          {/* <HundredIcon/> */}
          <section className='flex leading-[1] w-full mr-1'>
            {textOptions.map((el) => (
              <p
                key={el}
                className='font-semibold'
              >
                {el}
              </p>
            ))}
          </section>
        </section>
      </section>
      <p className='text-[.875rem] leading-[1.5] tracking-[0.015625rem] max-w-[625px] mt-1'>
        The 1800 Customer Happiness Team is your go-to when
        you need a recommendation, a refund, or just a
        reason to smile. Seriously, reach out. Even just to
        say hi.
      </p>
      <section className='leading-[1]'>
        {btnOptions.map((btn) => (
          <React.Fragment key={btn}>
            <Link
              to={`${
                btn.endsWith("Us")
                  ? "contact"
                  : btn.toLowerCase() + "s"
              }  `}
              key={btn}
            >
              <button className='inline-flex items-center justify-center rounded-sm cursor-pointer no-underline border-none relative bg-[rgb(16,14,32)] text-[rgb(255,255,255)] font-bold leading-[1.25] tracking-[0.020625rem] min-h-[32px] min-w-[100px] py-0 px-4 mt-4 mr-4'>
                {btn}
              </button>
            </Link>
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};

export default ReachOut;

// .reach-out-btn {
//   display: inline-flex;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
//   border-radius: 1px;
//   cursor: pointer;
//   text-decoration: none;
//   border-style: none;
//   user-select: none;
//   position: relative;
//   text-transform: none;
//   background-color: rgb(16, 14, 32);
//   color: rgb(255, 255, 255);
//   font-size: 0.875rem;
//   font-weight: 700;
//   line-height: 1.25;
//   letter-spacing: 0.020625rem;
//   min-height: 32px;
//   min-width: 100px;
//   padding: 0px 16px;
//   margin-right: 1rem;
//   margin-top: 1rem;
// }

// .reach-out-container {
//   display: flex;
//   flex-direction: column;
//   padding: 1.5rem 1.5rem 3rem;
// }
