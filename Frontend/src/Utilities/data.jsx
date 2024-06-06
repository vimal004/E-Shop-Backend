const dat = [
  {
    id: 1,
    product_name: "Samsung Galaxy S23",
    price: "$799",
    rating: "4.5",
    features: ["6.1-inch display", "128GB storage", "8GB RAM", "5G"],
    image_link:
      "https://th.bing.com/th?id=OPAC.TXbcem95QxqlZQ474C474&w=408&h=408&o=5&dpr=1.3&pid=21.1",
  },
  {
    id: 2,
    product_name: "Apple iPhone 14",
    price: "$999",
    rating: "4.7",
    features: ["6.1-inch display", "128GB storage", "6GB RAM", "5G"],
    image_link:
      "https://th.bing.com/th/id/OIP.DSfTIt2Kz96xHPCteB6mCQAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    product_name: "Google Pixel 7",
    price: "$599",
    rating: "4.6",
    features: ["6.3-inch display", "128GB storage", "8GB RAM", "5G"],
    image_link:
      "https://th.bing.com/th/id/OIP.TUuXk_yhSBfk0bD5slvxtAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    product_name: "Sony WH-1000XM4",
    price: "$349",
    rating: "4.8",
    features: ["Noise Cancellation", "30-hour battery", "Touch controls"],
    image_link:
      "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX425_.jpg",
  },
  {
    id: 5,
    product_name: "Apple MacBook Pro 14",
    price: "$1999",
    rating: "4.9",
    features: ["14-inch display", "M1 Pro chip", "16GB RAM", "512GB SSD"],
    image_link:
      "https://th.bing.com/th/id/OIP.oMIq3dSnnUN6dkyOaAuDEQAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    product_name: "Samsung Galaxy Tab S8",
    price: "$699",
    rating: "4.5",
    features: ["11-inch display", "128GB storage", "8GB RAM", "S Pen included"],
    image_link:
      "https://m.media-amazon.com/images/I/81QCuPs6IKL._SL1500_.jpg",
  },
  {
    id: 7,
    product_name: "Dell XPS 13",
    price: "$999",
    rating: "4.6",
    features: ["13.3-inch display", "Intel i7", "16GB RAM", "512GB SSD"],
    image_link:
      "https://th.bing.com/th/id/OIP.VLOGbGtgbYDP-6sGL6hrpQHaHI?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 8,
    product_name: "Apple AirPods Pro",
    price: "$249",
    rating: "4.7",
    features: [
      "Active Noise Cancellation",
      "Wireless charging",
      "Transparency mode",
    ],
    image_link:
      "https://th.bing.com/th/id/OIP.134VJ44OStJo8DrF8-JnyAAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 9,
    product_name: "Sony PlayStation 5",
    price: "$499",
    rating: "4.9",
    features: ["8K support", "Ultra-high-speed SSD", "3D audio"],
    image_link:
      "https://cdn1.smartprix.com/rx-iONR62zZ0-w1200-h1200/ONR62zZ0.jpg",
  },
  {
    id: 10,
    product_name: "Nikon Z6 II",
    price: "$1999",
    rating: "4.7",
    features: ["24.5MP sensor", "4K video", "In-body stabilization"],
    image_link:
      "https://th.bing.com/th/id/OIP.iq4zsCD9Y9eDSvOhiPJ8XwAAAA?rs=1&pid=ImgDetMain",
  },
];

const clothingData = [
  {
    product_name: "Nike Air Max 270",
    price: "$150",
    rating: "4.8",
    features: ["Breathable mesh upper", "Air cushioning", "Rubber outsole"],
    image_link:
      "https://i8.amplience.net/i/jpl/jd_AH8050-002_C_0001_a?qlt=92",
  },
  {
    product_name: "Adidas Ultraboost",
    price: "$180",
    rating: "4.7",
    features: ["Primeknit upper", "Boost cushioning", "Stretchweb outsole"],
    image_link:
      "https://www.sneakerfiles.com/wp-content/uploads/2016/11/adidas-ultra-boost-3-0-black-white.jpg",
  },
  {
    product_name: "Levi's 501 Original Fit Jeans",
    price: "$59.99",
    rating: "4.6",
    features: ["100% Cotton", "Button fly", "Classic straight leg"],
    image_link:
      "https://lsco.scene7.com/is/image/lsco/levis/clothing/005012453-front-pdp.jpg?$grid_desktop_bottoms$",
  },
  {
    product_name: "H&M Slim Fit Shirt",
    price: "$29.99",
    rating: "4.5",
    features: ["100% Cotton", "Slim fit", "Button-down collar"],
    image_link:
      "https://spy.com/wp-content/uploads/2021/06/HM-3-pack-Slim-Fit-T-shirts.jpeg?resize=285",
  },
  {
    product_name: "Zara Basic Blazer",
    price: "$79.90",
    rating: "4.7",
    features: ["Polyester blend", "Notched lapel", "Two-button closure"],
    image_link:
      "https://static.zara.net/photos/2023/V/0/1/p/2753/991/485/2/2753991485_6_1_1.jpg?ts=1676367753559",
  },
  {
    product_name: "Under Armour Tech Polo",
    price: "$39.99",
    rating: "4.8",
    features: ["Polyester fabric", "Moisture-wicking", "Anti-odor technology"],
    image_link:"https://underarmour.brandedmerchstores.com/media/catalog/product/cache/250a04c635b9993d1f29fe23be596ba9/u/a/ua1233723_lg_13.jpg",
  },
  {
    product_name: "Ralph Lauren Polo Shirt",
    price: "$98.50",
    rating: "4.6",
    features: ["Cotton mesh", "Classic fit", "Embroidered pony logo"],
    image_link:
      "https://th.bing.com/th/id/OIP.YEs1ZQykMm2lc5L8vbdcHAHaHa?w=580&h=580&rs=1&pid=ImgDetMain",
  },
  {
    product_name: "Gap Classic Chinos",
    price: "$49.95",
    rating: "4.5",
    features: ["Cotton blend", "Slim through the leg", "Zip fly"],
    image_link:
      "https://www.gap.com/webcontent/0019/624/139/cn19624139.jpg",
  },
  {
    product_name: "Tommy Hilfiger Logo Hoodie",
    price: "$89.50",
    rating: "4.7",
    features: ["Cotton blend", "Drawstring hood", "Front pouch pocket"],
    image_link:
      "https://d13qso5xfejx18.cloudfront.net/product-media/7FT5/580/580/0G0A1006.jpg",
  },
  {
    product_name: "Puma Essentials Sweatpants",
    price: "$45",
    rating: "4.6",
    features: ["Cotton blend", "Elastic waistband", "Side pockets"],
    image_link:
      "https://th.bing.com/th/id/OIP.VHvPVUyCmjfvg1DUMeQEeQHaHa?rs=1&pid=ImgDetMain",
  },
];

const mergedData = [
  ...dat,
  ...clothingData.map((item, index) => ({
    id: index + 11,
    ...item,
  })),
];

export default mergedData;

