import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyBrand</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/#features" className="hover:underline">Features</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-lg mb-2" htmlFor="name">Name</label>
              <input className="w-full px-4 py-2 border rounded-lg" type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg mb-2" htmlFor="email">Email</label>
              <input className="w-full px-4 py-2 border rounded-lg" type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-lg" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-500 transition" type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 MyBrand. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com" className="hover:text-yellow-400">Twitter</a>
            <a href="https://facebook.com" className="hover:text-yellow-400">Facebook</a>
            <a href="https://instagram.com" className="hover:text-yellow-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

