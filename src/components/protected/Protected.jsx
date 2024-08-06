/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Protected({ authentication = true, children }) {
  const navigate = useNavigate();
  const loggedIn = useSelector(
    (state) => state.auth.status
  );

  useEffect(() => {
    if (authentication && !loggedIn) {
      navigate("/");
    }
  }, [loggedIn, authentication]);

  return <div>{children}</div>;
}

export default Protected;
