import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  days,
  daysInMonth,
  months,
} from "../../utils/constants";
import {
  hasNumber,
  specialChars,
} from "../../utils/testInput/testInput";

const useForms = () => {
  const { register, handleSubmit, watch, formState } =
    useForm();

  const [birthday, setBirthday] = useState({
    month: months,
    day: days(31),
  });
  const [pword, setPword] = useState(false);
  const [pvalid, setPValid] = useState("");
  const [fName, setFName] = useState(false);
  const [lName, setLName] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const subscription = watch((value) => {
      const {
        cpassword,
        password,
        birthmonth,
        birthdate,
        name,
        lastName,
      } = value;
      cpassword.length
        ? setPword(cpassword !== password)
        : setPword(false);

      const numDays = daysInMonth[birthmonth.toLowerCase()];
      setBirthday((b) => ({ ...b, day: days(numDays) }));

      setFName(name.length && name.length > 20);
      setLName(lastName.length && lastName.length > 20);

      setErrorMsg("");

      //Password Validation
      const focusPassword = password.length;
      if (focusPassword && password.length < 8) {
        setPValid("password must be at least 8 characters");
      } else if (focusPassword && !specialChars(password)) {
        setPValid("special character must be present");
      } else if (focusPassword && !hasNumber(password)) {
        setPValid("password must include a number");
      } else {
        setPValid(" ");
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const data = {
    birthday,
    pword,
    pvalid,
    fName,
    lName,
    errorMsg,
    setErrorMsg,
    register,
    handleSubmit,
    formState,
    watch,
  };
  return { data };
};

export default useForms;
