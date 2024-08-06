import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "./../../reusables/input/Input";
import Button from "../../reusables/button/Button";
import { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import useCart from "../../../hooks/useCart";
import { useNavigate } from "react-router";
import { clearCart } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";
import { format } from "../../../utils/format/format";
import PopUp from './../../popup/PopUp';


function Checkout() {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.products);
  const { cartTotal } =
  useCart(cart)
  const [next, setNext] = useState(false);
  const publicKey = "pk_test_7a2adf6b19c82a86521fc2277348355f2f16bc79"
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const amount = cartTotal * 100;
  const { register, handleSubmit, formState } =
    useForm();
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const [errors,setErrors] = useState(false)

  console.log(formState);

  const shipProduct = ({ name, email, phoneNumber }) => {
    setErrors(false)
    setSubmit(false)
    setName(name);
    setEmail(email);
    setPhone(phoneNumber);
    setNext(true)
  };

  function approved() { 
    dispatch(clearCart())
    navigate('/')
}

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => approved(),
    onClose: () => close(),
  }



  return (
    <section className="mt-28 p-4 min-h-[500px]">
      <PopUp text='Some fields are empty/ incorrect' isVisible={errors} setIsVisible={setErrors}/>
      {!next ? 
        <>
          <p className="font-bold text-center lg:text-[25px] mb-4">Shipping Address</p>

          <form
            action=""
            onSubmit={handleSubmit(shipProduct)}
            className="flex flex-col gap-y-4 max-w-[700px] mx-auto"
          >
            <Input
              label="Full Name: "
              {...register("name", {
                required: true,
                maxLength: 30,
              })}
              minLength="3"
              border='border-b-[1px]'
              height='h-8'
              styles='text-[.8rem] px-2'
            />
            <Input
              label="Email"
              {...register("email", { required: true })}
              border='border-b-[1px]'
              styles='text-[.8rem] px-2'
              height='h-8'

            />
            <Input
              label="Home Address"
              {...register("address", { required: true })}
              border='border-b-[1px]'
              styles='text-[.8rem] px-2'
              height='h-8'

            />
            <Input
              label="City"
              {...register("city", {
                required: true,
                min: 3,
              })}
              minLength="3"
              border='border-b-[1px]'
              styles='text-[.8rem] px-2'
              height='h-8'

            />
            <Input
              label="State"
              {...register("state", {
                required: true,
                min: 3,
              })}
              minLength="3"
              border='border-b-[1px]'
              styles='text-[.8rem] px-2'
              height='h-8'

            />
            <Input
              label="Country"
              {...register("country", {
                required: true,
                min: 3,
              })}
              minLength="3"
              border='border-b-[1px]'
              styles='text-[.8rem] px-2'
              height='h-8'

            />
            <Input
              label="PhoneNumber"
              {...register("phoneNumber", {
                required: true,
              })}
              minLength="10"
              maxLength='15'
              border='border-b-[1px]'
              styles='text-[.8rem] px-2'
              height='h-8'

            />

            <Button styles={`bg-[var(--black)] text-[var(--white)] w-[8rem] rounded hover:bg-[var(--pry-col)] transition-colors duration-500 ${submit ? 'opacity-40' : '' }`} onClick={()=> setErrors(true)}>{!submit ? 'Submit' : 'Doing Things'} </Button>
          </form>
        </> : <section>  

          <div> 

          <div className="App">
  <div className="max-w-[1500px] mx-auto">
    <div className="item">
                  <div className="overlay-effect"></div>
                  <p className="text-[.8rem] cursor-pointer" onClick={()=> setNext(false)}> Back to Shipping</p>
                  <p className='font-bold my-4'>Order Deatails</p>
      {cart.map((item)=>  (
       <section className='flex gap-x-2'><p>{item.name + ' ' + item.type} </p> <p className='font-semibold'>X{item.quantity}</p></section> 
      ))}
                  <div className="flex flex-col gap-2">
      </div>
    </div>
    <div className="mt-4">
      <div className="checkout-form">
        p
        <div className="checkout-field">
                      <p>{ name}</p>
        </div>
        <div className="checkout-field">
                      <p>{ email}</p>
        </div>
        <div className="checkout-field">
                      <label>{phone}</label>
        </div>
        <p className="mb-4">NGN {format(amount / 100)}</p>

      </div>
                </div>
         <PaystackButton {...componentProps} className="mt-4 w-[7rem] rounded bg-[var(--black)] text-[var(--white)] hover:bg-[var(--pry-col)]" />
  </div>
</div>
          </div>
        </section>
      }
    </section>
  );
}
export default Checkout;
