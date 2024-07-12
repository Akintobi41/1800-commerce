import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchData } from "../../../contentful/contentful";
import ImageSwiper from "../../imageSwiper/ImageSwiper";
import { useQuery, useQueryClient } from "react-query";
import Button from "../../reusables/button/Button";
import LoadingAnimation from "../../loadingAnimation/Loader";
import { useSelector } from "react-redux";

function ProductDetail() {
  const { id } = useParams();
  const cart = useSelector(
    (state) => state.cart.products
  );
  console.log(cart)
  const getProduct = async function () {
    return await fetchData(id).then((data) => data)
    
  };
 

  const { data, isLoading } = useQuery('product', getProduct);

  function displayProduct() { 

    if (data) { 
      const { images, name, description, price } = data.fields;
      const checkProduct = [...cart].some(
        (item) => item.name === name
      )
      console.log(checkProduct)
      return ( 
        <>
        <section>
          <ImageSwiper images={images} />
          <section className="flex w-full h-full justify-around px-4">
            {images.map((img) => (
                <img src={img.fields.file.url} alt="" className="w-[24%] h-[4.5rem] cursor-pointer bg-[#cbd5e140] mr-[.25rem]" key={img.fields.file.url}/>
            ))}
          </section>
            <p className="text-[1.25rem] font-bold p-4">{name} </p>
            <details className="mx-4 cursor-pointer transition-all duration-500">
            <p className="px-4 text-[.8rem]">{ description} </p>

            </details>
            <p className="p-4 text-center text-[.8rem] text-[#737373] tracking-[-.653px]"> Earn up to 64 points with 1800 Rewards</p>
          </section>
          <section className="px-4 w-full">
          <Button styles={`${checkProduct ? 'opacity-10 cursor-not-allowed pointer-events-none' : ''} w-full bg-[var(--black)] text-[var(--white)] hover:bg-[var(--pry-col)] h-[3rem] rounded-[24px] font-semibold cursor-pointer px-6 transition-[background] duration-[.5s]`} disabled={checkProduct}>
              {checkProduct ? 'Added to Bag' :  <span className="text-[var(--white)]">Add to Bag<span className="ml-1 text-[inherit]"> &#8358;{price.toLocaleString()}</span> </span>  }
          </Button>
          </section>
        </>
      )
    }    
  }
  console.log(data?.length)
  console.log(Object.keys(data || {}).length)

  return (
    <section className="overflow-x-hidden">
      {displayProduct()}
      {isLoading  ? <section className="w-full h-[80vh] flex items-center justify-center">
        <LoadingAnimation />
      </section> : <p className="">Unable to fetch product details</p> }
    </section>
  );
}
export default ProductDetail;
