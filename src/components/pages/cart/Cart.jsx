import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addValue,
  reduceValue,
  removeFromCart,
} from "../../../store/cartSlice";
import { format } from "../../../utils/format/format";
import Button from "../../reusables/button/Button";
import DeleteIcon from "./../../../assets/Icons/DeleteIcon";
import EmptyCart from "./../../../assets/Images/EmptyCart";
import Delivery from "./../../delivery/Delivery";
import CartContent from "./CartContent";

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  function cartDisplay() {
    return cart?.length ? (
      cart.map((data) => {
        const { images, name, type, quantity, price } =
          data;
        const image = images[0].fields.file.url;
        const totalPrice = price * quantity;

        return (
          <section
            key={name}
            className="flex gap-x-4 justify-between w-[100%] h-[100%] py-4 border-b border-solid border-[grey]"
          >
            <figure className="w-[40%] h-auto bg-[#9ca3af26]">
              <img
                src={image}
                alt={type}
                loading="lazy"
                className="size-full object-contain"
              />
            </figure>
            <section className=" flex flex-col justify-between w-[100px] gap-y-1">
              <p className="text-[.8rem] font-medium truncate">
                {name}
              </p>
                <Button styles={"text-[.8rem] font-medium bg-[#53caec4d] px-1 py-[.1rem] text-[#044b60] rounded w-14"}>
                  In Stock
                </Button>
              <Link className="block text-[.8rem] font-medium">
                {data.type}
              </Link>
              <p
                className="flex items-center gap-x-1 text-[.8rem] font-medium mt-4 cursor-pointer"
                onClick={() => {
                  dispatch(removeFromCart(data));
                }}
              >
                {" "}
                <DeleteIcon /> Remove
              </p>
            </section>
            <section className="flex flex-col justify-between w-[130px]">
              <p className="ml-auto text-right text-[.65rem] font-medium">
                &#8358; {format(totalPrice)}
              </p>
              <section className="flex justify-end">
                <Button styles={`flex items-center justify-center border border-r-0 size-5 ${
                    quantity <= 1 ? "opacity-40" : ""
                  }`}
                  onClick={() => { 
                    if (quantity > 1) {
                      dispatch(reduceValue(data));
                    }
                }}
                >
          -
                </Button>
                <p className="flex justify-center items-center text-center text-[.65rem]   border px-2 opacity-50 size-5">
                  {quantity}
                </p>
                <Button styles={`flex items-center justify-center border-l-0 border size-5 ${quantity === 10 ? 'opacity-40' : ''}`}   onClick={() => {
                  if (quantity < 10) { 
                  dispatch(addValue(data));
                  } else { 
                    console.log('Out of Stock!')
                    //notifications to let the  user know we are out of stock
                  }
                  
                  }}>
                  +
                </Button>
              </section>
            </section>
          </section>
        );
      })
    ) : (
      <aside className="flex flex-col items-center justify-center">
        <EmptyCart size="size-[15em]" />
        <p className="italic text-center">
          You have no items in your shopping cart. <br />{" "}
          Let&apos;s go buy something
        </p>
        <Link to="/products" className="mt-6">
            <Button styles={"w-36 h-9 bg-[var(--pry-col)] rounded-[8px]"} >
            Start Shopping
            </Button>
        </Link>
      </aside>
    );
  }

  return (
    <>
      <div className="mt-4 mx-4">
        <h2 className="font-bold p-4 text-[24px][">
          {cart.length ? 'Your Basket' : null}
        </h2>
        <section className="flex flex-col w-full px-4 py-2  mx-auto bg-[var(--white)] min-h-[400px]">
          {cartDisplay()}
          <CartContent />
        </section>
      </div>
      <Delivery />
    </>
  );
};

export default Cart;