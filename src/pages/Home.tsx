import { Link } from 'react-router-dom';
import { FileText, GraduationCap, Database as DatabaseIcon, Users, Sun, Layers as LayersIcon, Monitor, FlaskConical, LayoutGrid, ArrowRight, Search, UserCheck, IdCard, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const interests = [
    { icon: <Sun className="w-8 h-8 text-[#1754cf]" />, title: "Optoelectronics", desc: "Studying the interaction of light with electronic devices for advanced imaging and sensing." },
    { icon: <LayersIcon className="w-8 h-8 text-[#1754cf]" />, title: "Semiconductor thin films", desc: "Investigating the growth and properties of thin-film layers for high-efficiency electronics." },
    { icon: <Monitor className="w-8 h-8 text-[#1754cf]" />, title: "Computational Materials", desc: "Utilizing DFT and advanced simulations to predict novel material properties." },
    { icon: <FlaskConical className="w-8 h-8 text-[#1754cf]" />, title: "Lead-free perovskites", desc: "Developing eco-friendly, non-toxic materials for stable and efficient solar cells." },
    { icon: <LayoutGrid className="w-8 h-8 text-[#1754cf]" />, title: "2D materials", desc: "Exploring the unique quantum phenomena in atomically thin layer structures." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-grow"
    >
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 pt-2">
            <span className="mb-4 inline-block rounded-full bg-[#000435]/10 px-4 py-1 text-sm font-bold tracking-wide text-[#1754cf]">
              Assistant Professor in Physics
            </span>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl">
              <span className="italic text-[#000080]">Dr. Sebin Devasia</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600">
              Exploring emerging optoelectronic and semiconductor materials through synthesis, characterization, and computational modeling to enable next-generation energy and radiation sensing technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/publications"
                className="flex items-center gap-2 rounded-lg bg-[#1754cf] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#1754cf]/90 hover:shadow-xl"
              >
                <FileText className="w-5 h-5" />
                View Publications
              </Link>
              <Link 
                to="/cv"
                className="flex items-center gap-2 rounded-lg border-2 border-[#1754cf]/20 px-8 py-4 text-base font-bold text-[#1754cf] transition-all hover:bg-[#1754cf]/5"
              >
                <GraduationCap className="w-5 h-5" />
                Academic CV
              </Link>
            </div>

            {/* Academic Profiles Integrated */}
            <div className="mt-12 border-t border-slate-100 pt-8">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Academic Profiles</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <a className="flex items-center gap-2 text-slate-500 transition-colors hover:text-[#1754cf]" href="https://orcid.org/my-orcid?orcid=0000-0001-5503-8311" target="_blank" rel="noopener noreferrer">
                  <IdCard className="w-5 h-5" />
                  <span className="font-bold text-sm">ORCID</span>
                </a>
                <a className="flex items-center gap-2 text-slate-500 transition-colors hover:text-[#1754cf]" href="https://www.scopus.com/authid/detail.uri?authorId=56533565400" target="_blank" rel="noopener noreferrer">
                  <DatabaseIcon className="w-5 h-5" />
                  <span className="font-bold text-sm">Scopus</span>
                </a>
                <a className="flex items-center gap-2 text-slate-500 transition-colors hover:text-[#1754cf]" href="https://scholar.google.com/citations?user=g2Z77WwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5" />
                  <span className="font-bold text-sm">Google Scholar</span>
                </a>
                <a className="flex items-center gap-2 text-slate-500 transition-colors hover:text-[#1754cf]" href="https://www.webofscience.com/wos/author/record/GLT-7646-2022" target="_blank" rel="noopener noreferrer">
                  <Search className="w-5 h-5" />
                  <span className="font-bold text-sm">ResearcherID</span>
                </a>
                <a className="flex items-center gap-2 text-slate-500 transition-colors hover:text-[#1754cf]" href="https://psgitech.irins.org/profile/651928" target="_blank" rel="noopener noreferrer">
                  <UserCheck className="w-5 h-5" />
                  <span className="font-bold text-sm">Vidwan</span>
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:ml-auto">
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl bg-[#1754cf]/10"></div>
              <img 
                alt="Professional portrait of Dr. Sebin Devasia" 
                className="h-[500px] w-full rounded-2xl object-cover shadow-2xl transition-all duration-700" 
                src="/image/prof_pic2.png"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900">Research <span className="text-[#1754cf]">Interests</span></h2>
            <div className="h-1.5 w-24 rounded-full bg-[#1754cf]"></div>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>Delving into the realm of materials science has always been my primary research interest. My work focuses on electronic and optoelectronic materials, aiming to unravel the complexities of light-matter interactions and charge transport phenomena in semiconductors.</p>
              <p>Through my research, I aspire to make meaningful contributions to the scientific community and advance our understanding of the natural world. To deepen my understanding of these materials, I utilize cutting-edge computational calculations based on density functional theory (DFT) to shed light on the electronic and optical properties of these materials and contribute to the advancement of their utilization in practical applications.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {interests.map((interest, idx) => (
                <div key={idx} className="rounded-2xl border border-[#1754cf]/10 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4">{interest.icon}</div>
                  <h3 className="mb-3 text-xl font-bold">{interest.title}</h3>
                  <p className="text-slate-500">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </motion.div>
  );
}
