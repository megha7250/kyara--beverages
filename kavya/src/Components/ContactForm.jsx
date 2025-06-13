function ContactForm() {
    return (
      <section className="py-10 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded" />
          <button type="button" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  
  export default ContactForm;
  