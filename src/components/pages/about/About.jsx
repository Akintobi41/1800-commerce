import { aboutText } from "../../../utils/text/text";
import Heading from "../../heading/Heading";

const About = ({ className = "mt-28" }) => {
  return (
    <>
      <aside
        className={`flex flex-col items-center px-4 gap-2 leading-[2] bg-[var(--white)] ${className} max-w-[700px] min-[700px]:mx-auto`}
      >
        <Heading> What do you know about us?</Heading>

        <p className="px-4 text-left mx-auto lg:leading-[2.5] text-ellipsis overflow-hidden ...">
          {aboutText}
        </p>
      </aside>
    </>
  );
};

export default About;
