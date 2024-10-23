import React, { useEffect } from 'react';

const Portfolio = () => {
  const toggleTheme = () => {
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  };

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  };

  useEffect(() => {
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      darkIcon.classList.add('hidden');
      lightIcon.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      darkIcon.classList.remove('hidden');
      lightIcon.classList.add('hidden');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-indigo-500 text-2xl font-semibold">Achraf Abdeslami</div>
          <nav>
            <div className="hidden md:flex space-x-6">
              {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((item) => (
                <a href={`#${item.toLowerCase().replace(' ', '')}`} key={item} className="text-indigo-500 hover:text-white transition text-black dark:text-indigo-500">{item}</a>
              ))}
            </div>
          </nav>
          <div className="ml-4">
            <button id="theme-toggle" className="text-indigo-500 focus:outline-none" onClick={toggleTheme}>
              <svg id="theme-toggle-dark-icon" className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg id="theme-toggle-light-icon" className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm4.22 1.22a1 1 0 011.415 1.415l-.707.707a1 1 0 11-1.414-1.414l.707-.708zM17 10a1 1 0 100 2h1a1 1 0 100-2h-1zm-1.22 4.78a1 1 0 011.415-1.415l.707.708a1 1 0 11-1.414 1.414l-.708-.707zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.78-1.22a1 1 0 00-1.415 1.415l.707.708a1 1 0 001.414-1.414l-.707-.709zM3 10a1 1 0 100 2H2a1 1 0 100-2h1zm1.22-4.78a1 1 0 00-1.415-1.415l-.708.707a1 1 0 001.414 1.414l.709-.708zM10 7a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </button>
          </div>
          <div className="md:hidden">
            <button id="menu-button" className="text-indigo-500 focus:outline-none" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-gray-300 items-center mx-auto p-10 justify-center dark:bg-gray-900">
          {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((item) => (
            <a href={`#${item.toLowerCase().replace(' ', '')}`} key={item} className="block px-4 py-2 text-indigo-500 hover:bg-gray-700 dark:hover:bg-gray-800">{item}</a>
          ))}
        </div>
      </header>

      {/* Sections */}
      <section id="home" className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800">
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white text-black mb-4">Hello, I’m Achraf Abdeslami</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium dark:text-gray-300 text-gray-600">
            Freelance UI Designer, Fullstack Developer, & Data Miner. I create seamless web experiences for end-users.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src="https://c0.wallpaperflare.com/preview/692/415/725/business-portrait-glasses-style.jpg" alt="Profile Picture" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-500 object-cover" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800">
        <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg sm:text-xl font-medium dark:text-white text-black">
          Hi, my name is Achraf Abdeslami, a Fullstack Web Developer, UI Designer, and Mobile Developer. I have honed my skills in Web Development and advanced UI design principles, enabling me to create intuitive and visually appealing applications.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800">
        <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold mb-6">The Services I Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'fas fa-paint-brush', title: 'UI & UX Designing', description: 'I design beautiful web interfaces with Figma and Adobe XD.' },
            { icon: 'fas fa-code', title: 'Web Development', description: 'I create stunning interfaces using HTML, CSS, JavaScript, and frameworks like Angular and ReactJS.' },
            { icon: 'fas fa-mobile-alt', title: 'Mobile Development', description: 'Expert in Flutter and React Native to build cross-platform mobile applications.' },
            { icon: 'fas fa-database', title: 'Web Scraping with Python', description: 'I can collect and manipulate content from the web using Python.' },
          ].map((service, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-col items-center text-center">
              <i className={`${service.icon} text-indigo-500 text-3xl mb-4`}></i>
              <h3 className="text-black dark:text-white text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-black dark:text-white text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800">
        <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { image: 'https://via.placeholder.com/311x173', title: 'Twinder', description: 'A live Geolocation app for finding tweets and Twitter users around you.' },
            { image: 'https://via.placeholder.com/311x173', title: 'LIVENTS', description: 'A video streaming app with live Geolocation for streaming events.' },
            { image: 'https://via.placeholder.com/311x173', title: 'Moove', description: 'Mobile app for booking instant pickup & drop-off across major cities.' },
          ].map((project, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-col">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 object-cover h-48" />
              <h3 className="text-indigo-500 text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-black dark:text-white text-lg flex-grow">{project.description}</p>
              <a href="#" className="text-indigo-500 mt-4 font-semibold hover:underline">View Live</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800">
        <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold text-center mb-6">Connect with Me</h2>
        <p className="dark:text-white text-black text-lg text-center mb-8">Contact me, let's make magic together</p>
        <form className="max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Name" required className="w-full p-4 rounded-lg dark:bg-gray-700 bg-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" placeholder="Email" required className="w-full p-4 rounded-lg dark:bg-gray-700 bg-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea placeholder="Message" required className="w-full p-4 rounded-lg dark:bg-gray-700 bg-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="5"></textarea>
          <button type="submit" className="w-full bg-blue-400 dark:bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 md:px-16 py-6 bg-white dark:bg-gray-800 text-center">
        <p className="dark:text-white text-black">
          © 2022 Achraf Abdeslami | Fullstack Developer | UI Designer | Data Analyst | Designed by @achrafabdeslami
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
