import Button from "../../../reusables/button/Button";

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
            src="/src/assets/Icons/up-arrow.svg"
            className="size-[60%] stroke-slate-950"
          />
        </Button>
      )}
    </>
  );
}

export default ScrollButton;
