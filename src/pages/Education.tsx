import { Briefcase, GraduationCap, Award, Share2, Download, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Education() {
  const experiences = [
    {
      period: "Jan 2025 — Present",
      title: "Assistant Professor",
      institution: "Department of Physics, PSG Institute of Technology and Applied Research",
      url: "https://psgitech.ac.in/",
      focus: "Pnictogen-based chalcogenides, halides and chalcohalides for radiation detection and indoor photovoltaics.",
      group: "LASER group."
    },
    {
      period: "Oct 2023 — Jan 2025",
      title: "Assistant Professor",
      institution: "Department of Physics, PSG Institute of Advanced Studies",
      url: "https://www.psgias.ac.in/",
      focus: "Pnictogen-based chalcogenides, halides and chalcohalides for radiation detection and indoor photovoltaics.",
      group: "LASER group."
    },
    {
      period: "July 2015 — March 2018",
      title: "Junior/Senior Research Fellow",
      institution: "DAE-BRNS Project, Union Christian College Aluva, Kerala, India",
      url: "https://uccollege.edu.in/",
      focus: "Dr. E I Anila.",
      group: "Principal Investigator"
    }
  ];

  const education = [
    {
      period: "Jan 2019 — May 2023",
      degree: "Ph.D. in Materials Engineering",
      institution: "Universidad Autonóma de Nuevo León (UANL), Mexico",
      url: "https://www.uanl.mx/en/",
      thesis: "”Ultrasonic spray deposition of perovskite-inspired lead-free cesium bismuth iodide thin films for optoelectronics.”",
      supervisor: "Dr. Bindu Krishnan",
      badge: "Summa cum laude"
    },
    {
      period: "June 2012 — Aug 2014",
      degree: "M.Sc. Physics",
      institution: "National Institute of Technology (NIT) Tiruchirappalli, India",
      url: "https://www.nitt.edu/",
      thesis: "”An Investigation on the deposition and characterization of Phosphorous and Nitrogen dual acceptor doped P-Type ZnO Thin Films”",
      supervisor: "Dr. Santhosh Kumar",
      score: "83.7%"
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1 px-6 md:px-20 lg:px-40 py-12 flex justify-center"
    >
      <div className="max-w-[800px] w-full flex flex-col gap-16">
        <section className="flex flex-col gap-4">
          <h1 className="text-[#09323c] text-4xl font-black leading-tight tracking-tight">Education & Experience</h1>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-[#0f4c5c]" />
            <h2 className="text-[#09323c] text-3xl font-bold tracking-tight">Professional Experience</h2>
          </div>
          <div className="relative flex flex-col gap-0">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-6 pb-12 group">
                <div className="flex flex-col items-center">
                  <div className={`size-4 rounded-full ${idx === 0 ? 'bg-[#0f4c5c] border-4 border-[#0f4c5c]/20' : 'bg-[#0f4c5c]/30'} z-10`}></div>
                  {idx < experiences.length - 1 && <div className="w-px grow bg-[#0f4c5c]/20 mt-2"></div>}
                </div>
                <div className="flex flex-col gap-2 -mt-1">
                  <span className={`font-display font-bold text-sm tracking-widest uppercase ${idx === 0 ? 'text-[#0f4c5c]' : 'text-[#4f6d75]'}`}>{exp.period}</span>
                  <h3 className="text-xl font-bold text-[#09323c] group-hover:text-[#0f4c5c] transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-[#2c4c54] font-medium">{exp.institution}</p>
                    {exp.url && (
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-[#4f6d75] hover:text-[#0f4c5c] transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="mt-2 p-4 bg-[#fffdf9] border border-[#0f4c5c]/15 rounded-xl shadow-sm">
                    <p className="text-[#2c4c54] text-sm leading-relaxed">
                      <strong className="text-[#09323c]">{exp.group}:</strong> {exp.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-[#0f4c5c]" />
            <h2 className="text-[#09323c] text-3xl font-bold tracking-tight">Academic Education</h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-[#0f4c5c]/30 py-2">
                <div className={`absolute -left-[9px] top-6 size-4 rounded-full ${idx === 0 ? 'bg-[#0f4c5c]' : 'bg-[#0f4c5c]/30'} ring-4 ring-[#faf7f0]`}></div>
                <span className="font-display text-[#0f4c5c] font-bold text-xs uppercase tracking-tighter">{edu.period}</span>
                <h3 className="text-xl font-black text-[#09323c] mt-1">{edu.degree}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-[#2c4c54] font-medium">{edu.institution}</p>
                  {edu.url && (
                    <a href={edu.url} target="_blank" rel="noopener noreferrer" className="text-[#4f6d75] hover:text-[#0f4c5c] transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="text-sm text-[#2c4c54] space-y-2">
                  <p><strong className="text-[#09323c] italic">Thesis:</strong> {edu.thesis}</p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span><strong className="text-[#09323c]">Supervisor:</strong> {edu.supervisor}</span>
                    {edu.badge && <span className="font-display inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-[#0f4c5c]/15 text-[#0f4c5c] uppercase tracking-widest">{edu.badge}</span>}
                    {edu.score && <span className="text-[#0f4c5c] font-bold">{edu.score}</span>}
                  </div>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border border-[#0f4c5c]/15 bg-[#fffdf9]">
                <span className="font-display text-[#4f6d75] text-xs font-bold uppercase">2009 — 2012</span>
                <h4 className="font-bold text-[#09323c] mt-1">B.Sc. Physics</h4>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-[#2c4c54]">Mahatma Gandhi University Kottayam, India</p>
                  <a href="https://www.mgu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#4f6d75] hover:text-[#0f4c5c] transition-colors">
                    <Globe className="w-3 h-3" />
                  </a>
                </div>
                <div className="mt-2 text-[#0f4c5c] font-bold text-sm">87.25%</div>
              </div>
              <div className="p-5 rounded-xl border border-[#0f4c5c]/15 bg-[#fffdf9]">
                <span className="font-display text-[#4f6d75] text-xs font-bold uppercase">June 2009</span>
                <h4 className="font-bold text-[#09323c] mt-1">Plus TWO</h4>
                <p className="text-xs text-[#2c4c54] mt-1">Jawahar Navodaya Vidyalaya Kottayam</p>
                <div className="mt-2 text-[#0f4c5c] font-bold text-sm">86.4%</div>
              </div>
              <div className="p-5 rounded-xl border border-[#0f4c5c]/15 bg-[#fffdf9]">
                <span className="font-display text-[#4f6d75] text-xs font-bold uppercase">June 2007</span>
                <h4 className="font-bold text-[#09323c] mt-1">Class 10</h4>
                <p className="text-xs text-[#2c4c54] mt-1">Jawahar Navodaya Vidyalaya Kottayam</p>
                <div className="mt-2 text-[#0f4c5c] font-bold text-sm">93%</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.main>
  );
}
