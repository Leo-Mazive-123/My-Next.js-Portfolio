import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-100">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section
        id="home"
        className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ho.png')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gray bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">
            Hi, I’m Leo Mazive
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-100">
            A passionate <span className="text-blue-400">Full Stack Developer</span> <br />
            building amazing digital experiences ✨
          </p>

          {/* Centered Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-medium bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition"
            >
              View My Work
            </a>
            <a
              href="/Leo-Mazive-CV.pdf"
              download
              className="px-6 py-3 text-lg font-medium border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full shadow-lg transition"
            >
              Download My CV
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      <Footer />
    </main>
  );
}

