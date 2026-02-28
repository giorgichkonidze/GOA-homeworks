import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      id: 1,
      title: "Mens Snow Jacket",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
      oldPrice: 400,
      newPrice: 280,
    },
    {
      id: 2,
      title: "Mens Winter Jacket",
      image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
      oldPrice: 370,
      newPrice: 259,
    },
    {
      id: 3,
      title: "Insulated Jacket",
      image: "https://images.unsplash.com/photo-1520975922324-8b456906c813",
      oldPrice: 320,
      newPrice: 224,
    },
    {
      id: 4,
      title: "Mens Outdoor Jacket",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c",
      oldPrice: 475,
      newPrice: 399,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">
        Mens Ski & Snowboarding Jackets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default App;