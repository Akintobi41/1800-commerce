export function format(num:number) { 
    return num.toLocaleString(undefined, {
       minimumFractionDigits: 2,
       maximumFractionDigits: 2,
     });
   }