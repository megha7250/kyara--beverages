import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="bg-pink-100 py-12 px-6 text-center">
      <img
        src={logo}
        alt="Kyara Beverages Logo"
        className="mx-auto w-28 mb-4 rounded-xl border-4 border-white"
      />
      <h1 className="text-4xl font-bold mb-2">Kyara Beverages</h1>
      <p className="text-xl italic mb-6">"Refreshment, Reimagined"</p>

      <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
        <p>
        At Kyara Beverages, we craft refreshing drinks that blend taste, health, and innovation — for every mood and moment.
        </p>
      </div>
    </section>
  );
}

export default Hero;
