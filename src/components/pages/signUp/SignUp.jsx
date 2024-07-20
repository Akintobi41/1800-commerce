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
  const [fName, setFName] = useState(false);
  const [lName, setLName] = useState(false);



  function specialChars(val) { 
  return (/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/).test(val)
  }
  function hasNumber(val) {
    return /\d/.test(val);
  }
 
  console.log(errors);

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

      //Name Validation 
      setFName(name.length && name.length > 20);
      setLName(lastName.length && lastName.length > 20)

      //Password Validation
      const focusPassword = password.length;
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
      
      <section className='bg-[#fff] h-[80%] overflow-scroll flex flex-col absolute bottom-0 w-full p-4'>
      <p className="text-[2.35rem] font-bold mb-8">Join the Team</p>
      <p className="mt-2 leading-7">Create and account and never miss another <b>1800</b> event near you. Explore, make new friends, and start #DoingThings. We can’t wait to see you out there! </p>
      <p className="my-5">Already have an account? <small className="underline cursor-pointer ml-1" onClick={()=> dispatch(showEntry(id))}>Sign In</small></p>  
      <p>{errorMsg}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 text-[.8rem]">
      
          <Input label='First Name' type="text" styles={`px-[12px] ${fName ? 'rounded border-[1px] border-[red]' : ''}`} {...register('name', { required: true, maxLength: 20})} placeholder='name should not be more than 20 characters'/> 
          <Input label='Last Name' type="text"styles={`px-[12px] ${lName ? 'rounded border-[1px] border-[red]' : ''}`} {...register('lastName', { required: true, maxLength: 20 })} placeholder='name should not be more than 20 characters' />
          <Input label='Email' type="email" styles='px-[12px]' {...register('email',{ required: true})} />
          <Input label='Password' type="password" styles='px-[12px]' placeholder='Password must be at least 8 characters' {...register('password', { required: true })} />
          <p className="h-4">{pvalid}</p>
          <Input label='Confirm Password' styles='px-[12px]' type="password"  {...register("cpassword", { required: true , validate: (val) => {
         if (watch('password') != val) {
         return "Your passwords do no match";
         }
        },})} />
          {pword && <p className="-mt-2">Passwords do not match</p>}
          <section className="flex items-center">
          <Input type="checkbox" className="relative flex justify-center items-center size-7 self-center rounded-[50%] appearance-none border-[2px] border-solid border-[var(--black)] checked:before:bg-[var(--pry-col)] before:transition-all before:duration-300  before:block before:absolute  before:content-[''] before:size-[1.15rem] before:rounded-[50%] " {...register('signUp',{required:true})} /> <p className="m-1">{radioText}</p>
          </section> 
          <Select type='signup' options={shopFilter} label='Shopping For' styles={'w-full h-[48px]'}  />
          <section>
            <p>Birthday</p>
            <section className="flex w-full">  
              <Select styles={'w-[95%] h-[48px]'} type='birthday' options={month} {...register('birthmonth',{ required: true })}/><Select type='birthday' styles={'w-[95%] h-[48px]'} options={day} {...register('birthdate',{ required: true })} />
            </section>
          </section>
          <Button type='submit' styles={"font-medium text-[var(--white)] bg-[var(--black)] w-[65%] rounded-[24px] h-[48px] px-[24px] hover:bg-[var(--pry-col)] transition-all duration-300"}>Create Account</Button>
        </form>
        <p className="mt-4">By creating an account, I agree to the Terms of Use and acknowledge that I have read the  Privacy Policy.</p>
      </section>
  )
}

export default SignUp