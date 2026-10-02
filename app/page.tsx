"use client";

import { useEffect, useRef, type MouseEvent } from "react";

const skills = [
  "Java", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux",
  "Vue.js", "Struts", "Spring Boot", "Node.js", "REST APIs", "SQL",
  "Apache Solr", "Git", "Docker", "Kubernetes", "Tailwind CSS",
  "Material UI", "Axios", "OpenAI API", "Gemini API", "SSE",
];

const projects = [
  {
    number: "01",
    title: "B2B eCommerce Platform",
    description:
      "Enterprise B2B eCommerce development across frontend, backend, database and search layers, including catalog workflows, navigation, forms, APIs and customer-specific enhancements.",
    technologies: ["Java", "React.js", "JavaScript", "SQL", "REST APIs", "eCommerce"],
  },
  {
    number: "02",
    title: "Product Search & Discovery",
    description:
      "Product search and discovery workflows using Apache Solr, supporting indexing, catalog synchronization, product visibility, search results and product grouping functionality.",
    technologies: ["Apache Solr", "Java", "SQL", "Search", "PIM", "eCommerce"],
  },
  {
    number: "03",
    title: "Enterprise Web Applications",
    description:
      "Enterprise application modules across frontend and backend layers, including REST integrations, database interaction, debugging, testing and production support.",
    technologies: ["Java", "Struts", "JavaScript", "REST APIs", "SQL", "Git"],
  },
];

const architecture = [
  { step: "01", title: "Frontend", text: "React.js · Next.js · JavaScript · TypeScript" },
  { step: "02", title: "APIs & Logic", text: "Java · Struts · Node.js · REST APIs" },
  { step: "03", title: "Data", text: "SQL · Product data · Business workflows" },
  { step: "04", title: "Search", text: "Apache Solr · Indexing · Product discovery" },
];

export default function Home() {
  const profileRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const enter = () => cursor.classList.add("cursor-visible");
    const leave = () => cursor.classList.remove("cursor-visible");

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerenter", enter);
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerenter", enter);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleProfileMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = profileRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.setProperty("--image-x", `${x * 18}px`);
    element.style.setProperty("--image-y", `${y * 14}px`);
    element.style.setProperty("--rotate-x", `${-y * 5}deg`);
    element.style.setProperty("--rotate-y", `${x * 6}deg`);
    element.style.setProperty("--glow-x", `${x * 40}px`);
    element.style.setProperty("--glow-y", `${y * 40}px`);
    element.classList.add("is-hovering");
  };

  const handleProfileLeave = () => {
    const element = profileRef.current;
    if (!element) return;
    ["--image-x", "--image-y", "--glow-x", "--glow-y"].forEach((v) => element.style.setProperty(v, "0px"));
    element.style.setProperty("--rotate-x", "0deg");
    element.style.setProperty("--rotate-y", "0deg");
    element.classList.remove("is-hovering");
  };

  return (
    <main>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />

      <nav className="navbar">
        <a href="#home" className="logo">KS<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
        <a href="mailto:kalawantsalunkhe2808@gmail.com" className="nav-contact magnetic">Let&apos;s Talk <span>↗</span></a>
      </nav>

      <div className="scroll-progress" aria-hidden="true" />

      <section id="home" className="hero section-container">
        <div className="hero-content">
          <p className="eyebrow hero-reveal">FULL STACK SOFTWARE ENGINEER <span>· PUNE, INDIA</span></p>
          <h1 className="hero-title hero-reveal">
            Kalawant<br /><span>Salunkhe</span><br /><em>Builds.</em>
          </h1>
          <p className="hero-description hero-reveal">
            Full Stack Software Engineer building scalable enterprise applications and B2B eCommerce experiences across frontend, backend, data and search.
          </p>
          <div className="hero-actions hero-reveal">
            <a href="#projects" className="primary-button magnetic">View My Work <span>↗</span></a>
            <a href="#contact" className="secondary-button magnetic">Get In Touch</a>
          </div>
          <div className="hero-stats hero-reveal">
            <div><strong>3.8+</strong><span>YEARS EXPERIENCE</span></div>
            <div><strong>FULL STACK</strong><span>ENGINEERING</span></div>
            <div><strong>B2B</strong><span>eCOMMERCE</span></div>
          </div>
        </div>

        <div className="hero-side hero-reveal">
          <div ref={profileRef} className="profile-wrapper" onMouseMove={handleProfileMove} onMouseLeave={handleProfileLeave}>
            <div className="profile-grid" />
            <div className="profile-glow" />
            <div className="profile-image-container">
              <img src="/profile.jpg" alt="Kalawant Salunkhe" className="profile-image" />
              <div className="profile-scanline" />
            </div>
            <div className="profile-label"><span>FULL STACK</span><span>SOFTWARE ENGINEER</span></div>
            <div className="profile-corner profile-corner-top" />
            <div className="profile-corner profile-corner-bottom" />
            <span className="profile-code">KS / 001</span>
          </div>
          <div className="availability"><span className="status-dot" /> Open to interesting opportunities</div>
          <div className="hero-index"><span>01</span><span>/</span><span>06</span></div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track">
        {Array.from({ length: 2 }).flatMap((_, i) => [
          <span key={`a${i}`}>FULL STACK DEVELOPMENT</span>, <i key={`b${i}`}>✦</i>,
          <span key={`c${i}`}>ENTERPRISE APPLICATIONS</span>, <i key={`d${i}`}>✦</i>,
          <span key={`e${i}`}>B2B eCOMMERCE</span>, <i key={`f${i}`}>✦</i>,
          <span key={`g${i}`}>REACT</span>, <i key={`h${i}`}>✦</i>,
          <span key={`i${i}`}>JAVA</span>, <i key={`j${i}`}>✦</i>,
          <span key={`k${i}`}>APACHE SOLR</span>, <i key={`l${i}`}>✦</i>,
        ])}
      </div></div>

      <section id="about" className="section section-container">
        <div className="section-label reveal"><span>01</span> ABOUT ME</div>
        <div className="about-grid reveal">
          <div><h2>Turning complex<br />requirements into<br /><span>reliable software.</span></h2></div>
          <div className="about-text">
            <p>I&apos;m a Full Stack Software Engineer with 3.8 years of professional experience developing and maintaining enterprise applications and B2B eCommerce platforms.</p>
            <p>My experience spans Java, Struts, JavaScript, React.js, SQL, REST APIs and Apache Solr, with hands-on work across frontend, backend, database and search layers.</p>
            <p>I enjoy solving complex technical problems, debugging production issues, learning new technologies and building software that is reliable, maintainable and performance-oriented.</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-container">
        <div className="section-label reveal"><span>02</span> EXPERIENCE</div>
        <div className="experience-list">
          <article className="experience-item reveal"><div className="experience-number">01</div><div className="experience-main">
            <div className="experience-heading"><div><h3>Unilog Content Solution</h3><p>Software Engineer</p></div><span>APR 2026 — PRESENT</span></div>
            <p className="experience-description">Developing and maintaining enterprise B2B eCommerce applications using Java, Struts, JavaScript, React.js, SQL, REST APIs and Apache Solr.</p>
            <p className="experience-description">Working across product search, catalog navigation, static pages, forms, product data, PIM workflows, integrations, debugging, testing and production support.</p>
            <div className="tag-list">{["Java","Struts","JavaScript","React.js","SQL","REST APIs","Apache Solr","PIM"].map((x)=><span key={x}>{x}</span>)}</div>
          </div></article>
          <article className="experience-item reveal"><div className="experience-number">02</div><div className="experience-main">
            <div className="experience-heading"><div><h3>Cybage Software</h3><p>Software Engineer</p></div><span>FEB 2023 — APR 2026</span></div>
            <p className="experience-description">Developed and maintained full-stack enterprise applications based on business and client requirements, contributing across frontend and backend development.</p>
            <p className="experience-description">Developed React.js interfaces, REST APIs and database functionality while working with SQL, Node.js, debugging tools, testing workflows and Git-based development practices.</p>
            <div className="tag-list">{["JavaScript","React.js","Node.js","REST APIs","SQL","Git"].map((x)=><span key={x}>{x}</span>)}</div>
          </div></article>
        </div>
      </section>

      <section id="skills" className="section section-container">
        <div className="section-label reveal"><span>03</span> TECHNOLOGIES</div>
        <div className="skills-header reveal"><h2>Tools I use to<br /><span>build things.</span></h2><p>Frontend, backend, database, search, DevOps and AI technologies used across professional and personal development work.</p></div>
        <div className="skills-grid reveal">{skills.map((skill,index)=><div className="skill-card" key={skill}><span>{String(index+1).padStart(2,"0")}</span><strong>{skill}</strong><b>↗</b></div>)}</div>
      </section>

      <section className="architecture-section">
        <div className="section-container">
          <div className="section-label reveal"><span>04</span> HOW I THINK</div>
          <div className="architecture-header reveal"><h2>From interface<br />to <span>infrastructure.</span></h2><p>I work across the layers that turn requirements into dependable digital products.</p></div>
          <div className="architecture-flow">{architecture.map((item,index)=><div className="architecture-card reveal" key={item.step}><span>{item.step}</span><div className="architecture-icon">{index === 0 ? "⌘" : index === 1 ? "⌁" : index === 2 ? "◫" : "⌕"}</div><h3>{item.title}</h3><p>{item.text}</p>{index < architecture.length-1 && <b className="flow-arrow">→</b>}</div>)}</div>
        </div>
      </section>

      <section id="projects" className="section section-container">
        <div className="section-label reveal"><span>05</span> SELECTED WORK</div>
        <div className="projects-header reveal"><h2>Things I&apos;ve<br /><span>worked on.</span></h2><p>Selected areas of work from my experience building enterprise software and B2B eCommerce applications.</p></div>
        <div className="projects-list">{projects.map((project)=><article className="project-card reveal" key={project.number}><div className="project-top"><span>{project.number}</span><span>↗</span></div><div className="project-line" /><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.map((x)=><span key={x}>{x}</span>)}</div><div className="project-hover-number">{project.number}</div></article>)}</div>
      </section>

      <section className="section section-container">
        <div className="section-label reveal"><span>06</span> EDUCATION</div>
        <div className="education-grid">
          <div className="education-card reveal"><div><h3>PG-Diploma in Advanced Computing</h3><p>CDAC Pune</p><p>2022 — 2023 · Grade A</p></div><span>PG-DAC</span></div>
          <div className="education-card reveal"><div><h3>Bachelor of Engineering</h3><p>Mechanical Engineering · Pune University</p><p>2017 — 2021 · CGPA 7.97</p></div><span>B.E.</span></div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-label reveal"><span>07</span> CONTACT</div>
          <div className="contact-content reveal">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let&apos;s build<br />something <span>great.</span></h2>
            <a href="mailto:kalawantsalunkhe2808@gmail.com" className="contact-email magnetic">kalawantsalunkhe2808@gmail.com <span>↗</span></a>
            <div className="contact-links"><a href="https://www.linkedin.com/in/kalawant-salunkhe-229a541b4/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:kalawantsalunkhe2808@gmail.com">Email ↗</a></div>
          </div>
        </div>
      </section>

      <footer className="footer section-container"><span>© 2026 Kalawant Salunkhe</span><div><a href="#home">BACK TO TOP ↑</a></div><span>BUILT WITH NEXT.JS</span></footer>
    </main>
  );
}
