import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building2,
  Code2,
  Gamepad2,
  Zap,
  Star,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      emoji: "🍕",
      title: "FOOD DELIVERY APP",
      description:
        "Developed a food delivery web application that allows users to browse restaurant menus, add items to a cart, and place orders online. Implemented a clean, responsive design for seamless usage on both desktop and mobile devices.",
      tags: ["React", "Responsive", "E-commerce"],
      link: "https://foodappbyreact.netlify.app/",
      colors: {
        border: "green",
        gradientFrom: "green",
        gradientTo: "cyan",
      },
    },
    {
      emoji: "🎵",
      title: "MUSIC PLAYER",
      description:
        "Recently I have created a music player web app where we can play and pause and next and prev, volume up down and completely responsive. It is my second personal project, In this I used Context API.",
      tags: ["React", "Context API", "Audio"],
      link: "https://shouzi-musicplayer.netlify.app/",
      colors: {
        border: "purple",
        gradientFrom: "purple",
        gradientTo: "cyan",
      },
    },
    {
      emoji: "🤖",
      title: "SELF AI-INTERVIEW",
      description:
        "This is my fullstack project. When I was preparing for interview then I have created this to self improvement, I used to practice daily on it.",
      tags: ["Full Stack", "AI Integration", "Interview Prep"],
      link: "https://self-ai-interview.vercel.app",
      colors: {
        border: "cyan",
        gradientFrom: "cyan",
        gradientTo: "green",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-50 animation-delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60 animation-delay-2000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-cyan-400/20"></div>
            ))}
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/5 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-400/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SHOUZAB
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
              >
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 relative group"
              >
                Projects
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group"
              >
                Skills
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                Experience
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("connect")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                Connect
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-cyan-400/30">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 py-2"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-2"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("connect")}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  Connect
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400 rotate-12 animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-green-400 rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-cyan-400 rotate-12 animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-20">
          <div className="mb-8">
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-cyan-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            SHOUZAB FAROOQUI
          </h1>

          <div className="flex items-center justify-center mb-6">
            <Code2 className="w-6 h-6 mr-3 text-cyan-400" />
            <p className="text-xl md:text-2xl text-gray-300">
              Frontend Developer
            </p>
            <Zap className="w-6 h-6 ml-3 text-purple-400" />
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Hey'I am a <span>{`<Frontend Developer/> `}</span>
            Proficient in HTML, CSS, JavaScript, and modern frameworks like
            React and Angular. Strong understanding of UI/UX principles and a
            keen eye for detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("connect")}
              className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-700"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ABOUT ME
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-gray-900/80 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm">
                <Star className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  Mission
                </h3>
                <p className="text-gray-300">
                  Transforming creative visions into interactive digital
                  experiences through innovative frontend development and
                  user-centered design.
                </p>
              </div>

              <div className="p-6 bg-gray-900/80 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-purple-400">
                  Expertise
                </h3>
                <p className="text-gray-300">
                  Specialized in React, Next, TypeScript, and modern CSS
                  frameworks, with a passion for creating responsive and
                  accessible web applications.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="p-8 bg-gray-900/80 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">
                    Developer Stats
                  </h3>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Experience Level</span>
                    <span className="text-green-400 font-semibold">
                      1+ Years
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full w-4/5"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-green-400 font-semibold">15+</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-400 to-cyan-400 h-3 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              MY PROJECTS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Showcasing my latest work in frontend development and full-stack
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(
              ({ emoji, title, description, tags, link, colors }, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden bg-gray-900/80 rounded-xl border border-${
                    colors.border
                  }-400/30 hover:border-${
                    colors.border
                  }-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-${
                    colors.border
                  }-400/20 backdrop-blur-sm hover:transform hover:scale-105 ${
                    title === "SELF AI-INTERVIEW"
                      ? "md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div
                    className={`aspect-video bg-gradient-to-br from-${colors.gradientFrom}-400/20 to-${colors.gradientTo}-400/20 flex items-center justify-center`}
                  >
                    <div className="text-6xl">{emoji}</div>
                  </div>

                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold text-${colors.border}-400 mb-3`}
                    >
                      {title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 bg-${colors.border}-400/20 text-${colors.border}-400 rounded-full text-xs font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-${colors.gradientFrom}-400 to-${colors.gradientTo}-400 text-gray-900 rounded-lg font-semibold hover:from-${colors.gradientFrom}-300 hover:to-${colors.gradientTo}-300 transition-all duration-300 text-sm`}
                    >
                      View Live Demo
                      <Zap className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              SKILLS & EXPERTISE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My technical arsenal for building modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Technologies */}
            <div className="p-6 bg-gray-900/80 rounded-xl border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20 backdrop-blur-sm hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Code2 className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-xl font-bold text-orange-400">Frontend</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">React.js</span>
                  <span className="text-orange-400 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-[90%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">JavaScript</span>
                  <span className="text-orange-400 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-[85%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">HTML/CSS</span>
                  <span className="text-orange-400 font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-[95%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">TypeScript</span>
                  <span className="text-orange-400 font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>

            {/* Styling & Design */}
            <div className="p-6 bg-gray-900/80 rounded-xl border border-red-400/30 hover:border-red-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-400/20 backdrop-blur-sm hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-red-400">Styling</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tailwind CSS</span>
                  <span className="text-red-400 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-400 to-orange-400 h-2 rounded-full w-[90%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">CSS3</span>
                  <span className="text-red-400 font-semibold">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-400 to-orange-400 h-2 rounded-full w-[88%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Responsive Design</span>
                  <span className="text-red-400 font-semibold">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-400 to-orange-400 h-2 rounded-full w-[92%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SASS/SCSS</span>
                  <span className="text-red-400 font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-400 to-orange-400 h-2 rounded-full w-[70%]"></div>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="p-6 bg-gray-900/80 rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 backdrop-blur-sm hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400">Tools</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Git & GitHub</span>
                  <span className="text-yellow-400 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-[85%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Vite</span>
                  <span className="text-yellow-400 font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-[80%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">VS Code</span>
                  <span className="text-yellow-400 font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-[95%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">NPM/Yarn</span>
                  <span className="text-yellow-400 font-semibold">78%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-[78%]"></div>
                </div>
              </div>
            </div>

            {/* State Management & APIs */}
            <div className="p-6 bg-gray-900/80 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold text-cyan-400">
                  State & APIs
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Context API</span>
                  <span className="text-cyan-400 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-[85%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">REST APIs</span>
                  <span className="text-cyan-400 font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Fetch/Axios</span>
                  <span className="text-cyan-400 font-semibold">82%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-[82%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Local Storage</span>
                  <span className="text-cyan-400 font-semibold">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-[88%]"></div>
                </div>
              </div>
            </div>

            {/* Performance & Optimization */}
            <div className="p-6 bg-gray-900/80 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 backdrop-blur-sm hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Gamepad2 className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-400">
                  Performance
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Code Optimization</span>
                  <span className="text-purple-400 font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-[75%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Lazy Loading</span>
                  <span className="text-purple-400 font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-[70%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Bundle Optimization</span>
                  <span className="text-purple-400 font-semibold">68%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-[68%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SEO Basics</span>
                  <span className="text-purple-400 font-semibold">72%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-[72%]"></div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-6 bg-gray-900/80 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 backdrop-blur-sm hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-400">
                  Soft Skills
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Problem Solving</span>
                  <span className="text-green-400 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-[90%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Team Collaboration</span>
                  <span className="text-green-400 font-semibold">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-[88%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Communication</span>
                  <span className="text-green-400 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-[85%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Adaptability</span>
                  <span className="text-green-400 font-semibold">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              EXPERIENCE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 hidden md:block"></div>

              <div className="space-y-12">
                <div className="relative flex items-start space-x-8">
                  <div className="hidden md:block w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1 p-6 bg-gray-900/80 rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-yellow-400">
                        Frontend Developer
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        September 2024 - Present
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-orange-400 mb-3">
                      Handyease Pvt Ltd
                    </h4>

                    <div className="space-y-3">
                      <p className="text-gray-300">
                        Responsible for designing, developing, and optimizing
                        user-facing features usingmodern frontend technologies
                        such as Tailwind , JavaScript, and NextJS.
                        Collaboratedclosely with UX/UI designers and backend
                        developers to implement responsive andaccessible web
                        interfaces. Ensured cross-browser compatibility,
                        performanceoptimization, and seamless user experience.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-300">
                            Next & TypeScript
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300">
                            Responsive Design
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">User Experience</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-300">
                            Performance Optimization
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CONNECT WITH ME
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something
              amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-6 bg-gray-900/80 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 backdrop-blur-sm">
                <Mail className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Email
                </h3>
                <p className="text-gray-300">shouziadeeb123@email.com</p>
              </div>

              <div className="p-6 bg-gray-900/80 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                  Phone
                </h3>
                <p className="text-gray-300">+91 9756304445</p>
              </div>

              <div className="p-6 bg-gray-900/80 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-400">
                  Location
                </h3>
                <p className="text-gray-300">Available for Remote Work</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="p-8 bg-gray-900/80 rounded-2xl border border-cyan-400/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                  Social Links
                </h3>

                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/shouziadeeb"
                    className="p-4 bg-gray-700/50 rounded-full border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shouzab-farooqui-1a0040298"
                    className="p-4 bg-gray-700/50 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="#"
                    className="p-4 bg-gray-700/50 rounded-full border border-purple-400/30 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="/Shouzab07.pdf"
                    download="Shouzab_Farooqui_Resume.pdf"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg font-semibold text-gray-900 hover:from-green-300 hover:to-cyan-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-400/25"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/90 border-t border-gray-800 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Gamepad2 className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SHOUZAB FAROOQUI
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 Shouzab Farooqui. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Crafted with passion and cutting-edge technology
              </p>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-cyan-400 rotate-45 animate-spin-slow"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-purple-400 rotate-12 animate-pulse"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
