import Button from "../../../reusables/button/Button";
import ArrowImg from '../../../../assets/Icons/up-arrow.svg'

function ScrollButton({ btn, scroll }) {
  return (
    <>
      {btn && (
        <Button
          styles={
            "fixed bottom-[3rem] right-[.5rem] rounded-[50%] flex justify-center items-center cursor-pointer bg-[var(--pry-col)] size-[3rem]"
          }
          onClick={scroll}
        >
          {" "}
          <img
            src={ArrowImg}
            className="size-[60%] stroke-slate-950"
          />
        </Button>
      )}
    </>
  );
}
export default ScrollButton;
