import Button from "@components/reusables/button/index";
import ArrowImg from "@icons/up-arrow.svg";
import { FC } from "react";

interface ScrollBtnProps {
  btn: boolean;
  scroll: () => void;
}
const ScrollButton: FC<ScrollBtnProps> = ({ btn, scroll }) => {
  
  return (
    <>
      {btn && (
        <Button
          data-testid="scroll-btn"
          styles={
            "fixed bottom-[3rem] right-[.5rem] rounded-[50%] flex justify-center items-center cursor-pointer bg-[var(--pry-col)] size-[3rem]"
          }
          onClick={scroll}
        >
          {" "}
          <img
            src={ArrowImg}
            alt="arrow-up"
            className="size-[60%] stroke-slate-950"
          />
        </Button>
      )}
    </>
  );
}
export default ScrollButton;
