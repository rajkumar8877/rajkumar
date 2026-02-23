import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Moon, Sun, Download } from "lucide-react";

export default function RajKumarPortfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500">
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="font-bold text-lg">Raj Kumar</h1>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("experience")}>Experience</button>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
              <button onClick={() => scrollToSection("blog")}>Blog</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded border">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center px-6 pt-24 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Backend Engineer | Java • Spring Boot • AWS
          </motion.h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Building scalable microservices & high-performance production systems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection("projects")} className="px-6 py-2 border rounded">View Work</button>
            <a href="/Raj_Kumar_Resume.pdf" download className="px-6 py-2 border rounded flex items-center gap-2">
              <Download size={16} /> Resume
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Backend Engineer with 4–5 years of experience building scalable,
            high-availability systems. Experienced in REST API design,
            Microservices, AWS deployments, CI/CD, and production monitoring.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 pl-6">
              <h3 className="font-semibold">Software Engineer</h3>
              <p className="text-sm opacity-70">2021 – Present</p>
              <p>
                Designed and deployed microservices serving 50K+ monthly users,
                optimized performance reducing latency by 35%, automated CI/CD
                pipelines, and handled production incidents.
              </p>
            </div>
            <div className="border-l-4 pl-6">
              <h3 className="font-semibold">Junior Developer</h3>
              <p className="text-sm opacity-70">2019 – 2021</p>
              <p>
                Built REST APIs, implemented CI/CD pipelines, supported agile releases,
                and maintained backend services.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded p-6">
              <h3 className="font-semibold text-xl mb-2">Enterprise API Platform</h3>
              <p>Scalable microservices deployed on AWS with CI/CD and monitoring.</p>
            </div>
            <div className="border rounded p-6">
              <h3 className="font-semibold text-xl mb-2">Production Observability System</h3>
              <p>Implemented monitoring dashboards reducing incident resolution time.</p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Blog</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {['Java Performance Tuning','Microservices Patterns','CI/CD Best Practices'].map((post,i) => (
              <div key={i} className="border rounded p-6">
                <h3 className="font-semibold mb-2">{post}</h3>
                <p className="text-sm opacity-70">Read detailed technical insights.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center px-6">
          <h2 className="text-3xl font-semibold mb-8">Connect</h2>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/rajkumar8877" target="_blank" rel="noreferrer"><Github /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href="mailto:yourmail@gmail.com"><Mail /></a>
          </div>
        </section>

        <footer className="text-center py-8 text-sm border-t">
          © {new Date().getFullYear()} Raj Kumar • Built with React & Tailwind
        </footer>
      </div>
    </div>
  );
}
