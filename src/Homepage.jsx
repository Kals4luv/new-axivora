import React from "react";


function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 shadow-lg bg-opacity-80 bg-background">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl font-extrabold text-white shadow-lg">A</div>
          <span className="text-2xl font-bold tracking-widest text-accent">AXIVORA EDGE TECH</span>
        </div>
        <nav className="space-x-8 text-lg">
          <a href="#home" className="hover:text-accent transition">Home</a>
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#services" className="hover:text-accent transition">Services</a>
          <a href="#portfolio" className="hover:text-accent transition">Portfolio</a>
          <a href="#team" className="hover:text-accent transition">Team</a>
          <a href="#careers" className="hover:text-accent transition">Careers</a>
          <a href="#blog" className="hover:text-accent transition">Blog</a>
          <a href="#testimonials" className="hover:text-accent transition">Testimonials</a>
          <a href="#faq" className="hover:text-accent transition">FAQ</a>
          <a href="#privacy" className="hover:text-accent transition">Privacy Policy</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-16">
        <section id="home" className="relative mb-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] w-full overflow-hidden bg-gradient-to-r from-background via-surface to-gray-700 rounded-3xl shadow-2xl p-8 md:p-16">
          <div className="flex-1 flex flex-col items-start z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-accent via-primary to-accent-dark bg-clip-text text-transparent drop-shadow-lg">
              Welcome to <span className="text-accent">AXIVORA EDGE TECH</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-xl text-accent mb-8">
              Elevating businesses with cutting-edge technology solutions. Experience innovation, reliability, and excellence tailored for your success.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent hover:bg-accent-dark text-white font-semibold shadow-lg transition">Get Started</a>
          </div>
          <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Business Technology" className="rounded-2xl shadow-xl w-full max-w-md border-4 border-accent/40" />
          </div>
        </section>
        <section className="w-full flex justify-center mb-12">
          <div className="bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-xl shadow-lg text-lg font-semibold flex items-center gap-4">
            <span>🚀 Ready to transform your business?</span>
            <a href="#services" className="underline hover:text-accent-light transition">Explore Our Services</a>
          </div>
        </section>
        <section id="about" className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-accent">About Us</h2>
          <p className="text-lg text-accent">
            AXIVORA EDGE TECH is a forward-thinking technology partner dedicated to empowering businesses through digital transformation. Our team combines expertise, creativity, and a passion for innovation to deliver solutions that drive growth and efficiency.
          </p>
        </section>
        <section id="services" className="max-w-6xl mb-20 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div className="bg-surface rounded-2xl p-8 shadow-xl hover:scale-105 transition border-2 border-accent flex flex-col items-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Custom Software Development</h3>
              <p className="text-accent-light text-center">Tailored solutions to meet your unique business needs, from web apps to enterprise systems.</p>
            </div>
            <div className="bg-surface rounded-2xl p-8 shadow-xl hover:scale-105 transition border-2 border-accent flex flex-col items-center">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Cloud & DevOps</h3>
              <p className="text-accent-light text-center">Modernize your infrastructure with scalable, secure, and automated cloud solutions.</p>
            </div>
            <div className="bg-surface rounded-2xl p-8 shadow-xl hover:scale-105 transition border-2 border-accent flex flex-col items-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-accent">AI & Data Analytics</h3>
              <p className="text-accent-light text-center">Unlock insights and drive smarter decisions with advanced analytics and AI integration.</p>
            </div>
          </div>
        </section>
        <section id="portfolio" className="max-w-5xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">Project One</h3>
              <p className="text-gray-400">A showcase of our innovative web platform for enterprise clients.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">Project Two</h3>
              <p className="text-gray-400">Cloud migration and DevOps automation for a global retailer.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">Project Three</h3>
              <p className="text-gray-400">AI-powered analytics dashboard for a financial services firm.</p>
            </div>
          </div>
        </section>
        <section id="team" className="max-w-5xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-400 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">Jane Doe</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-400 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">John Smith</h3>
              <p className="text-gray-400">CTO</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-400 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">Emily Lee</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
          </div>
        </section>
        <section id="careers" className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Careers</h2>
          <p className="text-lg text-gray-300 mb-4">Join our team and help shape the future of technology. We are always looking for talented, passionate individuals.</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Frontend Developer</li>
            <li>Cloud Engineer</li>
            <li>AI/ML Specialist</li>
          </ul>
          <p className="mt-4">Send your resume to <a href="mailto:careers@axivora.com" className="text-indigo-400 underline">careers@axivora.com</a></p>
        </section>
        <section id="blog" className="max-w-5xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Blog</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">5 Tech Trends Shaping 2025</h3>
              <p className="text-gray-400">Stay ahead with our insights on the latest technology trends impacting businesses this year.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">How to Build a Resilient Cloud Infrastructure</h3>
              <p className="text-gray-400">Best practices for ensuring uptime, security, and scalability in the cloud era.</p>
            </div>
          </div>
        </section>
        <section id="testimonials" className="max-w-5xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-gray-300 italic">"AXIVORA EDGE TECH transformed our business with their innovative solutions!"</p>
              <div className="mt-4 text-indigo-200 font-semibold">— Sarah K., CEO, FinTech Co.</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-gray-300 italic">"Professional, reliable, and always ahead of the curve."</p>
              <div className="mt-4 text-indigo-200 font-semibold">— Mike L., CTO, Retail Group</div>
            </div>
          </div>
        </section>
        <section id="faq" className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="font-semibold text-indigo-200">What industries do you serve?</h3>
              <p className="text-gray-400">We work with clients in finance, retail, healthcare, and more.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="font-semibold text-indigo-200">How can I request a quote?</h3>
              <p className="text-gray-400">Use the contact form below or email us at info@axivora.com.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="font-semibold text-indigo-200">Do you offer support after project delivery?</h3>
              <p className="text-gray-400">Yes, we provide ongoing support and maintenance packages.</p>
            </div>
          </div>
        </section>
        <section id="privacy" className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Privacy Policy</h2>
          <p className="text-gray-300">We value your privacy. Your information is never shared with third parties. For details, please contact us at privacy@axivora.com.</p>
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

export default Homepage;
