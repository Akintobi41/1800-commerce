
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addValue,reduceValue } from '../../../store/cartSlice';


const Cart = () => {

  const cart = useSelector((state) => state.cart.products)

  const dispatch = useDispatch();

  function cartDisplay() {

    return cart?.length ? ( cart.map((data) => {
      const image = data.images[0].fields.file.url
      return (
        <section key={data.name} className='flex gap-x-3 w-[100%] h-[100%] py-4 border-b border-solid border-[grey]'>
          <section className='w-[33%] h-[33%] p-2 bg-[#9ca3af26]'>
            <img src={image} alt="" loading='lazy' className='w-[100%] h-[100%]'/>
          </section>
          <section className=''>
          <p className='text-[.8rem] font-medium'>{data.name}</p>
          <p className='text-[.8rem] font-medium'>{data.type}</p>
          <p className='text-[.8rem] font-medium mt-4 ml-4'>Remove</p>
            
          
          </section>
          <section className='flex flex-1 flex-col'>
            <p className='flex-1 text-right text-[.8rem] font-medium'>&#8358; {data.price.toLocaleString()}</p>
            <section className='flex justify-end'>
              <button className='border border-r-0 px-2' onClick={() => { 
                if (data.quantity > 1) { 
                  dispatch(reduceValue(data))
                }
            }}>-</button>
              <p className='flex text-center border px-2 opacity-50'>{data.quantity}</p>
              <button className='border-l-0 border px-2' onClick={() => { 
                dispatch(addValue(data))
            }}>+</button> 
          </section>
           
          </section>
        </section>
      ) 
    })) : <>
          <aside  className='w-full border-t'>
      Subtotal : 
    </aside>
    <p>Nothing in your cart yet</p>
   <Link to='/products'><button> Start Shopping</button></Link> 
    </>
  }


  return (<section className='flex flex-col items-center w-full px-4 py-2 mt-24 mx-auto bg-[var(--white)]'>
        { cartDisplay() }
  </section >
  )
};

export default Cart;

// What is needed to be done here?
// Just work on the values , the images manipulation is for the product details component.



//commit messages

// updated redux reducers,cart functionality, add more products to cart, remove products from cart and aslo cart layout 