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
  const { errors } = formState;
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account, setAccount } = useOverflow();
  const [enabled,setEnabled] = useState(false)



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

  const watchFields = watch(['password', 'cpassword', 'birthdate', 'birthmonth']);

  useEffect(() => {  
    const subscription = watch((value) => {

      const { cpassword, password,birthmonth,birthdate } = value;
      if (cpassword !== password) { 
        console.log(false) // passwords do not match
      }
      else {
        console.log(true)
      }

      const numDays = daysInMonth[birthmonth.toLowerCase()];
      setBirthday((b) => ({ ...b, day: days(numDays) }));

    });
    return () => subscription.unsubscribe();
  }, [watch]);


    return (
      
      <section className='bg-red-300 h-[80%] overflow-scroll flex flex-col absolute bottom-0 w-full p-4'>
      <p>Join the Team</p>
      <p>Create and account and never miss another <b>1800</b> event near you. Explore, make new friends, and start #DoingThings. We can’t wait to see you out there! </p>
        <p>Already have an account? <small className="underline" onClick={()=> dispatch(showEntry(id))}>Sign In</small></p>
        
        <p>{errorMsg}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      
          <Input label='First Name' type="text" className="w-full" {...register('name', { required: true, maxLength: 30})} /> 
          {/* {errors.firstName && errors.firstName.type === "required" && <span>This is required</span>}
          {errors.firstName && errors.firstName.type === "maxLength" && <span>Max length exceeded</span> } */}
          <Input label='Last Name' type="text" className="w-full" {...register('lastName', { required: true, maxLength: 30 })} />
          <Input label='Email' type="email" className="w-full" {...register('email',{ required: true})} />
          <Input label='Password' type="password" className="w-full" {...register('password',{ required: true })} />
          <Input label='Confirm Password' type="password" className="w-full" {...register("cpassword", {required: true})} />
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