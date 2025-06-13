function Products() {
    const drinks = [
      {
        name: "Berry Breeze",
        desc: "Sweet, tangy, and always fresh.",
        img: "https://via.placeholder.com/150", // replace with actual image URL later
      },
      {
        name: "Tropical Zing",
        desc: "A sunny burst of tropical flavor.",
        img: "https://via.placeholder.com/150",
      },
      {
        name: "Citrus Chill",
        desc: "Cool, crisp, and energizing.",
        img: "https://via.placeholder.com/150",
      },
    ];
  
    return (
      <section className="py-10 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Drinks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {drinks.map((drink, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full"
            >
              <img
                src={drink.img}
                className="w-28 h-28 object-contain mb-4"
                alt={drink.name}
              />
              <h3 className="font-bold text-lg mb-1">{drink.name}</h3>
              <p className="text-gray-600 text-sm">{drink.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Products;
  