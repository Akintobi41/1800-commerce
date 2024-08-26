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
export const days = (val = 30) => {
    return [...Array(val).keys()].map(x => ++x);
}
export const daysInMonth = {
    january: 31, february: 29, march: 31, april: 30, may: 31, june: 30,
    july: 31, august: 31, september: 30, october: 31, november: 30, december: 31
};

export const aboutText = `${`Welcome to 1800 Store, where tradition meets innovation. As a family-owned enterprise, we've weathered the e-commerce landscape's ever-changing tides, witnessing trends come and go. Our journey through the digital marketplace has been a source of inspiration, enabling us to continually evolve and adapt. Over the years, we've embraced and incorporated the best of these trends into our business, always seeking to provide you with the finest products and services. Our commitment to quality, customer satisfaction, and a deep-rooted sense of responsibility to our community is unwavering.

At 1800 Store, we believe in the power of heritage and the importance of moving forward. Our roots run deep, yet our vision is always set on the future. This dual focus allows us to offer a unique blend of classic charm and modern convenience. Each product we offer is carefully curated to reflect our values of excellence, sustainability, and authenticity.

We take pride in fostering strong relationships with our customers, treating each interaction as an opportunity to build trust and loyalty. Our dedicated team works tirelessly to ensure that your shopping experience is seamless and enjoyable, from browsing our extensive catalog to the moment your order arrives at your doorstep.

In a world where digital transformation is constant, we remain steadfast in our mission to bring you exceptional value without compromising our core principles. Our story is one of resilience, passion, and a relentless pursuit of excellence. Thank you for being part of our journey, and we look forward to serving you with the same dedication and care that has defined 1800 Store for generations.`}`

export const msg = 'A user with the same id, email, or phone already exists in this project.'
export const userMsg = 'Email address has been used to sign up previously'