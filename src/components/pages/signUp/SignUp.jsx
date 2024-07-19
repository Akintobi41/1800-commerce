import { useForm } from "react-hook-form"
import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";
import Select from "../../reusables/select/Select";
import { radioText,months,shopFilter,days,daysInMonth } from "../../../utils/text/text";
import { useEffect, useState } from "react";
import authService from "../../../appwrite/auth/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../../../store/loginSlice";
import { useOverflow } from "../../../contexts";
import { closeEntry, showEntry } from "../../../store/accountSlice";
import { useQuery } from "react-query";


function SignUp({ id }) {
  const [birthday, setBirthday] = useState({ month: months, day: days(31) });
  const {month,day} = birthday
  const { register, handleSubmit, watch, formState} = useForm()
  const { errors,isTouched ,isDirty,isValid} = formState;
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account, setAccount } = useOverflow();
  const [enabled, setEnabled] = useState(false);
  const [pword, setPword] = useState(false);
  const [pvalid, setPValid] = useState('');



  function specialChars(val) { 
  return (/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/).test(val)
  }
  function hasNumber(val) {
    return /\d/.test(val);
  }
  // const fieldState = getFieldState("password");
  
 

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        console.log(userData)
        if (userData) 
          dispatch(signIn({ userData }));
          dispatch(closeEntry())
          navigate("/");
      }
    } catch (error) {
      console.log(error.message)
      setErrorMsg(error.message)
    } 
  };

  // const watchFields = watch(['password', 'cpassword', 'birthdate', 'birthmonth']);

  useEffect(() => {  
    const subscription = watch((value) => {
      const { cpassword, password,birthmonth,name,lastName } = value;
      cpassword.length ? setPword(cpassword !== password) : setPword(false); 
      
      const numDays = daysInMonth[birthmonth.toLowerCase()];
      setBirthday((b) => ({ ...b, day: days(numDays) }));

      const focusPassword = password.length;
      console.log(name.length)

      if (focusPassword && password.length < 8) { 
        setPValid('password must be at least 8 characters')
      } else if (focusPassword && !specialChars(password)) { 
        setPValid('special character must be present')
      } else if (focusPassword && !hasNumber(password)) { 
        setPValid('password must include a number')
      } else { 
        setPValid(' ')
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);


    return (
      
      <section className='bg-[var(--pry-col)] h-[80%] overflow-scroll flex flex-col absolute bottom-0 w-full p-4'>
      <p>Join the Team</p>
      <p>Create and account and never miss another <b>1800</b> event near you. Explore, make new friends, and start #DoingThings. We can’t wait to see you out there! </p>
        <p>Already have an account? <small className="underline" onClick={()=> dispatch(showEntry(id))}>Sign In</small></p>
        
        <p>{errorMsg}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
      
          <Input label='First Name' type="text" {...register('name', { required: true, maxLength: 20})} placeholder='text should not be more than 20 characters'/> 
          {/* {errors.firstName && errors.firstName.type === "required" && <span>This is required</span>}
          {errors.firstName && errors.firstName.type === "maxLength" && <span>Max length exceeded</span> } */}
          <Input label='Last Name' type="text" {...register('lastName', { required: true, maxLength: 20 })} placeholder='text should not be more than 20 characters' />
          <Input label='Email' type="email" {...register('email',{ required: true})} />
          <Input label='Password' type="password" placeholder='Password must be at least 8 characters' {...register('password', { required: true })} />
          <p className="h-4">{pvalid}</p>
          <Input label='Confirm Password' type="password"  {...register("cpassword", { required: true })} />
          {pword && <p className="-mt-2">Passwords do not match</p>}
          <section className="flex">
          <Input type="radio" className="w-28 h-8 self-center" {...register('radio')} /> <p className="m-1">{radioText}</p>
          </section> 
          <Select type='signup' options={shopFilter} label='Shopping For' styles={'w-full'}  />
          <div>
            <p>Birthday</p>
            <section className="flex w-full">  
              <Select styles={'w-[95%]'} type='birthday' options={month} {...register('birthmonth',{ required: true })} /><Select type='birthday' styles={'w-[95%]'} options={day} {...register('birthdate',{ required: true })} />
            </section>
          </div>
          <Button type='submit' styles={"font-medium text-[var(--white)] bg-[var(--black)] w-[65%] rounded-[24px] h-[48px] px-[36px] hover:bg-[var(--pry-col)] transition-all duration-300"}>Create Account</Button>
        </form>
        <p className="mt-4">By creating an account, I agree to the Terms of Use and acknowledge that I have read the  Privacy Policy.</p>
      </section>
  )
}

export default SignUp