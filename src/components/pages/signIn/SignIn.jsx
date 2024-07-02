import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";
import { useForm } from "react-hook-form";

function SignIn({ id }) {
  const { register, handleSubmit, watch, formState } = useForm()
  const { errors } = formState;

  const onSubmit = (data) => { 
    console.log(data)
    console.log(errors)
  }

  return (
    <section className='bg-red-300 h-[65%] flex flex-col absolute bottom-0 w-full p-4'>
      <p>Sign In</p>
      <p>Sign in to access your account or add items to your cart.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">
          Email:  <br/>
          <Input type="email" className="w-full" {...register('email')} />
         </label> <label htmlFor="" className="block mt-4">
          Password:  <br/>
          <Input type="password" className="w-full" {...register('password')} />
        </label>   
        <Button type='submit' styles={"text-[var(--white)] bg-[var(--black)]"}>Sign In</Button>
      </form>
     <p>Don&apos;t have an account? <small className="underline" onClick={id}>Create Account</small></p>
    </section>
  )
}
export default SignIn