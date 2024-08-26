import TextContainer from "../../../textContainer/TextContainer"
import { useDispatch } from 'react-redux';
import { showEntry } from "../../../../store/accountSlice";


function SignUpHeader() {
    const dispatch = useDispatch();

  return (
      <>
         <TextContainer className={"mb-8"}>
          {" "}
          Join the Team
        </TextContainer>
        <p className="mt-2 leading-7">
          Create an account and never miss another{" "}
          <b>1800</b> event near you. Explore, make new
          friends, and start #DoingThings. We can’t wait to
          see you out there!{" "}
        </p>
        <p className="my-5">
          Already have an account?{" "}
          <small
            className="underline cursor-pointer ml-1"
            onClick={() => dispatch(showEntry(4))}
          >
            Sign In
          </small>
        </p>
      </>
  )
}

export default SignUpHeader