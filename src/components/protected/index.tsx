/* eslint-disable react/prop-types */
import { useAppSelector } from "@hooks/useAppStore";
import { selectAuthStatus } from "@store/loginSlice";
import { FC, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

interface ProtectedProps {
  children: ReactNode;
  authentication?: boolean;
}

const Protected: FC<ProtectedProps> = ({
  authentication = true,
  children,
}) => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectAuthStatus);

  useEffect(() => {
    if (authentication && !isAuthenticated) {
      navigate("/");
    }
    if (!authentication && !isAuthenticated) {
      navigate("/signup");
    }
  }, [isAuthenticated, authentication]);

  return <div>{children}</div>;
};
export default Protected;
