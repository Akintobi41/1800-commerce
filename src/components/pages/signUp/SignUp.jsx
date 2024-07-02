import { useOverflow } from "../../../contexts"
import { useForm } from "react-hook-form"
import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";


function SignUp({ id }) {
  // const { account, setAccount } = useOverflow();
  const { register, handleSubmit, watch, formState } = useForm()
  const { errors } = formState;

  const onSubmit = (data) => { 
    console.log(data)
    console.log(errors)
  }

    return (
      
      <section className='bg-red-300 h-[65%] flex flex-col absolute bottom-0 w-full p-4'>
      <p>Join the Team</p>
      <p>Create and account and never miss another <b>1800</b> event near you. Explore, make new friends, and start #DoingThings. We can’t wait to see you out there! </p>
     <p>Already have an account? <small className="underline" onClick={id}>Sign In</small></p>
       
    
        
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      
          <Input label='First Name' type="text" className="w-full" {...register('email')} />
         
          
          <Input label='Last Name' type="text" className="w-full" {...register('password')} />
          <Input label='Email' type="email" className="w-full" {...register('password')} />
          <Input label='Password' type="password" className="w-full" {...register('password')} />
          <Input label='Password' type="password" className="w-full" {...register('password')} />
          <Input type="radio" className="w-full" {...register('password')} />
           
          <Button type='submit' styles={"text-[var(--white)] bg-[var(--black)]"}>Sign In</Button>
      </form>
     <p>Don&apos;t have an account? <small className="underline" onClick={id}>Create Account</small></p>
    </section>
  )
}

export default SignUp