import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import profileImg from "./mine.jpeg";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

const skills = [
  "C++",
  "Python",
  "React & Vite",
  "Node.js",
  "HTML & CSS",
  "JavaScript",
  "Data Structures & Algorithms",
  "Machine Learning (beginner)",
  "C Programming",
  "Git & GitHub",
  "REST APIs",
  "SQL & Databases",
  "Problem Solving",
  "Linux Basics",
  "Agile Methodologies",
  "UI/UX Design",
  "Debugging & Testing",
  "Data Analysis",
  "Cloud Basics",
  "OOP Concepts",
  "Command Line",
  "APIs Integration",
  "Responsive Design",
  "Version Control",
  "Problem Decomposition",
  "Continuous Learning",
];

const projects = [
  {
    title: "BluEyes - Photography Website",
    tag: "Web Dev / UI",
    desc: "A full photography brand site with candid, portrait, and wedding flows plus smooth animations.",
    link: "https://blu-eyes.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    featured: true,
  },
  {
    title: "LinkHub - Upside Down Links",
    tag: "Web App / Links",
    desc: "A Stranger Things themed link-in-bio hub (like Linktree) where all my important links live inside the Upside Down.",
    link: "#", // replace with your real deployment link when ready
    image:
      "https://imgs.search.brave.com/cJ8ZbATuKaVjLbVvx-eJd346HMaxbE5d7_ltX6xrgZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YXBs/aW5rLnN0L3AvZi9m/LzQvZi82NjUzMTc4/NC5wbmc_MD8w",
    gradient: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    featured: true,
  },
  {
    title: "Portfolio Website",
    tag: "Web Dev / Design",
    desc: "This Stranger Things styled portfolio where I showcase my projects, skills, and experience.",
    link: "https://personal-portfolio-ritik.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
  {
    title: "QT - Quick Tourist",
    tag: "Mobile App / React Native",
    desc: "A city-travel companion app that connects like-minded people to explore together with a focus on safety and spontaneous local plans.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Corus - Mental Health App",
    tag: "Product / UX",
    desc: "A mental health support app for students with mood tracking, content recommendations, and counselor integration.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    title: "JARVIS-like AI Assistant",
    tag: "AI / Automation",
    desc: "An intelligent assistant in Python that responds to voice commands and automates tasks like opening apps and answering queries.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    title: "Craving Hub - Food Delivery App",
    tag: "Website / UI",
    desc: "A food delivery app with real-time order tracking, personalized recommendations, and a user-friendly interface.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
    featured: true,
  },
];

const experiences = [
  {
    role: "B.Tech - Mathematics & Computing",
    org: "RGIPT, Jais",
    time: "2025 - Present",
    desc: "Exploring core CS, math, and AI while building real-world projects and hackathon ideas.",
  },
  {
    role: "Full Stack Developer Intern",
    org: "Prasunet Company",
    time: "March 2025-April 2025",
    desc: "Worked on developing and maintaining web applications using React and Node.js, improving user experience and performance.",
  },
  {
    role: "Member - Kode Club RGIPT",
    org: "Science & Technological Council",
    time: "2025 - Present",
    desc: "Organizing coding workshops, hackathons, and tech talks to foster a developer community on campus.",
  },
  {
    role: "Member - E-Cell RGIPT",
    org: "Entrepreneurship Cell",
    time: "2025 - Present",
    desc: "Learning startup mindset, pitching ideas, and building products around real problems.",
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  return (
    <div className="page">
      {/* Glow overlay */}
      <div className="red-glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Ritik. Built with code & chaos from the
          Upside Down.
        </p>
      </footer>
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo glitch" data-text="RITIK">
        RITIK
      </div>
      <nav>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-grid">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-tagline">WELCOME TO THE UPSIDE DOWN OF MY WORK</p>
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-card">
              <div className="hero-avatar-glow" />
              <img
                src={profileImg}
                alt="Ritik Prajapati"
                className="hero-avatar"
              />
            </div>
          </div>
          <h1 className="hero-title">
            <span className="stranger-font">Ritik Prajapati</span>
          </h1>
          <p className="hero-subtitle">
            Second-year <span className="red">MnC @ RGIPT</span>, builder of
            weird ideas that mix <span className="red">code</span>,{" "}
            <span className="red">AI</span>, and{" "}
            <span className="red">design</span>.
          </p>
          <p className="hero-desc">
            I like turning random ideas into working projects – from mental
            health apps and finance tools to AI assistants and travel
            companions.
          </p>
          <p className="hero-desc hero-highlight">
            Recently won <span className="red">SIH&apos;25</span> and built{" "}
            <span className="red">LinkHub</span>, a Stranger Things themed
            link-in-bio platform.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-ghost"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
        <motion.div
          className="hero-3d-card"
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ rotateY: 10, rotateX: -5, scale: 1.03 }}
        >
          <div className="hero-3d-inner">
            <div className="hero-3d-layer bg" />
            <div className="hero-3d-layer fog" />
            <div className="hero-3d-content">
              <p className="hero-3d-label">CURRENTLY</p>
              <h2>Building & Learning</h2>
              <ul>
                <li>🔹 Data Structures & Algorithms</li>
                <li>🔹 Full Stack (React + Node)</li>
                <li>🔹 AI & Machine Learning</li>
                <li>🔹 Product thinking & UI/UX</li>
              </ul>
              <p className="hero-3d-foot">
                "Friends don&apos;t lie. Neither does clean code."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        title="About Me"
        subtitle="The kid from RGIPT who writes code like a side quest."
      />
      <div className="about-grid">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Who am I?</h3>
          <p>
            I&apos;m Ritik, a second-year B.Tech student in Mathematics and
            Computing at RGIPT. I like mixing development, design, and a bit of
            madness to build products that actually solve problems for students
            and everyday people.
          </p>
          <p>
            I enjoy hackathon-style thinking, exploring new tech like AI/ML,
            blockchain concepts, and building full-stack projects that
            don&apos;t just look good but feel good to use.
          </p>
        </motion.div>
        <motion.div
          className="about-card about-card-highlight"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>What I care about</h3>
          <ul className="about-list">
            <li>🔹 Mental health & student life products</li>
            <li>🔹 Tools that help people manage money smarter</li>
            <li>🔹 Strong fundamentals in math & CS</li>
            <li>🔹 Clean UI with a story & personality</li>
            <li>🔹 Building stuff with friends & teams</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const wallSkills = [
    { letter: "A", skill: "C++" },
    { letter: "B", skill: "Python" },
    { letter: "C", skill: "React & Vite" },
    { letter: "D", skill: "Node.js" },
    { letter: "E", skill: "HTML & CSS" },
    { letter: "F", skill: "JavaScript" },
    { letter: "G", skill: "Machine Learning(Beginner)" },
    { letter: "H", skill: "Data Structures & Algorithms" },
    { letter: "I", skill: "C Programming" },
    { letter: "J", skill: "Git & GitHub" },
    { letter: "K", skill: "REST APIs" },
    { letter: "L", skill: "Flutter" },
    { letter: "M", skill: "Kotlin" },
    { letter: "N", skill: "Dart" },
    { letter: "O", skill: "Full Stack Development" },
    { letter: "P", skill: "" },
    { letter: "Q", skill: "" },
    { letter: "R", skill: "" },
    { letter: "S", skill: "" },
    { letter: "T", skill: "" },
    { letter: "U", skill: "" },
    { letter: "V", skill: "" },
    { letter: "W", skill: "" },
    { letter: "X", skill: "" },
    { letter: "Y", skill: "" },
    { letter: "Z", skill: "" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % wallSkills.length);
    }, 900);

    return () => clearInterval(interval);
  }, [wallSkills.length]);

  return (
    <section id="skills" className="section">
      <SectionHeading
        title="Skills"
        subtitle="Not maxed out yet, but levelling up fast."
      />
      {/* Stranger Things style animated skill wall */}
      <div className="skills-wall">
        <div className="skills-wall-inner">
          <div className="skills-wall-grid">
            {wallSkills.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.letter}
                  className={`skills-wall-letter ${isActive ? "active" : ""}`}
                >
                  <span>{item.letter}</span>
                  {isActive && (
                    <div className="skills-wall-label">{item.skill}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        title="Projects"
        subtitle="Things I built instead of just thinking about them."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target={project.link === "#" ? "_self" : "_blank"}
            rel="noreferrer"
            className={`project-card ${
              project.featured ? "project-featured" : ""
            }`}
            whileHover={{ y: -15, rotateY: 5, rotateX: -5, scale: 1.03 }}
            initial={{ opacity: 0, y: 30, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="project-image-wrapper">
              <div
                className="project-image"
                style={{
                  backgroundImage: project.image
                    ? `url(${project.image})`
                    : project.gradient,
                  background: project.image
                    ? `url(${project.image})`
                    : project.gradient,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="project-image-overlay" />
              <div className="project-image-glow" />
            </div>
            <div className="project-content">
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span className="project-link">
                {project.link === "#"
                  ? "Details coming soon"
                  : "Open project ↗"}
              </span>
            </div>
            <div className="project-glow" />
            <div className="project-particles">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        title="Experience & Education"
        subtitle="Every semester and side-project adds a layer."
      />
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            className="experience-card"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="experience-dot" />
            <h3>{exp.role}</h3>
            <p className="experience-org">{exp.org}</p>
            <p className="experience-time">{exp.time}</p>
            <p className="experience-desc">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  // Check if EmailJS is configured
  const isEmailJSConfigured = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    return (
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== "your_service_id" &&
      templateId !== "your_template_id" &&
      publicKey !== "your_public_key"
    );
  };

  // Initialize EmailJS when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (
      publicKey &&
      publicKey !== "your_public_key" &&
      publicKey.trim() !== ""
    ) {
      try {
        emailjs.init({
          publicKey: publicKey.trim(),
        });
        console.log("EmailJS initialized successfully");
      } catch (error) {
        console.error("EmailJS initialization error:", error);
      }
    } else {
      console.warn("EmailJS Public Key not found or invalid");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "your_service_id" ||
      templateId === "your_template_id" ||
      publicKey === "your_public_key"
    ) {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "error",
        message:
          "Email service not configured. Please set up EmailJS credentials. Check EMAILJS_SETUP.md for instructions.",
      });
      console.error("EmailJS not configured. Missing environment variables:");
      console.error("VITE_EMAILJS_SERVICE_ID:", serviceId ? "✓" : "✗");
      console.error("VITE_EMAILJS_TEMPLATE_ID:", templateId ? "✓" : "✗");
      console.error("VITE_EMAILJS_PUBLIC_KEY:", publicKey ? "✓" : "✗");
      return;
    }

    try {
      // Log the public key (first 10 chars only for security) for debugging
      console.log(
        "Using Public Key:",
        publicKey ? `${publicKey.substring(0, 10)}...` : "NOT FOUND"
      );
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);

      // Re-initialize EmailJS with the public key (in case it wasn't initialized)
      emailjs.init({
        publicKey: publicKey.trim(),
      });

      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: `${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`,
        to_email: "vijayshankarprajapati29@gmail.com",
        reply_to: formData.email,
      });

      console.log("EmailJS Success:", result);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error Details:", error);
      console.error("Error Code:", error?.code);
      console.error("Error Text:", error?.text);
      console.error("Error Status:", error?.status);

      let errorMessage = "Failed to send message. ";

      if (error?.text) {
        errorMessage += `Error: ${error.text}. `;
      } else if (error?.message) {
        errorMessage += `Error: ${error.message}. `;
      }

      // Specific help for Public Key errors
      if (
        error?.text?.includes("Public Key") ||
        error?.text?.includes("public key") ||
        error?.text?.includes("invalid")
      ) {
        errorMessage += "\n\n🔑 Public Key Issue Detected!\n\n";
        errorMessage += "Steps to fix:\n";
        errorMessage +=
          "1. Go to: https://dashboard.emailjs.com/admin/account\n";
        errorMessage += "2. Scroll to 'API Keys' section\n";
        errorMessage +=
          "3. Copy the PUBLIC KEY (long string, not the private key)\n";
        errorMessage += "4. Open your .env file in the project root\n";
        errorMessage += "5. Update this line:\n";
        errorMessage += "   VITE_EMAILJS_PUBLIC_KEY=your_actual_key_here\n";
        errorMessage += "6. Make sure:\n";
        errorMessage += "   - No spaces around the = sign\n";
        errorMessage += "   - No quotes around the value\n";
        errorMessage += "   - You copied the ENTIRE key\n";
        errorMessage += "7. Save the file and restart your dev server\n\n";
        errorMessage +=
          "Current Public Key (first 10 chars): " +
          (publicKey ? `${publicKey.substring(0, 10)}...` : "NOT FOUND");
      }

      // Specific help for Service ID errors
      if (
        error?.text?.includes("service ID") ||
        error?.text?.includes("Service ID") ||
        (error?.text?.includes("service") && error?.text?.includes("not found"))
      ) {
        errorMessage += "\n\n📧 Service ID Issue Detected!\n\n";
        errorMessage += "Steps to fix:\n";
        errorMessage +=
          "1. Go to: https://dashboard.emailjs.com/admin/integration\n";
        errorMessage += "2. Click 'Email Services' in the left sidebar\n";
        errorMessage +=
          "3. Find your email service (should show as 'Active')\n";
        errorMessage += "4. Copy the Service ID (starts with 'service_')\n";
        errorMessage += "5. Open your .env file\n";
        errorMessage += "6. Update this line:\n";
        errorMessage += "   VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx\n";
        errorMessage += "7. Make sure:\n";
        errorMessage += "   - Service ID starts with 'service_'\n";
        errorMessage += "   - Service is ACTIVE in EmailJS dashboard\n";
        errorMessage += "   - No spaces or quotes\n";
        errorMessage += "8. Save and restart dev server\n\n";
        errorMessage +=
          "Current Service ID: " + (serviceId ? serviceId : "NOT FOUND");
        errorMessage += "\n\n💡 If you don't have a service yet:\n";
        errorMessage += "   1. Go to Email Services\n";
        errorMessage += "   2. Click 'Add New Service'\n";
        errorMessage += "   3. Choose Gmail (or your provider)\n";
        errorMessage += "   4. Connect your account\n";
        errorMessage += "   5. Copy the Service ID";
      }

      // Specific help for Template ID errors
      if (
        error?.text?.includes("template") ||
        error?.text?.includes("Template")
      ) {
        errorMessage += "\n\n📝 Template ID Issue Detected!\n\n";
        errorMessage += "Steps to fix:\n";
        errorMessage +=
          "1. Go to: https://dashboard.emailjs.com/admin/integration\n";
        errorMessage += "2. Click 'Email Templates' in the left sidebar\n";
        errorMessage += "3. Find your template\n";
        errorMessage += "4. Copy the Template ID (starts with 'template_')\n";
        errorMessage += "5. Update your .env file:\n";
        errorMessage += "   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx\n";
        errorMessage += "6. Make sure template is saved and active\n";
        errorMessage += "7. Save and restart dev server\n\n";
        errorMessage +=
          "Current Template ID: " + (templateId ? templateId : "NOT FOUND");
      }

      errorMessage +=
        "\n\nOr email me directly at vijayshankarprajapati29@gmail.com";

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        title="Contact"
        subtitle="If you want to build something crazy, or just talk about ideas, I'm in."
      />
      <div className="contact-grid">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let&apos;s connect</h3>
          <p>
            You can reach me through email or socials. I&apos;m open to
            collaborations, internships, hackathons, or just brainstorming
            sessions.
          </p>
          <ul className="contact-list">
            <li>
              <span className="label">Email:</span>{" "}
              <a href="mailto:24mc3040@rgipt.ac.in">24mc3040@rgipt.ac.in</a>
            </li>
            <li>
              <span className="label">GitHub:</span>{" "}
              <a
                href="https://github.com/Ritik7307"
                target="_blank"
                rel="noreferrer"
              >
                Ritik7307
              </a>
            </li>
            <li>
              <span className="label">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/ritik-prajapati-942799316/"
                target="_blank"
                rel="noreferrer"
              >
                Ritik Prajapati
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell me about the idea you have..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </label>
          </div>

          {submitStatus.type && (
            <div className={`form-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus.type === "error" && (
            <p className="contact-note">
              You can also email me directly at{" "}
              <a href="mailto:vijayshankarprajapati29@gmail.com">
                vijayshankarprajapati29@gmail.com
              </a>
            </p>
          )}

          {!isEmailJSConfigured() && (
            <div className="form-config-warning">
              <p>
                ⚠️ Email service not configured. Please set up EmailJS to enable
                form submissions.
              </p>
              <p className="config-help">
                See <strong>EMAILJS_SETUP.md</strong> for setup instructions, or
                email directly at{" "}
                <a href="mailto:vijayshankarprajapati29@gmail.com">
                  vijayshankarprajapati29@gmail.com
                </a>
              </p>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="section-title">{title}</h2>
      <div className="section-divider" />
    </div>
  );
}
