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
export const days = (val:number = 30):number[] => {
    return [...Array(val).keys()].map(x => ++x);
}

type MonthDays = {
    [key: string]: number; 
};
export const daysInMonth:MonthDays = {
    january: 31, february: 29, march: 31, april: 30, may: 31, june: 30,
    july: 31, august: 31, september: 30, october: 31, november: 30, december: 31
};

export const aboutText = `${`Welcome to 1800 Store, where tradition meets innovation. As a family-owned enterprise, we've weathered the e-commerce landscape's ever-changing tides, witnessing trends come and go. Our journey through the digital marketplace has been a source of inspiration, enabling us to continually evolve and adapt. Over the years, we've embraced and incorporated the best of these trends into our business, always seeking to provide you with the finest products and services. Our commitment to quality, customer satisfaction, and a deep-rooted sense of responsibility to our community is unwavering.

At 1800 Store, we believe in the power of heritage and the importance of moving forward. Our roots run deep, yet our vision is always set on the future. This dual focus allows us to offer a unique blend of classic charm and modern convenience. Each product we offer is carefully curated to reflect our values of excellence, sustainability, and authenticity.

We take pride in fostering strong relationships with our customers, treating each interaction as an opportunity to build trust and loyalty. Our dedicated team works tirelessly to ensure that your shopping experience is seamless and enjoyable, from browsing our extensive catalog to the moment your order arrives at your doorstep.

In a world where digital transformation is constant, we remain steadfast in our mission to bring you exceptional value without compromising our core principles. Our story is one of resilience, passion, and a relentless pursuit of excellence. Thank you for being part of our journey, and we look forward to serving you with the same dedication and care that has defined 1800 Store for generations.`}`

export const msg = 'A user with the same id, email, or phone already exists in this project.';
export const userMsg = 'Email address has been used to sign up previously';
export const msg2 = "Creation of a session is prohibited when a session is active.";
export const userMsg2 = "It looks like you're already logged in. Kindly refresh the page to continue or log out if you'd like to start a new session.";
export const msg3 = 'Failed to fetch'
export const userMsg3 = 'An error occurred. Kindly check network connection and try again.'


type Message = {
    [key: string]: string; 
};
export const messageMap:Message = {
    [msg]: userMsg,
    [msg2]: userMsg2,
    [msg3]: userMsg3
};

export const faqContent = [
    {
        id: 1,
        title: "What Types of Shoes Do You Sell?",
        text: "We sell a wide range of shoes, including formal shoes, casual shoes, sneakers, sandals, boots, and more. Our shoes come in a variety of styles, materials, and sizes to suit different tastes and preferences.",
    },
    {
        id: 2,
        title: `Do You Offer Bags And Belts To Match Your Shoes?`,
        text: `Yes, we offer a variety of bags and belts that are designed to complement our shoes. Our bags and belts come in different colors, styles, and materials, so you can find the perfect match for your outfit.`,
    },
    {
        id: 3,
        title: `What Materials Are Your Shoes Made Of?`,
        text: `Our shoes are made of high-quality materials such as leather, suede, canvas, and synthetic materials. We source our materials responsibly and ensure that they are of the highest quality.`,
    },
    {
        id: 4,
        title: `How do I know what size to order?`,
        text: `We provide a sizing chart on our website that can help you determine the correct size to order. If you're unsure about your size, we recommend visiting one of our stores to try on different sizes and styles.`,
    },
    {
        id: 5,
        title: `What payment methods do you accept?`,
        text: `We accept various payment methods, including credit cards, debit cards, and PayPal. You can choose the payment method that is most convenient for you.`,
    },
    {
        id: 6,
        title: `Do you offer free shipping?`,
        text: `Yes, we offer free shipping on all orders above a certain amount. We also offer free returns and exchanges to ensure that our customers are completely satisfied with their purchases.`,
    },
    {
        id: 7,
        title: `Can I return or exchange my purchase if I'm not satisfied?`,
        text: `Yes, we have a hassle-free return and exchange policy. If you're not completely satisfied with your purchase, you can return or exchange it within a certain timeframe`,
    },
    {
        id: 8,
        title: `How often do you release new styles?`,
        text: `We release new styles regularly, depending on the season and fashion trends. We keep up-to-date with the latest styles and designs to ensure that our customers have access to the latest fashion trends.`,
    },
    {
        id: 9,
        title: ` Do you offer discounts for bulk purchases?`,
        text: `Yes, we offer discounts for bulk purchases. If you're interested in purchasing a large quantity of shoes, belts, or bags, please contact us to discuss pricing options.`,
    }, {
        id: 10,
        title: ` Are your products sustainable and ethically made?`,
        text: `Yes, we take our social responsibility seriously and strive to operate our business in an ethical and sustainable manner. We source our materials responsibly, and we ensure that our products are made under fair labor conditions. We believe in supporting ethical and sustainable practices in the fashion industry.`,
    },
];

export const accordionContent = [
    {
        id: 1,
        title: "Quality",
        text: "Our products are made with high-quality materials, ensuring that they are durable and long-lasting. We take pride in the craftsmanship of our products and strive to provide our customers with the best possible quality.",
    },
    {
        id: 2,
        title: `Variety`,
        text: `We offer a wide range of products to cater to different styles and preferences. Whether you're looking for formal shoes, casual shoes, sneakers, or sandals, we have something for everyone. We also have a variety of belts and bags to complement your footwear.`,
    },
    {
        id: 3,
        title: `Style`,
        text: `Our products are designed with the latest fashion trends in mind, ensuring that you'll look stylish and trendy when you wear them. We keep up-to-date with the latest styles and designs, so you can be sure that you'll always find something fashionable in our store.`,
    },
    {
        id: 4,
        title: `Comfort`,
        text: `We understand that comfort is just as important as style, which is why we offer products that are both comfortable and stylish. Our shoes are designed to provide excellent support and cushioning, so you can wear them for extended periods without experiencing any discomfort.`,
    },
    {
        id: 5,
        title: `Affordability`,
        text: `We offer competitive prices on all our products, ensuring that you get value for your money. We believe that everyone should have access to high-quality shoes, belts, and bags, which is why we keep our prices reasonable and affordable.`,
    },
    {
        id: 6,
        title: `Durability`,
        text: `Our products are made to last, so you can be sure that you're making a wise investment when you buy from us. We use high-quality materials and employ skilled artisans to ensure that our products are built to last.`,
    },
    {
        id: 7,
        title: `Convenience`,
        text: `Our store is conveniently located, making it easy for you to shop for shoes, belts, and bags. We also offer online shopping, so you can shop from the comfort of your own home and have your purchases delivered right to your doorstep.`,
    },
    {
        id: 8,
        title: `Customer Service`,
        text: `We pride ourselves on providing excellent customer service. Our staff is friendly and knowledgeable, and we're always available to answer any questions you may have about our products or services.`,
    },
    {
        id: 9,
        title: ` Loyalty Programs`,
        text: `We offer loyalty programs and discounts to our regular customers, ensuring that they get even more value for their money. We believe in building long-term relationships with our customers and rewarding their loyalty.`,
    },
];

export interface NavList {
    Home: string,
    Products: string
    About: string
    Contact: string
    "Sign In": string
    "Sign Up": string
}


export const navList:NavList = {
    Home: "",
    Products: "products",
    About: "about",
    Contact: "contact",
    "Sign In": "signin",
    "Sign Up": "signup",
  };
