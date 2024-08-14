import { Link } from "react-router-dom"
import { aboutText } from "../../utils/text/text"
import Heading from "../heading/Heading"

function AboutSection() {
  return (
      <section className="px-4">
      <Heading> What do you know about us?</Heading>
      <p className="max-w-[700px] mx-auto pt-4">{aboutText.slice(0,149)}...<Link to='/about' className="underline italic">continue reading</Link></p>
      </section>
  )
}

export default AboutSection