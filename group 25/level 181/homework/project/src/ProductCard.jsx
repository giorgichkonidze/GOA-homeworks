export default function ProductCard({ image, title, oldPrice, newPrice }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover rounded-lg"
      />

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-400 line-through">${oldPrice}</span>
          <span className="text-red-500 font-bold">${newPrice}</span>
        </div>

        <button className="mt-4 w-full border border-black py-2 rounded-full hover:bg-black hover:text-white transition">
          + Add
        </button>
      </div>
    </div>
  );
}