import { useSelector } from "react-redux";
import { format } from "@utils/format/format";

function CheckoutItems() {
  const cart = useSelector((state) => state.cart.products);

  const groupedCartItems = cart.reduce((acc, item) => {
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
                &#8358; {format(item.price)}
              </span>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default CheckoutItems;
