import { Link } from 'react-router-dom';
import { GraduationCap, Users, Sun, Layers as LayersIcon, Monitor, FlaskConical, LayoutGrid, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const interests = [
    { icon: <Sun className="w-8 h-8 text-[#0f4c5c]" />, title: "Optoelectronics", desc: "Studying the interaction of light with matter to develop electronic devices for advanced imaging and sensing." },
    { icon: <LayersIcon className="w-8 h-8 text-[#0f4c5c]" />, title: "Semiconductor thin films", desc: "Investigating the growth and properties of thin-film layers for high-efficiency electronics." },
    { icon: <Monitor className="w-8 h-8 text-[#0f4c5c]" />, title: "Computational Materials", desc: "Utilizing DFT and advanced simulations to predict novel material properties." },
    { icon: <FlaskConical className="w-8 h-8 text-[#0f4c5c]" />, title: "Lead-free perovskites", desc: "Developing eco-friendly, non-toxic materials for stable and efficient solar cells." },
    { icon: <LayoutGrid className="w-8 h-8 text-[#0f4c5c]" />, title: "2D materials", desc: "Exploring the unique quantum phenomena in atomically thin layer structures." },
  ];

  const academicProfiles = [
    {
      name: "ORCID",
      href: "https://orcid.org/my-orcid?orcid=0000-0001-5503-8311",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#A6CE39" />
          <path
            fill="#ffffff"
            d="M7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"
          />
        </svg>
      ),
    },
    {
      name: "Scopus",
      href: "https://www.scopus.com/authid/detail.uri?authorId=56533565400",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#E9711C" />
          <path
            fill="#ffffff"
            d="M15.45 8.4c-.62-.42-1.45-.68-2.38-.68-1.22 0-2.05.54-2.05 1.38 0 .88.88 1.24 2.34 1.67 1.98.58 3.24 1.38 3.24 3.16 0 2.08-1.76 3.35-4.32 3.35-1.48 0-2.82-.4-3.76-1.08l.78-1.64c.84.6 1.92.96 3.02.96 1.36 0 2.24-.58 2.24-1.48 0-.9-.82-1.3-2.42-1.78-1.92-.56-3.14-1.34-3.14-3.08 0-1.94 1.64-3.22 4.06-3.22 1.28 0 2.42.32 3.24.86l-.85 1.58z"
          />
        </svg>
      ),
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=g2Z77WwAAAAJ&hl=en",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269z" />
          <path fill="#356AC3" d="M12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
          <path fill="#A0C3FF" d="M12 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      name: "ResearcherID",
      href: "https://www.webofscience.com/wos/author/record/GLT-7646-2022",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#5E33BF" />
          <path
            fill="#ffffff"
            d="M7.5 6.5h4.3c2.4 0 3.9 1.2 3.9 3.2 0 1.4-.8 2.5-2.1 2.9l2.5 4.9h-2.3l-2.2-4.5H9.5v4.5H7.5v-11zm2 1.8v3.1h2.1c1.2 0 1.9-.6 1.9-1.55 0-.95-.7-1.55-1.9-1.55H9.5z"
          />
        </svg>
      ),
    },
    {
      name: "Vidwan",
      href: "https://psgitech.irins.org/profile/651928",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#F26522" />
          <path
            fill="#ffffff"
            d="M12 4.5L4.5 8.25 12 12l7.5-3.75L12 4.5zm-4.6 6.6L12 19.5l4.6-8.4-1.85-.92L12 15.3l-2.75-5.12-1.85.92z"
          />
        </svg>
      ),
    },
    {
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Sebin-Devasia?ev=hdr_xprf",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#00CCBB" />
          <path
            fill="#ffffff"
            d="M14.8 11.2c1.2-.4 2-1.3 2-2.6 0-1.7-1.3-2.7-3.3-2.7H9.2v10.2h2V11.6h1.5l2.3 4.5h2.3l-2.5-4.9zm-3.6-3.6h2.1c1 0 1.6.4 1.6 1.2s-.6 1.3-1.6 1.3h-2.1V7.6zm7.3-2.8c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5c1.1 0 1.9-.5 2.2-1.4v-1.2h-2.1v1h1c-.2.4-.5.6-1.1.6-.8 0-1.3-.6-1.3-1.5s.5-1.5 1.3-1.5c.5 0 .8.2 1.1.6l.9-.6c-.4-.6-1.1-1-2-1z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sebin-devasia/",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#0A66C2"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/sebind",
      logo: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#181717"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-grow"
    >
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="font-display mb-4 inline-block rounded-full bg-[#0f4c5c]/10 px-4 py-1 text-sm font-bold tracking-wide text-[#0f4c5c]">
              Assistant Professor in Physics
            </span>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[#09323c] md:text-4xl">
              <span className="text-[#0f4c5c]">Dr. Sebin Devasia</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-[#2c4c54]">
              Exploring emerging optoelectronic and semiconductor materials through synthesis, characterization, and computational modeling to enable next-generation energy and sensing technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://lasergroup.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#0f4c5c] px-8 py-4 text-base font-bold text-[#faf7f0] transition-all hover:bg-[#09323c] hover:shadow-xl"
              >
                <Users className="w-5 h-5" />
                Research Group
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
              <a 
                href="/image/SebinDevasia_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border-2 border-[#0f4c5c]/30 px-8 py-4 text-base font-bold text-[#0f4c5c] transition-all hover:bg-[#0f4c5c]/10"
              >
                <GraduationCap className="w-5 h-5" />
                Academic CV
              </a>
            </div>

            {/* Academic & Professional Profiles Integrated */}
            <div className="mt-12 border-t border-[#0f4c5c]/15 pt-8">
              <p className="font-display mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#4f6d75]">Academic &amp; Professional Profiles</p>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {academicProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    className="group flex items-center gap-2.5 rounded-full border border-[#0f4c5c]/15 bg-[#fffdf9] px-3.5 py-2 text-[#2c4c54] shadow-xs transition-all hover:-translate-y-0.5 hover:border-[#0f4c5c]/40 hover:text-[#0f4c5c] hover:shadow-sm"
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.logo}
                    <span className="text-sm font-bold">{profile.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:ml-auto">
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl bg-[#0f4c5c]/15"></div>
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
            <h2 className="mb-6 text-4xl font-black tracking-tight text-[#09323c]">Research <span className="text-[#0f4c5c]">Interests</span></h2>
            <div className="h-1.5 w-24 rounded-full bg-[#0f4c5c]"></div>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-[#2c4c54]">
              <p>Delving into the realm of materials science has always been my primary research interest. My work focuses on electronic and optoelectronic materials, aiming to unravel the complexities of light-matter interactions and charge transport phenomena in semiconductors.</p>
              <p>Through my research, I aspire to make meaningful contributions to the scientific community and advance our understanding of the natural world. To deepen my understanding of these materials, I utilize cutting-edge computational calculations based on density functional theory (DFT) to shed light on the electronic and optical properties of these materials and contribute to the advancement of their utilization in practical applications.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {interests.map((interest, idx) => (
                <div key={idx} className="rounded-2xl border border-[#0f4c5c]/15 bg-[#fffdf9] p-8 shadow-sm transition-all hover:border-[#0f4c5c]/30 hover:shadow-md">
                  <div className="mb-4">{interest.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-[#09323c]">{interest.title}</h3>
                  <p className="text-[#4f6d75]">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
