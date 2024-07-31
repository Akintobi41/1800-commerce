export const sort = [
    "None",
    "Alphabetically: A-Z",
    "Alphabetically: Z-A",
    "Price: Low to High",
    "Price: High to Low",
];
export const filter = ['None', 'Shoe', 'Fragrance', 'Watch', 'Bag'];
export const shopFilter = ['Women', 'Men', 'Both']
export const radioText = 'Sign up for exclusive Team 1800-only deals and receive a special offer on your birthday and early access to new product.';
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const days = (val =30) => {
    return [...Array(val).keys()].map(x => ++x);
}
export const daysInMonth = {
    january: 31, february: 29, march: 31, april: 30, may: 31, june: 30,
    july: 31, august: 31, september: 30, october: 31, november: 30, december: 31
  };