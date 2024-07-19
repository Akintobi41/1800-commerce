import { useDispatch } from "react-redux";
import { showEntry,closeEntry } from "../../../store/accountSlice";
import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";
import { useForm } from "react-hook-form";
import authService from "../../../appwrite/auth/auth";
import { signIn } from "../../../store/loginSlice";
import { useNavigate } from "react-router";

function SignIn({ id }) {
  const { register, handleSubmit, watch, formState } = useForm()
  const { errors } = formState;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onSubmit = async (data) => { 
    const userData = data
    console.log(userData)
   try {
     const user = await authService.login({...userData});
      console.log(user)
     if (user) { 
       dispatch(signIn({ userData }));
       dispatch(closeEntry())
          navigate("/");
     }
   } catch (error) {
    console.log(error)
   }
    
  }


  return (
    <section className='bg-[var(--pry-col)] h-[65%] flex flex-col absolute bottom-0 w-full p-4'>
      <p>Sign In</p>
      <p>Sign in to access your account or add items to your cart.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">
          Email:  <br/>
          <Input type="email" className="w-full" {...register('email',{required:true})} />
         </label> <label htmlFor="" className="block mt-4">
          Password:  <br/>
          <Input type="password" className="w-full" {...register('password')} />
        </label>   
        <Button type='submit' styles={"text-[var(--white)] bg-[var(--black)]"}>Sign In</Button>
      </form>
     <p>Don&apos;t have an account? <small className="underline cursor-pointer" onClick={()=> dispatch(showEntry(id))}>Create Account</small></p>
    </section>
  )
}
export default SignIn