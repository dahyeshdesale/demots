import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyBrand</div>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="h-screen bg-blue-700 text-white flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to MyBrand</h1>
          <p className="text-xl mb-8">Your one-stop solution for everything you need to grow and succeed.</p>
          <a href="#features" className="bg-yellow-500 text-black py-3 px-6 rounded-full text-lg hover:bg-yellow-400 transition">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <Image src="/feature1.svg" alt="Feature 1" width={60} height={60} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-2">Feature 1</h3>
              <p className="text-lg">This is a description of the first feature that makes your product amazing.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <Image src="/feature2.svg" alt="Feature 2" width={60} height={60} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-2">Feature 2</h3>
              <p className="text-lg">Here’s why this feature will help you achieve your goals faster and better.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <Image src="/feature3.svg" alt="Feature 3" width={60} height={60} className="mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-2">Feature 3</h3>
              <p className="text-lg">Discover the power of this third feature and how it sets us apart.</p>
            </div>
          </div>
        </div>
      </section>

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
}
