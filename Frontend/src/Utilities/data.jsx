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
    image_link: "https://m.media-amazon.com/images/I/81QCuPs6IKL._SL1500_.jpg",
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
    id: 11,
    product_name: "Nike Air Max 270",
    price: "$150",
    rating: "4.8",
    features: ["Breathable mesh upper", "Air cushioning", "Rubber outsole"],
    image_link: "https://i8.amplience.net/i/jpl/jd_AH8050-002_C_0001_a?qlt=92",
  },
  {
    id: 12,
    product_name: "Adidas Ultraboost",
    price: "$180",
    rating: "4.7",
    features: ["Primeknit upper", "Boost cushioning", "Stretchweb outsole"],
    image_link:
      "https://www.sneakerfiles.com/wp-content/uploads/2016/11/adidas-ultra-boost-3-0-black-white.jpg",
  },
  {
    id: 13,
    product_name: "Levi's 501 Original Fit Jeans",
    price: "$59.99",
    rating: "4.6",
    features: ["100% Cotton", "Button fly", "Classic straight leg"],
    image_link:
      "https://lsco.scene7.com/is/image/lsco/levis/clothing/005012453-front-pdp.jpg?$grid_desktop_bottoms$",
  },
  {
    id: 14,
    product_name: "H&M Slim Fit Shirt",
    price: "$29.99",
    rating: "4.5",
    features: ["100% Cotton", "Slim fit", "Button-down collar"],
    image_link:
      "https://spy.com/wp-content/uploads/2021/06/HM-3-pack-Slim-Fit-T-shirts.jpeg?resize=285",
  },
  {
    id: 15,
    product_name: "Zara Basic Blazer",
    price: "$79.90",
    rating: "4.7",
    features: ["Polyester blend", "Notched lapel", "Two-button closure"],
    image_link:
      "https://static.zara.net/photos/2023/V/0/1/p/2753/991/485/2/2753991485_6_1_1.jpg?ts=1676367753559",
  },
  {
    id: 16,
    product_name: "Under Armour Tech Polo",
    price: "$39.99",
    rating: "4.8",
    features: ["Polyester fabric", "Moisture-wicking", "Anti-odor technology"],
    image_link:
      "https://underarmour.brandedmerchstores.com/media/catalog/product/cache/250a04c635b9993d1f29fe23be596ba9/u/a/ua1233723_lg_13.jpg",
  },
  {
    id: 17,
    product_name: "Ralph Lauren Polo Shirt",
    price: "$98.50",
    rating: "4.6",
    features: ["Cotton mesh", "Classic fit", "Embroidered pony logo"],
    image_link:
      "https://th.bing.com/th/id/OIP.YEs1ZQykMm2lc5L8vbdcHAHaHa?w=580&h=580&rs=1&pid=ImgDetMain",
  },
  {
    id: 18,
    product_name: "Gap Classic Chinos",
    price: "$49.95",
    rating: "4.5",
    features: ["Cotton blend", "Slim through the leg", "Zip fly"],
    image_link: "https://www.gap.com/webcontent/0019/624/139/cn19624139.jpg",
  },
  {
    id: 19,
    product_name: "Tommy Hilfiger Logo Hoodie",
    price: "$89.50",
    rating: "4.7",
    features: ["Cotton blend", "Drawstring hood", "Front pouch pocket"],
    image_link:
      "https://d13qso5xfejx18.cloudfront.net/product-media/7FT5/580/580/0G0A1006.jpg",
  },
  {
    id: 20,
    product_name: "Puma Essentials Sweatpants",
    price: "$45",
    rating: "4.6",
    features: ["Cotton blend", "Elastic waistband", "Side pockets"],
    image_link:
      "https://th.bing.com/th/id/OIP.VHvPVUyCmjfvg1DUMeQEeQHaHa?rs=1&pid=ImgDetMain",
  },
];

const kitchenProducts = [
  {
    id: 21,
    product_name: "Instant Pot Duo 7-in-1",
    price: "$89.99",
    rating: "4.8",
    features: ["Pressure cooker", "Slow cooker", "Rice cooker", "Steamer"],
    image_link:
      "https://th.bing.com/th/id/OIP.u2V3QdAy7Z7HguYV0A-o-QHaI7?w=138&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 22,
    product_name: "Vitamix 5200 Blender",
    price: "$449.95",
    rating: "4.9",
    features: [
      "64-ounce container",
      "Stainless steel blades",
      "Variable speed control",
    ],
    image_link:
      "https://th.bing.com/th/id/OIP.LxBg78B1lPqAq_EVXXasVwHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 23,
    product_name: "KitchenAid Stand Mixer",
    price: "$429.99",
    rating: "4.7",
    features: ["5-quart bowl", "10 speeds", "Tilt-head design"],
    image_link:
      "https://th.bing.com/th/id/OIP.eNw77iDyPtWBJIBQ_XAmwAHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 24,
    product_name: "Ninja Foodi Air Fryer",
    price: "$159.99",
    rating: "4.6",
    features: ["4-quart capacity", "Dehydrate function", "Crisper plate"],
    image_link:
      "https://th.bing.com/th/id/OIP.uqK1v9UMlRoaO3tkx5ay5gHaGI?w=225&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 25,
    product_name: "Cuisinart Chef's Classic Cookware Set",
    price: "$199.95",
    rating: "4.5",
    features: ["12-piece set", "Hard anodized", "Non-stick"],
    image_link:
      "https://th.bing.com/th/id/OIP.h2GCkILSSrYIwAB1TW8MwAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 26,
    product_name: "Breville Barista Express Espresso Machine",
    price: "$699.95",
    rating: "4.8",
    features: ["Integrated grinder", "1600W", "Stainless steel"],
    image_link:
      "https://th.bing.com/th/id/OIP.NJshGbwHWvBhXU7w983eCAHaIl?w=163&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 27,
    product_name: "OXO Brew Coffee Maker",
    price: "$99.95",
    rating: "4.7",
    features: ["9-cup capacity", "Thermal carafe", "Programmable"],
    image_link:
      "https://th.bing.com/th/id/OIP.SB0VvWCw_W73ZKVEOlX97wHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 28,
    product_name: "Lodge Cast Iron Skillet",
    price: "$29.99",
    rating: "4.6",
    features: ["Pre-seasoned", "12-inch", "Durable"],
    image_link:
      "https://th.bing.com/th/id/OIP.d8LktJkJ15PwoLLEx9igMwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 29,
    product_name: "Hamilton Beach Electric Kettle",
    price: "$29.99",
    rating: "4.5",
    features: ["1.7-liter", "Cordless", "Auto shutoff"],
    image_link:
      "https://th.bing.com/th/id/OIP.b5zhDLcHyXo4RXOMNCCrTQHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 30,
    product_name: "NutriBullet Blender",
    price: "$59.99",
    rating: "4.7",
    features: ["600W", "24-ounce cup", "Stainless steel blades"],
    image_link:
      "https://th.bing.com/th/id/OIP.KLk6RzVgdRi62R0Nyb-vogHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const sportsKits = [
  {
    id: 31,
    product_name: "Wilson Evolution Basketball",
    price: "$64.99",
    rating: "4.8",
    features: ["Composite leather", "Official size", "Indoor use"],
    image_link:
      "https://th.bing.com/th/id/OIP.jL3Vjr09V1TXjNpZLj5IOwHaHc?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 32,
    product_name: "Nike Pro Training Mat",
    price: "$59.99",
    rating: "4.7",
    features: ["Anti-slip", "Lightweight", "5mm thickness"],
    image_link:
      "https://th.bing.com/th/id/OIP.eN3CcOLrR3Lh_Nb6cb4slQGQGQ?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 33,
    product_name: "Adidas Predator Soccer Ball",
    price: "$29.99",
    rating: "4.6",
    features: ["Machine-stitched", "Butyl bladder", "Durable"],
    image_link:
      "https://th.bing.com/th/id/OIP.q_QY7krJwMYhHEEB2deRPQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 34,
    product_name: "Under Armour Highlight Football Cleats",
    price: "$129.99",
    rating: "4.8",
    features: ["Synthetic upper", "Rubber outsole", "High-top"],
    image_link:
      "https://th.bing.com/th/id/OIP.S0JF0JObh7JPs7DqmG6vjgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 35,
    product_name: "Spalding NBA Street Basketball",
    price: "$19.99",
    rating: "4.7",
    features: ["Rubber cover", "Official size", "Outdoor use"],
    image_link:
      "https://th.bing.com/th/id/OIP.50BS4rfN_vvoK4HTZhbX1QHaHf?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 36,
    product_name: "Easton Ghost Fastpitch Softball Bat",
    price: "$349.99",
    rating: "4.9",
    features: ["Double barrel", "Composite material", "Ultra-thin handle"],
    image_link:
      "https://th.bing.com/th/id/OIP.WT2kDjAdqUeq_MEsazeuOAHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 37,
    product_name: "Speedo Vanquisher 2.0 Goggles",
    price: "$21.99",
    rating: "4.7",
    features: ["Anti-fog", "UV protection", "Adjustable strap"],
    image_link:
      "https://th.bing.com/th/id/OIP.JcXNsVl0FjoUpLHAwIl2-gHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 38,
    product_name: "Wilson A2000 Baseball Glove",
    price: "$259.99",
    rating: "4.8",
    features: ["Pro Stock leather", "Dual Welting", "Dri-Lex wrist lining"],
    image_link:
      "https://th.bing.com/th/id/OIP.DVjxCPQqSxSawpIkzor5ogHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 39,
    product_name: "Yonex Badminton Racket",
    price: "$69.99",
    rating: "4.6",
    features: ["Graphite frame", "Isometric head", "Lightweight"],
    image_link:
      "https://th.bing.com/th/id/OIP.iENbPpLMi86IFpX8tIjGJQHaO0?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 40,
    product_name: "Franklin Sports Volleyball Set",
    price: "$39.99",
    rating: "4.7",
    features: ["Net included", "Inflation pump", "Official size"],
    image_link:
      "https://th.bing.com/th/id/OIP.LKDXAD6Ptu4X4g0x6F-_gQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const mergedData = [...dat, ...clothingData, ...kitchenProducts, ...sportsKits];

export default mergedData;
