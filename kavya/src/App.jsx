import Hero from "./Components/Hero";

import Products from "./Components/Product";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div>
      <Hero />
     
      <Products />
      <ContactForm />
      <footer className="text-center text-sm text-gray-600 py-4 bg-pink-50">
        © 2025 Kyara Beverages | Refreshment, Reimagined
      </footer>
    </div>
  );
}

export default App;
