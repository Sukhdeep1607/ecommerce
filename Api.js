import axios from "axios"

export async function productsData(){
    const products = [
      {
        id: 1,
        title: 'Desi Buffalo Ghee',
        description: 'Our premium quality 1kg pack of Buffalo Desi Ghee, produced with utmost care and hygiene in our state-of-the-art production plant. Our ghee is made using pure buffalo milk sourced from selected farms, ensuring the highest quality of milk for our product.Our ghee is made using the traditional process of churning and boiling the milk to separate the butterfat, which is then carefully clarified to produce pure and golden ghee. This gives our ghee a rich aroma and delicious taste, perfect for enhancing the flavors of your favorite dishes.Our 1kg pack of ghee is perfect for households and catering businesses alike, offering ample supply for all your cooking needs. Our ghee is also great for making sweets and other dairy-based desserts, as it provides a rich and creamy texture to your recipes.So, whether you are cooking up a storm in the kitchen, or looking to add a touch of richness to your desserts, our 1kg pack of Buffalo Desi Ghee is the perfect choice for you. Try it out and experience the difference in taste and quality for yourself!',
        price: 600,
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/CO/TV/IF/121940898/desi-ghee-15kg-tin-500x500.jpeg'
      },
      {
        id: 2,
        title: 'Desi Cow Ghee',
        description: 'Introducing our 100% pure Cow Desi Ghee, carefully crafted and produced in our state-of-the-art production plant. Our ghee is made using only the finest quality cow milk, sourced from select farms to ensure a high quality and delicious end product.Our Cow Desi Ghee is made using traditional methods of churning and boiling milk to separate the butterfat, which is then carefully clarified to produce the golden and fragrant ghee. This gives our ghee a rich and flavorful taste, perfect for enhancing the flavors of your favorite dishes.Our 1kg pack of Cow Desi Ghee is perfect for households and catering businesses, providing ample supply for all your cooking needs. Our ghee is also great for baking and making sweets, as it provides a rich and creamy texture to your recipes.We take pride in our quality control measures, ensuring that our Cow Desi Ghee is free from any impurities, and packaged in a secure and hygienic manner to preserve its taste and quality. Our ghee is also a healthy option, as it contains less cholesterol and saturated fats than other cooking oils.Experience the authentic taste of pure Cow Desi Ghee, and elevate your cooking and baking to new heights with our 1kg pack.',
        price: 600,
        image: 'https://www.themagicsaucepan.com/wp-content/uploads/2018/10/Ghee-0345Blog.jpg'
      },
      {
        id: 3,
        title:'Paneer',
        description:'Introducing our freshly made Paneer, produced with 100% pure cow milk. Our Paneer is a soft and creamy cheese, perfect for adding to your favorite dishes like palak paneer, paneer tikka, or even sandwiches. Made with the finest quality milk, our Paneer is packed with protein and nutrients, making it a healthy addition to your diet. Try it today and experience the rich and creamy taste of our premium quality Paneer!',
        price: 300,
        image:'https://media.istockphoto.com/id/464765760/photo/cutting-paneer-into-pieces.jpg?s=612x612&w=0&k=20&c=DhVjekiVhfGdNRj1Z3nKDogqMrkJWyO6rGcLUBXjOgE='
      },
      {
        id:4,
        title:'Full Cream Milk',
        description:'Our milk is produced fresh daily in our state-of-the-art production plant using the highest quality standards. It is creamy, rich and full of nutrients, making it the perfect addition to your daily routine. Whether you enjoy it in your coffee or use it for baking, our milk is sure to impress with its delicious taste and quality.',
        price:60,
        image:'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHw%3D&w=1000&q=80'
      },
      {
        id:5,
        title:'Curd',
        description:'Our curd is made with fresh, high-quality milk and live cultures that provide a tangy and creamy taste. It is a versatile ingredient that can be used in a variety of dishes, including smoothies, dips, and marinades. With its numerous health benefits, including promoting digestion and boosting immunity, our curd is an excellent addition to any diet.',
        price:200,
        image:'https://akshayakalpa.org/wp-content/uploads/2021/12/ancient-curd.png'
      },
    ];
    return products;
    
}