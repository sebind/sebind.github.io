import { useState } from 'react';
import { FileText, Quote, Terminal, Expand } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Publications() {
  const [showFullList, setShowFullList] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2015];
  
  const publications = [
    {
      year: 2026,
      items: [
        {
          title: "Rational Design of Star-Shaped Donor−Acceptor Organic Small-Molecule/GCN Heterostructures for Superior Photocatalytic Hydrogen Evolution and Photoelectrocatalytic Water Splitting Applications",
          authors: ["Govindasamy Sathiyan", "Gayathri Kumaresan", "Geetha Venkatesan", "Sebin Devasia", "Pachagounder Sakthivel", "Nisha Banerjee", "Ranjith G. Nair", "Abinash Das"],
          journal: "ACS Applied Engineering Materials",
          details: "(2026)",
          doi: "10.1021/acsaenm.6c00868"
        },
        {
          title: "Ultra-High Selectivity for Hydrogen Production from Formic Acid Over Pd–Ag Alloy Catalysts",
          authors: ["Blessy S", "Anupreethi A", "S Devasia", "Pavul Raj R", "Selvakumar R", "Jun Z", "Johnravindar D"],
          journal: "Reaction Chemistry & Engineering",
          details: "(2026)",
          doi: "10.1039/d6re00134c"
        },      
      ]
    },
    {
      year: 2025,
      items: [
        {
          title: "Surface-Roughened Silver Wires with Uniformly Distributed Plasmonic Hotspots for Highly Sensitive Surface-Enhanced Raman Scattering Applications",
          authors: ["Abhijith Thazhathenair", "Om Prakash", "Sebin Devasia", "Gifty Robert", "Fathima Thanveera Kalathingal", "Udai B Singh", "Santanu Ghosh"],
          journal: "ACS Applied Optical Materials",
          details: "3 (12), (2025) 2971-2981.",
          doi: "10.1021/acsaom.5c00517"
        },
        {
          title: "Optimization of Hole Transport Layers for Cu2FeSnS4 Solar Cells via SCAPS-1D Simulation: Investigating the Impact of Interface Defects on Practical Efficiency Limits",
          authors: ["MK Jyolsna Raj", "Kallol Mohanta", "Sebin Devasia", "B Geetha Priyadarshini"],
          journal: "Journal of Physics and Chemistry of Solids",
          details: "208 (2) (2025) 113193.",
          doi: "10.1016/j.jpcs.2025.113193"
        },
        {
          title: "High aspect ratio ZnO nanorods for improved photoelectrochemical (PEC) water splitting performances and efficient photocatalytic hydrogen evolution: an integrated experimental and DFT studies",
          authors: ["Abinash Das", "Sebin Devasia", "Nisha Banerjee", "Ranjith G. Nair"],
          journal: "Applied Surface Science",
          details: "699 (2025) 163160.",
          doi: "10.1016/j.apsusc.2025.163160"
        }
      ]
    },
    {
      year: 2024,
      items: [
        {
          title: "An experimental and theoretical validation of dual role of Fe on improving the photocatalytic performance of doped mixed phase titania",
          authors: ["SK Nikhil", "GR Nair", "A Das", "Sebin Devasia", "RG Nair"],
          journal: "Advanced Powder Technology",
          details: "35 (11) (2024), 104683.",
          doi: "10.1016/j.apt.2024.104683"
        },
        {
          title: 'Enhancing thermoelectric properties of spinel ZnFe2O4 by Ni substitution through electron hopping mechanism',
          authors: ["John N.", "Davis N.", "Roshan J.C.", "Hussain S.", "S. Devasia", "Srinivasan B.", "Ashok A.M."],
          journal: "Ceramics International",
          details: "50 (22), 45251-45262",
          doi: "10.1016/j.ceramint.2024.08.365"
        },
        {
          title: 'Characterisation of Sn-Cl co-doped β-Ga2O3 thin films deposited via spray pyrolysis and their application in UV detector devices',
          authors: ["R Raphael", "S. Devasia", "S. Shaji", "E.I. Anila"],
          journal: "Sensors and Actuators A: Physical",
          details: "376 (2024) 115546",
          doi: "10.1016/j.sna.2024.115546"
        },
        {
          title: "In situ grown Bi2S3 nanorods in Cs3Bi2I9 thin films as broadband self-driven photodetector with high responsivity",
          authors: ["Sebin Devasia", "Bindu Krishnan", "S. Shaji", "D.A. Avellaneda"],
          journal: "Optical Materials",
          details: "152, 115532 (2024).",
          doi: "10.1016/j.optmat.2024.115532"
        }
      ]
    },
    {
      year: 2023,
      items: [
        {
          title: "Ultrasonically sprayed Cs3Bi2I9 thin film based self-powered photodetector.",
          authors: ["Sebin Devasia", "S. Shaji", "D.A. Avellaneda", "J.A. Aguilar Martinez", "Bindu Krishnan"],
          journal: "Mater. Chem. Phys.",
          details: "296, 127295 (2023).",
          doi: "10.1016/j.matchemphys.2022.127295"
        }
      ]
    },
    {
      year: 2022,
      items: [
        {
          title: "Effect of substrate temperature on the properties of spray deposited Ga2O3 thin films, for solar blind UV detector applications",
          authors: ["R. Raphael", "S. Devasia", "S. Shaji", "E.I. Anila"],
          journal: "Optical Materials",
          details: "Vol. 133, 112915",
          doi: "10.1016/j.optmat.2022.112915"
        }
      ]
    },
    {
      year: 2021,
      items: [
        {
          title: "In situ crystallization of 0D perovskite derivative Cs3Bi2I9 thin films via ultrasonic spray",
          authors: ["S. Devasia", "S. Shaji", "D.A. Avellaneda", "J.A.A. Martinez", "B. Krishnan"],
          journal: "J. Alloys Compd.",
          details: "893 (2021) 162294.",
          doi: "10.1016/j.jallcom.2021.162294"
        },
        {
          title: "Monoclinic AgSbS2 thin films for photovoltaic applications: Computation, growth and characterization approaches",
          authors: ["A. Nadukkandy", "S. Devasia", "P. Abraham", "S. Shaji", "D.A. Avellaneda", "J.A. Aguilar-Martínez", "E.G. Martinez", "R.F. Cienfuegos-Pelaes", "B. Krishnan"],
          journal: "Mater. Sci. Semicond. Process.",
          details: "135 (2021) 106074.",
          doi: "10.1016/j.mssp.2021.106074"
        },
        {
          title: "Photosensitive antimony triiodide thin films by rapid iodization of chemically deposited antimony sulfide",
          authors: ["A.A. Ramachandran", "B. Krishnan", "S. Devasia", "D.A. Avellaneda", "M.I. Mendivil Palma", "J.A. Aguilar Martinez", "S. Shaji"],
          journal: "Mater. Res. Bull.",
          details: "142 (2021) 111382.",
          doi: "10.1016/j.materresbull.2021.111382"
        },
        {
          title: "Metal–semiconductor–metal visible photodetector based on Al-doped (Cd:Zn)S nano thin films by hydrothermal synthesis",
          authors: ["J. Mathew", "S. Devasia", "S. Shaji", "E.I. Anila"],
          journal: "Optik (Stuttg).",
          details: "241 (2021) 166878.",
          doi: "10.1016/j.ijleo.2021.166878"
        }
      ]
    },
    {
      year: 2020,
      items: [
        {
          title: "Tin antimony sulfide (Sn6Sb10S21) thin films by heating chemically deposited Sb2S3/SnS layers: Studies on the structure and their optoelectronic properties",
          authors: ["S. Devasia", "S. Shaji", "D.A. Avellaneda", "J.A. Aguilar Martinez", "B. Krishnan"],
          journal: "J. Alloys Compd.",
          details: "827 (2020) 154256.",
          doi: "10.1016/j.jallcom.2020.154256"
        }
      ]
    },
    {
      year: 2019,
      items: [
        {
          title: "Spectral and nonlinear optical characterization of blue light emitting gahnite nanorods synthesized through radiation assisted sol-gel method",
          authors: ["P. J. Joffy", "V. G. Sreeja", "S. Devasia", "E. I. Anila"],
          journal: "Solid State Sci.",
          details: "96, 105947 (2019).",
          doi: "10.1016/j.solidstatesciences.2019.105947"
        },
        {
          title: "Controlling the zinc oxide unipolarity through dual acceptor doping for spray-cast homojunction diode",
          authors: ["S. Devasia", "P. V. Athma", "E. I. Anila"],
          journal: "Mater. Lett.",
          details: "238, 112–115 (2019).",
          doi: "10.1016/j.matlet.2018.11.157"
        }
      ]
    },
    {
      year: 2018,
      items: [
        {
          title: "Post-deposition thermal treatment of sprayed ZnO:Al thin films for enhancing the conductivity",
          authors: ["S. Devasia", "P. V. Athma", "M. Shaji", "M. C. S. Kumar", "E. I. Anila"],
          journal: "Phys. B Condens. Matter",
          details: "533, 83–89 (2018).",
          doi: "10.1016/j.physb.2018.01.001"
        }
      ]
    },
    {
      year: 2015,
      items: [
        {
          title: "Investigation on P-N dual acceptor doped p-type ZnO thin films and subsequent growth of pencil-like nanowires",
          authors: ["R. Amiruddin", "S. Devasia", "K. Mohammedali", "M. C. Santhosh Kumar"],
          journal: "Semiconductor Science and Technology",
          details: "30 (2015) 035009.",
          doi: "10.1088/0268-1242/30/3/035009"
        }
      ]
    }
  ];

  const filteredPublications = publications
    .filter(group => selectedYear === "all" || group.year === selectedYear);

  const visiblePublications = showFullList ? filteredPublications : filteredPublications.slice(0, 2);

  const getScholarLink = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
  const getDoiLink = (doi?: string) => doi ? `https://doi.org/${doi}` : "#";

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center py-12 px-4 md:px-20 lg:px-40"
    >
      <div className="max-w-4xl w-full">
        <div className="mb-12">
          <h1 className="text-[#09323c] text-4xl font-black leading-tight tracking-tight mb-4">Publications</h1>
        </div>

        <div className="sticky top-0 z-10 py-6 bg-[#faf7f0]/95 backdrop-blur-md mb-8 border-b border-[#0f4c5c]/15">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 overflow-x-auto pb-2">
              <button 
                onClick={() => setSelectedYear("all")}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 shadow-md transition-all ${selectedYear === "all" ? "bg-[#0f4c5c] text-[#faf7f0]" : "bg-[#fffdf9] text-[#2c4c54] border border-[#0f4c5c]/20"}`}
              >
                <span className="text-sm font-semibold">All Years</span>
              </button>
              {years.slice(0, 4).map(y => (
                <button 
                  key={y} 
                  onClick={() => setSelectedYear(y)}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${selectedYear === y ? "bg-[#0f4c5c] text-[#faf7f0] shadow-md" : "bg-[#fffdf9] text-[#2c4c54] border border-[#0f4c5c]/20 hover:border-[#0f4c5c]"}`}
                >
                  <span className="text-sm font-medium">{y}</span>
                </button>
              ))}
              <div className="w-px h-6 self-center bg-[#0f4c5c]/20 mx-2"></div>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#fffdf9] text-[#2c4c54] border border-[#0f4c5c]/20 px-5 hover:border-[#0f4c5c] transition-all">
                <span className="text-sm font-medium">Journal Articles</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {visiblePublications.map((group) => (
              <motion.div 
                key={group.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-[#0f4c5c]">{group.year}</h2>
                  <div className="h-[2px] grow bg-gradient-to-r from-[#0f4c5c]/30 to-transparent"></div>
                </div>
                <div className="space-y-10">
                  {group.items.map((pub, pIdx) => (
                    <div key={pIdx} className="group">
                      <h3 className="text-xl font-bold text-[#09323c] leading-snug group-hover:text-[#0f4c5c] transition-colors cursor-pointer mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-[#2c4c54] text-base mb-2 italic">
                        {pub.authors.map((a, i) => (
                          <span key={i}>
                            {a === "Sebin Devasia" || a === "S Devasia" || a === "S. Devasia" ? (
                              <span className="underline decoration-[#0f4c5c] font-semibold text-[#09323c]">{a}</span>
                            ) : a}
                            {i < pub.authors.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>
                      <p className="text-[#4f6d75] text-sm mb-4">
                        <span className="italic font-medium">{pub.journal}</span> {pub.details}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          className="flex items-center gap-1.5 text-sm font-semibold text-[#0f4c5c] hover:opacity-80 transition-opacity" 
                          href={getDoiLink(pub.doi)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="w-4 h-4" /> View Paper
                        </a>
                        <a 
                          className="flex items-center gap-1.5 text-sm font-semibold text-[#2c4c54] hover:text-[#0f4c5c] transition-colors" 
                          href={getScholarLink(pub.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Quote className="w-4 h-4" /> Citations
                        </a>
                        <a 
                          className="flex items-center gap-1.5 text-sm font-semibold text-[#2c4c54] hover:text-[#0f4c5c] transition-colors" 
                          href={getScholarLink(pub.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Terminal className="w-4 h-4" /> BibTeX
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showFullList && (
          <div className="mt-16 pt-12 border-t border-[#0f4c5c]/15 flex justify-center">
            <button 
              onClick={() => setShowFullList(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#f0ebe0] text-[#09323c] font-semibold hover:bg-[#0f4c5c] hover:text-[#faf7f0] transition-all group"
            >
              Load older publications
              <Expand className="w-4 h-4 rotate-90 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </motion.main>
  );
}
