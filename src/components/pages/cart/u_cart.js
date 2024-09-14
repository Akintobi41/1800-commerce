import { format } from "../../../utils/format/format";

export function totalValues(val,fee,total,vat) { 
    if (val === 'Subtotal') return format(total)
    if(val === 'Shipping') return format(fee) 
    if (val === 'VAT(5%)') return format(vat) 
}

export const getButtonProps = (quantity) => {
    if (quantity > 9) {
      return {
        text: 'Out of Stock',
        style: 'bg-red-500 text-[var(--white)] opacity-40'
      };
    } else if (quantity > 6) {
      return {
        text: 'Low Stock',
        style: 'bg-red-500 text-[var(--white)]'
      };
    } else {
      return {
        text: 'Available',
        style: 'bg-[#53caec4d] text-[#044b60]'
      };
    }
  };
  
