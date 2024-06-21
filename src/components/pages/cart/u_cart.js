import { format } from "../../../utils/format/format";

export function totalValues(val,fee,total,vat) { 
    if (val === 'Subtotal') return format(total)
    if(val === 'Shipping') return format(fee) 
    if (val === 'VAT(5%)') return format(vat) 
}
