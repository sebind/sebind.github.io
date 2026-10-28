import { useState, type ReactNode } from 'react';
import { Users, FileText, Database, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProjectMetadataItem {
  label: string;
  value: string;
  className?: string;
}

interface ProjectLink {
  icon: ReactNode;
  label: string;
}

interface Project {
  category: string;
  title: string;
  tags: string[];
  desc: string;
  image: string;
  collaborators: string;
  gridCols?: string;
  metadata: ProjectMetadataItem[];
  links: ProjectLink[];
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");

  const projects: Project[] = [
    {
      category: "Thermoelectrics",
      title: "Thermoelectrics",
      tags: ["Renewable Energy", "DFT/Computational"],
      desc: "An Integrated Approach in Advancement of Quaternary Oxychalcogenide Synthesis for Thermoelectric Application",
      image: "/image/thermo_proj.png",
      collaborators: "Dr. Geetha Priyadharshini",
      metadata: [
        { label: "Funding Agency", value: "UGC-CSR" },
        { label: "Centre", value: "Kalpakkam" },
        { label: "Ref. No", value: "CRS/2023-24/04/1315" },
        { label: "Duration", value: "2024-2027" },
        { label: "Grant", value: "12 L" },
        { label: "Role", value: "Co-PI" },
      ],
      links: [{ icon: <FileText className="w-4 h-4" />, label: "Publications" }, { icon: <Database className="w-4 h-4" />, label: "Dataset" }]
    },
    {
      category: "Computational",
      title: "Hydrogen Storage & Carbon Capture",
      tags: ["DFT", "Energy storage/conversion"],
      desc: "Design and Development of Functional Materials for Hydrogen Storage and Carbon Capture via First-Principles Density Functional Theory and Integrated Machine Learning Approaches.",
      image: "/image/comp_proj.png",
      collaborators: "Dr. Sujay Chakravarty, DAE",
      metadata: [
        { label: "Funding Agency", value: "UGC-DAE CSR" },
        { label: "Centre", value: "Kalpakkam" },
        { label: "Ref. No.", value: "CRS/2024-25/1755" },
        { label: "Duration", value: "2025-2028" },
        { label: "Grant", value: "Facility usage" },
        { label: "Role", value: "PI" },
      ],
      links: [{ icon: <FileText className="w-4 h-4" />, label: "Publications" }, { icon: <Database className="w-4 h-4" />, label: "Dataset" }]
    }
  ];

  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
            Featured Projects
          </div>
          <h1 className="text-[#09323c] text-5xl font-black leading-tight tracking-tight">Research Projects</h1>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2">
          {["All Projects", "Thermoelectrics", "Computational"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "flex h-10 shrink-0 items-center justify-center px-5 rounded-full text-sm transition-colors",
                selectedCategory === cat
                  ? "bg-[#0f4c5c] text-[#faf7f0] font-semibold shadow-md"
                  : "bg-[#fffdf9] border border-[#0f4c5c]/20 text-[#2c4c54] font-medium hover:border-[#0f4c5c]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 auto-rows-fr gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group flex flex-col lg:flex-row lg:h-[380px] bg-[#fffdf9] rounded-xl overflow-hidden border border-[#0f4c5c]/15 shadow-sm hover:shadow-xl transition-all duration-300">
              <div
                className="relative lg:w-1/3 min-h-[192px] bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url("${project.image}")` }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#09323c]/20 via-transparent to-[#faf7f0]/10 pointer-events-none transition-opacity duration-300 group-hover:opacity-60" />
              </div>
              <div className="flex flex-1 flex-col p-5 lg:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={cn(
                      "font-display px-2 py-0.5 text-[10px] tracking-wider font-bold rounded-full uppercase",
                      tIdx === 0 ? "bg-[#0f4c5c]/10 text-[#0f4c5c]" : "bg-[#f0ebe0] text-[#2c4c54]"
                    )}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-[#09323c] mb-2 group-hover:text-[#0f4c5c] transition-colors">{project.title}</h3>
                <p className="text-sm lg:text-[15px] text-[#2c4c54] mb-4 leading-snug lg:min-h-[42px] line-clamp-2">{project.desc}</p>

                <div className={cn(
                  "grid gap-y-2.5 gap-x-6 mb-4 p-3 bg-[#faf7f0] rounded-lg border border-[#0f4c5c]/10",
                  project.gridCols || "grid-cols-2 md:grid-cols-3"
                )}>
                  {project.metadata.map((item, mIdx) => (
                    <div key={mIdx} className={cn("flex flex-col", item.className)}>
                      <span className="font-display text-[10px] uppercase tracking-wider text-[#4f6d75] font-bold">{item.label}</span>
                      <span className="text-sm text-[#09323c] font-medium truncate" title={item.value}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-[#0f4c5c]/10 pt-4">
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
                    <button className="flex items-center gap-2 px-4 py-1.5 bg-[#09323c] text-[#faf7f0] rounded-lg text-sm font-bold hover:bg-[#0f4c5c] transition-all active:scale-95">
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
