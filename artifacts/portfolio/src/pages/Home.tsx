import { motion } from "framer-motion";
import { ArrowRight, Code2, GraduationCap, Layout, MapPin, Search, Star, Terminal } from "lucide-react";
import { useEffect } from "react";

const ANIM_STAGGER = 0.1;

export default function Home() {
  // Ensure dark mode is active
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground font-sans">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight text-white cursor-pointer" onClick={() => scrollTo('top')}>
            DP.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 rounded-none bg-white text-background text-sm font-bold tracking-wide hover:bg-secondary transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main id="top" className="pt-32">
        
        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto px-6 relative">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl z-10"
          >
            <h2 className="text-secondary font-mono tracking-widest text-sm uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-secondary" />
              Full-Stack Developer
            </h2>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-white tracking-tight mb-8">
              Divyanshu<br />Pandey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              Computer Science undergraduate from SRMCEM, Lucknow, crafting precise, thoughtful, and scalable technical solutions.
            </p>
            
            <div className="mt-12 flex items-center gap-6">
              <button 
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-3 px-6 py-4 bg-secondary text-background font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors"
              >
                View Work <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="text-sm font-bold uppercase tracking-wider text-white hover:text-secondary transition-colors"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-32 bg-card/30 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="font-serif text-4xl text-white mb-4">About Me</h2>
              <div className="w-8 h-[2px] bg-secondary" />
            </div>
            <div className="md:col-span-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light mb-8"
              >
                I am a dedicated Computer Science student (B.Tech, 2023–2027) with a passion for bridging the gap between intricate backend systems and refined user interfaces.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid sm:grid-cols-2 gap-8 text-sm"
              >
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Education</h4>
                  <p className="text-muted-foreground">B.Tech in Computer Science Engineering</p>
                  <p className="text-muted-foreground">SRMCEM, Lucknow (CGPA: 7.2)</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Timeline</h4>
                  <p className="text-muted-foreground">2023 – 2027</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-32 max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white mb-16 text-center">Technical Arsenal</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Java", icon: Code2 },
              { name: "Python", icon: Terminal },
              { name: "HTML & CSS", icon: Layout },
              { name: "JavaScript", icon: Code2 },
              { name: "MySQL", icon: Search },
              { name: "DSA", icon: Terminal },
              { name: "Git/GitHub", icon: Code2 },
              { name: "OOP", icon: Code2 },
              { name: "Responsive Web", icon: Layout },
              { name: "REST API", icon: Search },
              { name: "Problem Solving", icon: Star },
              { name: "CLI Basics", icon: Terminal },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 border border-white/5 bg-card/20 flex flex-col items-center justify-center text-center gap-4 hover:border-secondary/50 hover:bg-secondary/5 transition-all group"
              >
                <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
                <span className="font-mono text-sm tracking-tight text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-32 bg-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
              <div>
                <h2 className="font-serif text-4xl text-white mb-4">Experience</h2>
                <div className="w-8 h-[2px] bg-secondary" />
              </div>
            </div>

            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8 group"
              >
                <div className="md:col-span-1 text-sm font-mono text-muted-foreground pt-1">
                  10 Days Internship
                </div>
                <div className="md:col-span-3 pb-12 border-b border-white/10 group-last:border-none">
                  <h3 className="text-2xl font-serif text-white mb-2">Web Development Intern</h3>
                  <p className="text-secondary font-mono text-sm mb-6">SRDT</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed web applications utilizing HTML, CSS, and JavaScript. Integrated MySQL databases for efficient data management and successfully executed CRUD operations to ensure robust full-stack functionality.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8 group"
              >
                <div className="md:col-span-1 text-sm font-mono text-muted-foreground pt-1">
                  Short Term Training
                </div>
                <div className="md:col-span-3 pb-12 border-b border-white/10 group-last:border-none">
                  <h3 className="text-2xl font-serif text-white mb-2">Training Program</h3>
                  <p className="text-secondary font-mono text-sm mb-6">L&T</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Engaged in mobile app development concepts, grasping industry-level software engineering practices, and collaborating effectively within teamwork-driven environments.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white mb-4">Selected Work</h2>
          <div className="w-8 h-[2px] bg-secondary mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative block h-full"
            >
              <div className="h-full border border-white/10 bg-card/30 p-8 hover:border-secondary/30 transition-colors flex flex-col">
                <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-widest">HTML | CSS | JavaScript</div>
                <h3 className="text-3xl font-serif text-white mb-4">Portfolio Website</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  A responsive personal portfolio leveraging CSS Flexbox and Grid. Implemented smooth UI interactions and aesthetic transitions entirely with vanilla JavaScript.
                </p>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-background transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative block h-full"
            >
              <div className="h-full border border-white/10 bg-card/30 p-8 hover:border-secondary/30 transition-colors flex flex-col">
                <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-widest">Python | JS | MySQL</div>
                <h3 className="text-3xl font-serif text-white mb-4">Rental House System</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  A full-stack property management platform. Features include a robust MySQL backend, secure user authentication, advanced property filtering, and a comprehensive admin panel.
                </p>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-background transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-32 bg-white/5 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24">
            
            {/* Education Timeline */}
            <div>
              <h2 className="font-serif text-3xl text-white mb-12 flex items-center gap-3">
                <GraduationCap className="text-secondary w-6 h-6" />
                Education
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  { deg: "B.Tech CSE", inst: "SRMCEM Lucknow", score: "CGPA 7.2", year: "2023–2027" },
                  { deg: "Class XII", inst: "CBSE Board", score: "80%", year: "2023" },
                  { deg: "Class X", inst: "CBSE Board", score: "90%", year: "2021" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 md:pl-0"
                  >
                    <div className="md:hidden absolute left-0 w-4 h-4 rounded-full bg-background border-2 border-secondary top-1" />
                    <div className="p-6 bg-card/20 border border-white/5 relative">
                      <div className="text-secondary font-mono text-sm mb-2">{item.year}</div>
                      <h4 className="text-xl text-white font-serif mb-1">{item.deg}</h4>
                      <p className="text-muted-foreground text-sm">{item.inst}</p>
                      <p className="text-white/60 text-sm mt-2 font-mono">{item.score}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <h2 className="font-serif text-3xl text-white mb-12 flex items-center gap-3">
                <Star className="text-secondary w-6 h-6" />
                Achievements
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Google Cloud Study Jam", subtitle: "Certified (2025)" },
                  { title: "SRDT Web Development Internship", subtitle: "Certified" },
                  { title: "3 Days UHV Workshop", subtitle: "Certificate of Participation" },
                  { title: "Inter College Tech Fest", subtitle: "Winner (Programming/Development)" },
                  { title: "Scout Guide National Program", subtitle: "Gold Medal (2018)" },
                  { title: "Intra School Cricket Competition", subtitle: "Gold Medal (2022)" },
                  { title: "School Science Exhibition", subtitle: "Silver Medal (2017)" },
                  { title: "College Hostel Sports Committee", subtitle: "Member (Leadership & Event Management)" }
                ].map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center p-4 border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-white/90 group-hover:text-white transition-colors">{cert.title}</span>
                    <span className="text-xs font-mono text-muted-foreground text-right ml-4">{cert.subtitle}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-secondary font-mono tracking-widest text-sm uppercase mb-6">What's Next?</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white mb-8">Get In Touch</h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a 
              href="mailto:divyanshu@example.com"
              className="inline-block px-8 py-5 bg-white text-background font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-colors"
            >
              Say Hello
            </a>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 border-t border-white/10 text-center text-sm font-mono text-muted-foreground flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} Divyanshu Pandey.</p>
          <p className="mt-4 md:mt-0">Designed & Engineered with Precision.</p>
        </footer>

      </main>
    </div>
  );
}
