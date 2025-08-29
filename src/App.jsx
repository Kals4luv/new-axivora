
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 shadow-lg bg-opacity-80 bg-gray-900">
        <div className="text-2xl font-bold tracking-widest text-indigo-400">AXIVORA EDGE TECH</div>
        <nav className="space-x-8 text-lg">
          <a href="#home" className="hover:text-indigo-300 transition">Home</a>
          <a href="#about" className="hover:text-indigo-300 transition">About</a>
          <a href="#services" className="hover:text-indigo-300 transition">Services</a>
          <a href="#contact" className="hover:text-indigo-300 transition">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-16">
        <section id="home" className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to AXIVORA EDGE TECH
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-8">
            Elevating businesses with cutting-edge technology solutions. Experience innovation, reliability, and excellence tailored for your success.
          </p>
          <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg transition">Get Started</a>
        </section>
        <section id="about" className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">About Us</h2>
          <p className="text-lg text-gray-300">
            AXIVORA EDGE TECH is a forward-thinking technology partner dedicated to empowering businesses through digital transformation. Our team combines expertise, creativity, and a passion for innovation to deliver solutions that drive growth and efficiency.
          </p>
        </section>
        <section id="services" className="max-w-5xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">Custom Software Development</h3>
              <p className="text-gray-400">Tailored solutions to meet your unique business needs, from web apps to enterprise systems.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">Cloud & DevOps</h3>
              <p className="text-gray-400">Modernize your infrastructure with scalable, secure, and automated cloud solutions.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">AI & Data Analytics</h3>
              <p className="text-gray-400">Unlock insights and drive smarter decisions with advanced analytics and AI integration.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="max-w-2xl w-full">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Contact Us</h2>
          <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-lg">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <textarea placeholder="Your Message" rows="4" className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
            <button type="submit" className="px-6 py-3 rounded bg-indigo-500 hover:bg-indigo-600 font-semibold transition">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="text-center py-6 text-gray-500 bg-gray-900 bg-opacity-80">
        &copy; {new Date().getFullYear()} AXIVORA EDGE TECH. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
