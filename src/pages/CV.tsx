import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Download, Printer, ExternalLink, Award, BookOpen, Briefcase, GraduationCap, Code, Languages, Heart, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function CV() {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Sebin_Devasia_CV";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;
    
    setIsDownloading(true);
    try {
      const element = cvRef.current;
      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Sebin_Devasia_CV.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to print if generation fails
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0"
    >
      {/* CV Controls */}
      <div className="mx-auto max-w-[850px] mb-8 flex justify-between items-center print:hidden">
        <h1 className="text-2xl font-black text-slate-900">Academic CV</h1>
        <div className="flex gap-4">
          <button 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="flex items-center gap-2 rounded-lg bg-[#1754cf] px-4 py-2 text-sm font-bold text-white hover:bg-[#1754cf]/90 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {isDownloading ? 'Generating...' : 'Download as PDF'}
          </button>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </div>

      {/* CV Document */}
      <div ref={cvRef} className="mx-auto max-w-[850px] bg-white shadow-2xl border border-slate-200 p-12 sm:p-16 print:shadow-none print:border-none print:p-0">
        
        {/* Header */}
        <header className="text-center mb-12 border-b border-slate-100 pb-12">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-4 uppercase">Sebin Devasia</h1>
          <p className="text-slate-500 font-medium mb-6">Male | 34 | Married | Kerala - 686606, India</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:sebindevasia@gmail.com" className="flex items-center gap-2 text-[#1754cf] hover:underline">
              <Mail className="w-4 h-4" />
              sebindevasia@gmail.com
            </a>
            <span className="flex items-center gap-2 text-slate-600">
              <Phone className="w-4 h-4" />
              +91 - 6282 7148 36
            </span>
          </div>
          
          <div className="flex justify-center gap-8 mt-6">
            <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-[#1754cf] transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="font-bold">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-[#1754cf] transition-colors">
              <Github className="w-5 h-5" />
              <span className="font-bold">Github</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-[#1754cf] transition-colors">
              <Globe className="w-5 h-5" />
              <span className="font-bold">Website</span>
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-[#1754cf]" />
            <h2 className="text-2xl font-black uppercase tracking-wider text-slate-900">Experience</h2>
          </div>
          
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-slate-100">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-[#1754cf]"></div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900">Assistant Professor</h3>
                <span className="text-sm font-bold text-slate-400">01/2025 - Till Now</span>
              </div>
              <p className="text-[#1754cf] font-bold mb-3 italic">PSG Institute of Technology and Applied Research, Coimbatore, India</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 leading-relaxed">
                <li>Conduct full-time research, write grant proposals and engage in challenging research problems.</li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-100">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-200"></div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900">Assistant Professor</h3>
                <span className="text-sm font-bold text-slate-400">10/2023 - 01/2025</span>
              </div>
              <p className="text-[#1754cf] font-bold mb-3 italic">PSG Institute of Advanced Studies, Coimbatore, India</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 leading-relaxed">
                <li>PI of Laboratory for Atomistic Simulations and Energy materials Research (LASEmR group)</li>
                <li>DFT calculations using Quantum ESPRESSO and generative models for materials design in photocatalysis, thermoelectrics and photovoltaics.</li>
                <li>Synthesis of lead-free halides, chalcogenides and chalcohalide light absorbers.</li>
                <li>Guiding masters project students</li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-100">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-200"></div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900">Doctoral researcher</h3>
                <span className="text-sm font-bold text-slate-400">01/2019 - 05/2023</span>
              </div>
              <p className="text-[#1754cf] font-bold mb-3 italic">Universidad Autónoma de Nuevo León (UANL), Monterrey, Mexico</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 leading-relaxed">
                <li>Deposition of Cs3Bi2I9 thin films using ultrasonic spray deposition method.</li>
                <li>Structural, optical, electronic, morphological characterization of thin films.</li>
                <li>Fabrication of photodetectors and photovoltaic devices and analysis.</li>
                <li>DFT calculations for structure optimization, electronic band structure and density of states of bismuth halides using VASP.</li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-100">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-200"></div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900">Junior/Senior Research Fellow</h3>
                <span className="text-sm font-bold text-slate-400">07/2015 - 03/2018</span>
              </div>
              <p className="text-[#1754cf] font-bold mb-3 italic">Union Christian College, Aluva, India (DAE-BRNS Project)</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 leading-relaxed">
                <li>Investigation of highly conducting Al-doped ZnO (n-Type) and P or N doped ZnO (p-Type) thin films by spray pyrolysis.</li>
                <li>Chemical methods to grow vertically aligned ZnO nanorods on spray-deposited seed layers.</li>
                <li>Fabrication of translucent n-ZnO/p-ZnO homojunction diodes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-[#1754cf]" />
            <h2 className="text-2xl font-black uppercase tracking-wider text-slate-900">Education</h2>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <span className="text-sm font-bold text-[#1754cf]">2019 - 2023</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-bold text-slate-900">Ph.D. in Materials Engineering</h3>
                <p className="text-slate-600 italic">Universidad Autónoma de Nuevo León (UANL), Monterrey, Mexico</p>
                <p className="mt-2 text-sm text-slate-500">Thesis: "Ultrasonic spray deposition of perovskite-inspired lead-free cesium bismuth iodide thin films for optoelectronics"</p>
                <p className="text-sm font-bold text-[#1754cf] mt-1">Grade: Summa cum laude</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <span className="text-sm font-bold text-[#1754cf]">2012 - 2014</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-bold text-slate-900">M.Sc. Physics</h3>
                <p className="text-slate-600 italic">National Institute of Technology (NIT) Tiruchirappalli, India</p>
                <p className="text-sm font-bold text-[#1754cf] mt-1">Result: 83.7 %</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <span className="text-sm font-bold text-[#1754cf]">2009 - 2012</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-bold text-slate-900">B.Sc. Physics</h3>
                <p className="text-slate-600 italic">Mahatma Gandhi University Kottayam, India</p>
                <p className="text-sm font-bold text-[#1754cf] mt-1">Result: 87.25 %</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-[#1754cf]" />
            <h2 className="text-2xl font-black uppercase tracking-wider text-slate-900">Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">Computational</h3>
              <p className="text-slate-700 leading-relaxed">VASP-DFT, Quantum ESPRESSO-DFT/MD, Machine Learning, Python (intermediate), C/C++</p>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">Generative Models</h3>
              <p className="text-slate-700 leading-relaxed">MACE, FairChem models, MatterSim, MatterGen, Orb Materials, SOD, BoltzTrap2</p>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">Characterization</h3>
              <p className="text-slate-700 leading-relaxed">XRD, XPS, Raman, SEM, TEM, UV-Vis, Photoluminescence, EDX, FT-IR, Photocurrent response</p>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">Synthesis</h3>
              <p className="text-slate-700 leading-relaxed">Thermal evaporation, Spray deposition (ultrasonic/air-assisted), Chemical bath deposition, Sol-gel</p>
            </div>
          </div>
        </section>

        {/* Publications & Talks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[#1754cf]" />
            <h2 className="text-2xl font-black uppercase tracking-wider text-slate-900">Publications & Talks</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-1">Optical Materials, 152, 115532 (2024)</p>
              <p className="text-slate-600 italic">"In situ grown Bi2S3 nanorods in Cs3Bi2I9 thin films as broadband self-driven photodetector..."</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-1">Mater. Chem. Phys., 296, 127295 (2023)</p>
              <p className="text-slate-600 italic">"Ultrasonically sprayed Cs3Bi2I9 thin film based self-powered photodetector."</p>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Invited Talks</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#1754cf]">1.</span>
                  <span>"From atomic potentials to autonomous discovery in energy materials", ICAMIS 2026, Kerala, India.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#1754cf]">2.</span>
                  <span>"Beginner’s workshop on MedeA-VASP atomistic simulation package", UNAM, Mexico, 2021.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-6 h-6 text-[#1754cf]" />
              <h2 className="text-xl font-black uppercase tracking-wider text-slate-900">Languages</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['English (Fluent)', 'Malayalam (Native)', 'Hindi', 'Tamil', 'Spanish'].map(lang => (
                <span key={lang} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold">{lang}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-[#1754cf]" />
              <h2 className="text-xl font-black uppercase tracking-wider text-slate-900">Interests</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">Graphical Illustrations, Coding, Soccer, Art, Cooking, Hiking, Reading</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-slate-100 text-center text-slate-400 text-xs uppercase tracking-widest">
          Generated Academic CV • Dr. Sebin Devasia • {new Date().getFullYear()}
        </footer>
      </div>
    </motion.div>
  );
}
