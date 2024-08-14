import Heading from "../../heading/Heading";
import Logo from "../../logo/Logo";
import { Link } from "react-router-dom";
import { aboutText } from "../../../utils/text/text";

const About = ({ className = "mt-28" }) => {
  return (
    <aside
      className={`flex flex-col items-center px-4 gap-2 leading-[2] bg-[var(--white)] ${className} max-w-[700px] min-[700px]:mx-auto`}
    >
      <Heading> What do you know about us?</Heading>
      <p className="px-4 text-left mx-auto lg:leading-[2.5] text-ellipsis overflow-hidden ...">
        {aboutText}
      </p>
      <Logo />
    </aside>
  );
};

export default About;
