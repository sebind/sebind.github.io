import { Beaker, Search, Users, FileText, Database, ArrowRight, Link as LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Projects() {
  const projects = [
    {
      title: "Thermoelectrics",
      tags: ["Renewable Energy", "DFT/Computational"],
      desc: "An Integrated Approach in Advancement of Quaternary Oxychalcogenide Synthesis for Thermoelectric Application",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_5w4aYkdVahJOdbqKLV2YcxTe_JRm7VnMxoXoVCx-oHH6udpqHKAHGk2KijmiNtXS3I7Ko0GDZh4wyacFt1L1Z5D4-U_7s9xAJiNur_NenfgrbbNMyZCGkefu5nL9WZAALBczdB8cz0dR8pxVuG1aQWvA-JK0h46cOUjP_gOyJbVaoJO_EVr9KNyEw4qjE1TdmaEPkbL0-LCyQr1lhhXEBS4BT2fdmUTwpYlRTMjyD0jU5X6r0HdqsDf7Q8sSR6tXmxtnn2qSQVDb",
      collaborators: "Dr. Geetha Priyadharshini",
      fundingAgency: "UGC-CSR",
      refNo: "CRS/2023-24/04/1315",
      duration: "2024-2027",
      fund: "12 L",
      role: "Co-PI",
      links: [{ icon: <FileText className="w-4 h-4" />, label: "Publications" }, { icon: <Database className="w-4 h-4" />, label: "Dataset" }]
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-1 justify-center py-10 px-6 md:px-20 lg:px-40"
    >
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        {/* Page Header Section */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="font-display flex items-center gap-2 text-[#0f4c5c] font-bold text-sm uppercase tracking-widest">
            <span className="h-px w-8 bg-[#0f4c5c]"></span>
            Featured Project
          </div>
          <h1 className="text-[#09323c] text-5xl font-black leading-tight tracking-tight">Research Projects</h1>
          <p className="text-[#2c4c54] text-lg max-w-2xl">Investigating fundamental properties of advanced materials to solve global challenges in energy and sustainability.</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2">
          <button className="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-[#0f4c5c] text-[#faf7f0] text-sm font-semibold shadow-md">All Projects</button>
          {["Thermoelectrics", "Computational"].map(cat => (
            <button key={cat} className="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-[#fffdf9] border border-[#0f4c5c]/20 text-[#2c4c54] text-sm font-medium hover:border-[#0f4c5c] transition-colors">{cat}</button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col lg:flex-row bg-[#fffdf9] rounded-xl overflow-hidden border border-[#0f4c5c]/15 shadow-sm hover:shadow-xl transition-all duration-300">
              <div 
                className="lg:w-1/3 min-h-[240px] bg-center bg-cover bg-no-repeat" 
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={cn(
                      "font-display px-3 py-1 text-xs font-bold rounded-full uppercase",
                      tIdx === 0 ? "bg-[#0f4c5c]/10 text-[#0f4c5c]" : "bg-[#f0ebe0] text-[#2c4c54]"
                    )}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-[#09323c] mb-3 group-hover:text-[#0f4c5c] transition-colors">{project.title}</h3>
                <p className="text-[#2c4c54] mb-6 leading-relaxed">{project.desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-6 p-4 bg-[#faf7f0] rounded-lg border border-[#0f4c5c]/10">
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] uppercase tracking-wider text-[#4f6d75] font-bold">Funding Agency</span>
                    <span className="text-sm text-[#09323c] font-medium">{project.fundingAgency}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] uppercase tracking-wider text-[#4f6d75] font-bold">Ref. No</span>
                    <span className="text-sm text-[#09323c] font-medium">{project.refNo}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] uppercase tracking-wider text-[#4f6d75] font-bold">Duration</span>
                    <span className="text-sm text-[#09323c] font-medium">{project.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] uppercase tracking-wider text-[#4f6d75] font-bold">Fund</span>
                    <span className="text-sm text-[#09323c] font-medium">{project.fund}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] uppercase tracking-wider text-[#4f6d75] font-bold">Role</span>
                    <span className="text-sm text-[#09323c] font-medium">{project.role}</span>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-4 border-t border-[#0f4c5c]/10 pt-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#4f6d75]" />
                    <p className="text-[#4f6d75] text-sm">Collaborator: <span className="text-[#09323c] font-medium">{project.collaborators}</span></p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {project.links.map((link, lIdx) => (
                        <a key={lIdx} className="flex items-center gap-1 text-[#0f4c5c] text-sm font-bold hover:underline" href="#">
                          {link.icon} {link.label}
                        </a>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#09323c] text-[#faf7f0] rounded-lg text-sm font-bold hover:bg-[#0f4c5c] transition-all active:scale-95">
                      Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
