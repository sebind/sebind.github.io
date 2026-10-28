import { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Atom,
  FileCode2,
  Layers,
  Cpu,
  Terminal,
  Box,
  ArrowUpRight,
  Sliders,
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface LabApp {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  url: string;
  status: string;
  version?: string;
  description: string;
  highlights: string[];
  tags: string[];
  accentFrom: string;
  accentTo: string;
}

export default function DigitalLab() {
  const [activeCategory, setActiveCategory] = useState<string>('All Apps');

  const apps: LabApp[] = [
    {
      id: 'seal4qe',
      name: 'Seal',
      subtitle: 'Quantum ESPRESSO Studio',
      category: 'DFT & Simulation',
      url: 'https://sebind.github.io/seal4qe/',
      status: 'Live Web App',
      version: 'v1.0',
      description:
        'An interactive browser-based graphical studio and input-file generator for Quantum ESPRESSO. Build and inspect crystal structures (Si, Graphene, TiO₂, SrTiO₃), import/export .cif and .xyz files, and configure DFT calculation decks effortlessly.',
      highlights: [
        '3D Crystal Structure Builder',
        '.cif & .xyz Structure Import/Export',
        'Automated pw.x Input Deck Generator',
        'Presets for Si, Graphene, TiO₂ & SrTiO₃',
      ],
      tags: ['Quantum ESPRESSO', 'DFT', 'Crystal Viewer', 'Vibecoded'],
      accentFrom: '#0f4c5c',
      accentTo: '#14b8a6',
    },
  ];

  const categories = ['All Apps', 'DFT & Simulation', 'Materials Informatics'];

  const filteredApps =
    activeCategory === 'All Apps'
      ? apps
      : apps.filter((app) => app.category === activeCategory);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex flex-1 justify-center overflow-hidden py-12 px-6 md:px-16 lg:px-32"
    >
      {/* Ambient Apple-style Liquid Glass Background Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#0f4c5c]/20 via-[#14b8a6]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[380px] w-[380px] rounded-full bg-gradient-to-tl from-[#f59e0b]/15 via-[#0f4c5c]/12 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-[340px] w-[340px] rounded-full bg-gradient-to-tr from-[#09323c]/15 via-[#2dd4bf]/10 to-transparent blur-3xl" />
      </div>

      <div className="layout-content-container flex w-full max-w-[1200px] flex-1 flex-col">
        {/* Header Section */}
        <div className="mb-10 flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/80 bg-white/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0f4c5c] shadow-[0_2px_10px_rgba(15,76,92,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-[#0f4c5c]" />
            <span className="font-display">Vibecoded Scientific Apps</span>
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#09323c] md:text-5xl">
                Digital <span className="text-[#0f4c5c]">Lab</span>
              </h1>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#2c4c54]">
                Interactive web tools, scientific studios, and computational workflows crafted for rapid materials discovery and classroom exploration.
              </p>
            </div>

            {/* Apple-Style Segmented Glass Filter Pill */}
            <div className="flex flex-wrap items-center gap-1.5 self-start rounded-2xl border border-white/80 bg-white/50 p-1.5 shadow-[0_8px_24px_-6px_rgba(9,50,60,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-2xl md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200',
                    activeCategory === cat
                      ? 'bg-[#0f4c5c] text-[#faf7f0] shadow-[0_4px_12px_rgba(15,76,92,0.25)]'
                      : 'text-[#2c4c54] hover:bg-white/60 hover:text-[#09323c]'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Apple-Themed Glassy Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {filteredApps.map((app) => (
            <motion.div
              key={app.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/80 bg-white/55 p-6 shadow-[0_24px_48px_-12px_rgba(9,50,60,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] ring-1 ring-[#0f4c5c]/10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/65 hover:shadow-[0_32px_64px_-12px_rgba(9,50,60,0.18),inset_0_1px_2px_rgba(255,255,255,1)] md:col-span-2 lg:col-span-8 lg:p-8"
            >
              {/* Subtle specular glass reflection */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-white/70 via-[#14b8a6]/15 to-transparent blur-2xl transition-transform duration-700 group-hover:scale-110" />

              <div>
                {/* Top Bar: App Icon + Title + Live Badge */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Apple-style squircle app icon */}
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#09323c] via-[#0f4c5c] to-[#14b8a6] text-[#faf7f0] shadow-[0_10px_25px_-5px_rgba(15,76,92,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                      <Atom className="h-7 w-7 transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h2 className="text-2xl font-black tracking-tight text-[#09323c]">
                          {app.name}
                        </h2>
                        {app.version && (
                          <span className="rounded-full border border-[#0f4c5c]/15 bg-white/70 px-2 py-0.5 font-mono text-[10px] font-bold text-[#0f4c5c] backdrop-blur-md">
                            {app.version}
                          </span>
                        )}
                      </div>
                      <p className="font-display text-sm font-bold text-[#0f4c5c]">
                        {app.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-800 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {app.status}
                    </span>
                  </div>
                </div>

                {/* Interactive Glass Studio Preview Window */}
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-[#09323c]/95 via-[#0f4c5c]/90 to-[#134e5e]/95 p-4 text-[#faf7f0] shadow-[0_12px_30px_-8px_rgba(9,50,60,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)]">
                  {/* macOS Window Chrome */}
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/90" />
                      <span className="ml-2 font-mono text-[11px] text-white/70">
                        sebind.github.io/seal4qe — pw.x studio
                      </span>
                    </div>
                    <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[10px] text-teal-200">
                      SCF / Relax / Bands
                    </span>
                  </div>

                  {/* Studio Mockup Content */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
                    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:col-span-5">
                      <div className="flex items-center justify-between text-[11px] text-teal-200/90">
                        <span className="flex items-center gap-1 font-semibold">
                          <Box className="h-3.5 w-3.5" /> Crystal Unit Cell
                        </span>
                        <span className="font-mono text-[10px] text-white/60">CIF / XYZ</span>
                      </div>
                      <div className="my-3 flex items-center justify-center gap-3 py-1">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-teal-400/20 ring-1 ring-teal-300/40">
                          <Atom className="h-6 w-6 text-teal-200" />
                        </div>
                        <div className="text-xs">
                          <div className="font-bold text-white">Si / Graphene / TiO₂</div>
                          <div className="font-mono text-[10px] text-teal-200/80">
                            a = 5.43 Å · Fd-3m
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {['Supercell', 'K-Path', 'Pseudopotentials'].map((pill) => (
                          <span
                            key={pill}
                            className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-medium text-white/80"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/25 p-3 font-mono text-[11px] leading-relaxed text-teal-100/90 sm:col-span-7">
                      <div className="mb-1 flex items-center justify-between text-[10px] text-white/50">
                        <span>qe_input.in</span>
                        <span className="text-teal-300">Quantum ESPRESSO</span>
                      </div>
                      <div className="text-amber-300/90">&amp;CONTROL</div>
                      <div className="pl-3 text-white/85">
                        calculation = <span className="text-emerald-300">'scf'</span>, prefix ={' '}
                        <span className="text-emerald-300">'silicon'</span>
                      </div>
                      <div className="text-amber-300/90">&amp;SYSTEM</div>
                      <div className="pl-3 text-white/85">
                        ibrav = 2, nat = 2, ntyp = 1, ecutwfc = 50.0
                      </div>
                      <div className="text-teal-300/90">K_POINTS automatic</div>
                      <div className="pl-3 text-white/85">8 8 8 0 0 0</div>
                    </div>
                  </div>
                </div>

                {/* App Description */}
                <p className="mb-5 text-sm leading-relaxed text-[#2c4c54] lg:text-[15px]">
                  {app.description}
                </p>

                {/* Feature Highlights Bento Pills */}
                <div className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {app.highlights.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/60 px-3.5 py-2.5 text-xs font-semibold text-[#09323c] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0f4c5c]/10 text-[#0f4c5c]">
                        {i === 0 ? (
                          <Box className="h-3.5 w-3.5" />
                        ) : i === 1 ? (
                          <Layers className="h-3.5 w-3.5" />
                        ) : i === 2 ? (
                          <FileCode2 className="h-3.5 w-3.5" />
                        ) : (
                          <Sliders className="h-3.5 w-3.5" />
                        )}
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tags + Launch Button */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#0f4c5c]/10 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={cn(
                        'font-display rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                        tIdx === 0
                          ? 'bg-[#0f4c5c]/12 text-[#0f4c5c]'
                          : 'border border-white/80 bg-white/60 text-[#2c4c54]'
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#09323c] to-[#0f4c5c] px-5 py-2.5 text-xs font-bold text-[#faf7f0] shadow-[0_10px_20px_-5px_rgba(15,76,92,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all hover:scale-[1.02] hover:shadow-[0_14px_24px_-5px_rgba(15,76,92,0.5)] active:scale-95"
                >
                  Launch Seal Studio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Right-Side Glass Bento Cards (Apple Widget Style) */}
          <div className="col-span-1 flex flex-col gap-6 md:col-span-2 lg:col-span-4">
            {/* Quick Direct Launch Glass Widget */}
            <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[28px] border border-white/80 bg-white/50 p-6 shadow-[0_20px_40px_-15px_rgba(9,50,60,0.1),inset_0_1px_1px_rgba(255,255,255,0.95)] ring-1 ring-[#0f4c5c]/10 backdrop-blur-2xl">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f4c5c]/10 text-[#0f4c5c]">
                    <Terminal className="h-5 w-5" />
                  </span>
                  <span className="font-display rounded-full border border-white/80 bg-white/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#4f6d75]">
                    Zero-Install
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#09323c]">
                  Browser-Native Scientific Computing
                </h3>
                <p className="text-xs leading-relaxed text-[#4f6d75]">
                  Every Digital Lab app runs directly in the browser with zero local setup—built to streamline DFT input preparation, structure visualization, and materials data workflows.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-white/80 bg-white/60 p-3.5 backdrop-blur-md">
                <div className="font-display text-[10px] font-bold uppercase tracking-wider text-[#4f6d75]">
                  Featured Endpoint
                </div>
                <a
                  href="https://sebind.github.io/seal4qe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-between font-mono text-xs font-bold text-[#0f4c5c] hover:underline"
                >
                  <span>sebind.github.io/seal4qe</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Upcoming Lab Slot Glass Widget */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-dashed border-[#0f4c5c]/25 bg-white/35 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f0ebe0]/80 text-[#0f4c5c]">
                  <Cpu className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#0f4c5c]">
                    In the Pipeline
                  </span>
                  <h3 className="text-base font-bold text-[#09323c]">
                    More Vibecoded Tools
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#4f6d75]">
                Upcoming interactive utilities for band-structure plotting, thermoelectric transport analysis, and ML property predictors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
