import { aboutText } from "@utils/constants";
import { Link } from "react-router-dom";
import Heading from "@components/heading";

function AboutSection() {
  return (
    <section className="max-w-[700px] mx-auto px-4">
      <Heading> What do you know about us?</Heading>
      <p>
        {aboutText.slice(0, 149)}...
        <Link
          data-testid="about-section"
          to="/about"
          className="underline italic ml-1"
        >
          continue reading
        </Link>
      </p>
    </section>
  );
}

export default AboutSection;
