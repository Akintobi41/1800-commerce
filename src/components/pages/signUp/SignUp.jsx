import { useOverflow } from "../../../contexts"
import { useForm } from "react-hook-form"
import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";
import Select from "../../reusables/select/Select";
import { shopFilter } from "../../../utils/text/text";
import { radioText } from "../../../utils/text/text";


function SignUp({ id }) {
  // const { account, setAccount } = useOverflow();
  const { register, handleSubmit, watch, formState } = useForm()
  const { errors } = formState;

  const onSubmit = (data) => { 
    console.log(data)
    console.log(errors)
  }

    return (
      
      <section className='bg-red-300 h-[80%] overflow-scroll flex flex-col absolute bottom-0 w-full p-4'>
      <p>Join the Team</p>
      <p>Create and account and never miss another <b>1800</b> event near you. Explore, make new friends, and start #DoingThings. We can’t wait to see you out there! </p>
     <p>Already have an account? <small className="underline" onClick={id}>Sign In</small></p>
       
    
        
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      
          <Input label='First Name' type="text" className="w-full" {...register('firstName')} />
         
          
          <Input label='Last Name' type="text" className="w-full" {...register('lastName')} />
          <Input label='Email' type="email" className="w-full" {...register('email')} />
          <Input label='Password' type="password" className="w-full" {...register('password')} />
          <Input label='Password' type="password" className="w-full" {...register('password')} />
          <section className="flex">
          <Input type="radio" className="w-28 h-8 self-center" {...register('radio')} /> <p className="m-1">{radioText}</p>
          </section> 
          <Select type='signup' options={shopFilter} label='Shopping For' styles={'w-full'} />
          <div>
            <p>Birthday</p>
            <section className="flex w-full">  
              <Select styles={ 'w-[95%]'} /><Select styles={'w-[95%]'}/>
            </section>
          </div>
          <Button type='submit' styles={"font-medium text-[var(--white)] bg-[var(--black)] w-[65%] rounded-[24px] h-[48px] px-[36px] hover:bg-[var(--pry-col)] transition-all duration-300"}>Create Account</Button>
        </form>
        <p className="mt-4">By creating an account, I agree to the Terms of Use and acknowledge that I have read the  Privacy Policy.</p>
     {/* <p>Don&apos;t have an account? <small className="underline" onClick={id}>Create Account</small></p> */}
    </section>
  )
}

export default SignUp