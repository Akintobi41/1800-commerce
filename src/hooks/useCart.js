import { format } from "../utils/format/Format";

const useCart = (cart) => {
    const cartText = ['Subtotal', 'Shipping', 'VAT(5%)'];
    const total = cart.map((item) => item.quantity * item.price).reduce((first, second) => first + second, 0);
    const VAT = ((total * 5) / 100);
    const checkShipping = total > 1000000;
    const shipFee = checkShipping ? 0 : 3000;
    const cartTotal = format(total + shipFee + VAT);

    return { cartText, total, VAT, checkShipping, shipFee, cartTotal }
}

export default useCart