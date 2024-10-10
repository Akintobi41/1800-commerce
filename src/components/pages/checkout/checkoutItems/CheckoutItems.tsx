import { format } from "@utils/format/format";
import { cartData } from "@store/cartSlice";
import { useAppSelector } from "@hooks/useAppStore";
import { CartItem } from "@src/tsTypes/react-types";


interface GroupedCart {
  [key: string]: CartItem[]; 
}

function CheckoutItems() {
  const cart = useAppSelector(cartData);

  const groupedCartItems = cart.reduce<GroupedCart>((acc, item) => {
    const typeKey = item.type.trim().toLowerCase();
    
    if (!acc[typeKey]) {
      acc[typeKey] = [];
    }
    acc[typeKey].push(item);
    return acc;
  }, {});


  return (
    <div>
      {Object.keys(groupedCartItems).map((type) => (
        <section key={type} className="my-8">
          <p className="font-bold my-2 capitalize">
            {type}
          </p>
          {groupedCartItems[type].map((item) => (
            <div
              key={item.name}
              className="flex gap-x-2 text-sm"
            >
              <p className="w-24 sm:w-1/2 mb-2 truncate text-ellipsis">
                {item.name}
              </p>
              <p className="ml-4 font-semibold truncate text-ellipsis">
                {item.quantity === 1
                  ? "1 item"
                  : `${item.quantity} items`}
              </p>
              <span className="ml-4 truncate text-ellipsis">
                &#8358; {format(item.price)} per item
              </span>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default CheckoutItems;
