const dat = [
  {
    product_name: "Samsung Galaxy S23",
    price: "$799",
    rating: "4.5",
    features: ["6.1-inch display", "128GB storage", "8GB RAM", "5G"],
    image_link:
      "https://th.bing.com/th?id=OPAC.TXbcem95QxqlZQ474C474&w=408&h=408&o=5&dpr=1.3&pid=21.1",
  },
  {
    product_name: "Apple iPhone 14",
    price: "$999",
    rating: "4.7",
    features: ["6.1-inch display", "128GB storage", "6GB RAM", "5G"],
    image_link:
      "https://th.bing.com/th/id/OIP.DSfTIt2Kz96xHPCteB6mCQAAAA?rs=1&pid=ImgDetMain",
  },
  {
    product_name: "Google Pixel 7",
    price: "$599",
    rating: "4.6",
    features: ["6.3-inch display", "128GB storage", "8GB RAM", "5G"],
    image_link:
      "https://th.bing.com/th/id/OIP.TUuXk_yhSBfk0bD5slvxtAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    product_name: "Sony WH-1000XM4",
    price: "$349",
    rating: "4.8",
    features: ["Noise Cancellation", "30-hour battery", "Touch controls"],
    image_link:
      "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX425_.jpg",
  },
  {
    product_name: "Apple MacBook Pro 14",
    price: "$1999",
    rating: "4.9",
    features: ["14-inch display", "M1 Pro chip", "16GB RAM", "512GB SSD"],
    image_link:
      "https://th.bing.com/th/id/OIP.oMIq3dSnnUN6dkyOaAuDEQAAAA?rs=1&pid=ImgDetMain",
  },
  {
    product_name: "Samsung Galaxy Tab S8",
    price: "$699",
    rating: "4.5",
    features: ["11-inch display", "128GB storage", "8GB RAM", "S Pen included"],
    image_link:
      "data:image/jpeg;base64,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",
  },
  {
    product_name: "Dell XPS 13",
    price: "$999",
    rating: "4.6",
    features: ["13.3-inch display", "Intel i7", "16GB RAM", "512GB SSD"],
    image_link:
      "https://th.bing.com/th/id/OIP.VLOGbGtgbYDP-6sGL6hrpQHaHI?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
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
    product_name: "Sony PlayStation 5",
    price: "$499",
    rating: "4.9",
    features: ["8K support", "Ultra-high-speed SSD", "3D audio"],
    image_link:
      "https://cdn1.smartprix.com/rx-iONR62zZ0-w1200-h1200/ONR62zZ0.jpg",
  },
  {
    product_name: "Nikon Z6 II",
    price: "$1999",
    rating: "4.7",
    features: ["24.5MP sensor", "4K video", "In-body stabilization"],
    image_link: "https://th.bing.com/th/id/OIP.iq4zsCD9Y9eDSvOhiPJ8XwAAAA?rs=1&pid=ImgDetMain",
  },
];

export default dat;
