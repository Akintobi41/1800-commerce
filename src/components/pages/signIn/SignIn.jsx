import Button from "../../reusables/button/Button";
import Input from "../../reusables/input/Input";

function SignIn({id}) {
  return (
    <section className='bg-red-300 h-[65%] flex flex-col absolute bottom-0 w-full p-4'>
      <p>Sign In</p>
      <p>Sign in to access your account or add items to your cart.</p>

      <form action="">
      <label htmlFor="">
          Email:  <br/>
          <Input type="email" className="w-full" />
         </label> <label htmlFor="" className="block mt-4">
          Password:  <br/>
          <Input type="email" className="w-full" />
        </label>   
        <Button styles={"text-[var(--white)] bg-[var(--black)]"}>Sign In</Button>
      </form>
     <p>Don&apos;t have an account? <small className="underline" onClick={id}>Create Account</small></p>
    </section>
  )
}
export default SignIn