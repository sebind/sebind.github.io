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
      className="relative flex flex-1 justify-center overflow-x-clip py-8 px-4 sm:py-12 sm:px-6 md:px-16 lg:px-32"
    >
      {/* Ambient Soft Radial Background Glows (GPU-safe on mobile without filter:blur tile artifacts) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(15,76,92,0.12)_0%,rgba(20,184,166,0.06)_45%,transparent_70%)]" />
        <div className="absolute top-1/3 -right-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.08)_0%,rgba(15,76,92,0.05)_45%,transparent_70%)]" />
        <div className="absolute -bottom-24 left-10 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(9,50,60,0.08)_0%,rgba(45,212,191,0.04)_45%,transparent_70%)]" />
      </div>

      <div className="layout-content-container flex w-full max-w-[1200px] min-w-0 flex-1 flex-col">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0f4c5c]/15 bg-[#fffdf9]/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0f4c5c] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#0f4c5c]" />
            <span className="font-display">Vibecoded Scientific Apps</span>
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-[#09323c] md:text-5xl">
                Digital <span className="text-[#0f4c5c]">Lab</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-[#2c4c54]">
                Interactive web tools, scientific studios, and computational workflows crafted for rapid materials discovery and classroom exploration.
              </p>
            </div>

            {/* Segmented Filter Pill */}
            <div className="flex flex-wrap items-center gap-1.5 self-start rounded-2xl border border-[#0f4c5c]/15 bg-[#fffdf9]/90 p-1.5 shadow-xs md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors duration-200',
                    activeCategory === cat
                      ? 'bg-[#0f4c5c] text-[#faf7f0] shadow-xs'
                      : 'text-[#2c4c54] hover:bg-[#f0ebe0]/70 hover:text-[#09323c]'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="group relative col-span-1 min-w-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-[#0f4c5c]/15 bg-[#fffdf9] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0f4c5c]/30 hover:shadow-lg md:col-span-2 lg:col-span-8 lg:p-8"
            >
              <div className="min-w-0">
                {/* Top Bar: App Icon + Title + Live Badge */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Squircle app icon */}
                    <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#09323c] via-[#0f4c5c] to-[#14b8a6] text-[#faf7f0] shadow-sm">
                      <Atom className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#09323c]">
                          {app.name}
                        </h2>
                        {app.version && (
                          <span className="rounded-full border border-[#0f4c5c]/15 bg-[#faf7f0] px-2 py-0.5 font-mono text-[10px] font-bold text-[#0f4c5c]">
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
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {app.status}
                    </span>
                  </div>
                </div>

                {/* Interactive Studio Preview Window */}
                <div className="mb-6 overflow-hidden rounded-2xl border border-[#09323c]/20 bg-gradient-to-br from-[#09323c] via-[#0f4c5c] to-[#134e5e] p-3.5 sm:p-4 text-[#faf7f0] shadow-md">
                  {/* macOS Window Chrome */}
                  <div className="mb-3 flex items-center justify-between gap-2 border-b border-white/15 pb-2.5">
                    <div className="flex min-w-0 items-center gap-1.5">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5f56]" />
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffbd2e]" />
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#27c93f]" />
                      <span className="ml-1.5 truncate font-mono text-[11px] text-white/75">
                        sebind.github.io/seal4qe — pw.x studio
                      </span>
                    </div>
                    <span className="shrink-0 rounded-md bg-white/10 px-2 py-0.5 font-mono text-[10px] text-teal-200">
                      SCF / Relax / Bands
                    </span>
                  </div>

                  {/* Studio Mockup Content */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
                    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-3 sm:col-span-5">
                      <div className="flex items-center justify-between text-[11px] text-teal-200/90">
                        <span className="flex items-center gap-1 font-semibold">
                          <Box className="h-3.5 w-3.5" /> Crystal Unit Cell
                        </span>
                        <span className="font-mono text-[10px] text-white/60">CIF / XYZ</span>
                      </div>
                      <div className="my-3 flex items-center justify-center gap-3 py-1">
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-400/20 ring-1 ring-teal-300/40">
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
                      className="flex items-center gap-2.5 rounded-xl border border-[#0f4c5c]/15 bg-[#faf7f0] px-3.5 py-2.5 text-xs font-semibold text-[#09323c]"
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
                          : 'border border-[#0f4c5c]/15 bg-[#faf7f0] text-[#2c4c54]'
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
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#09323c] to-[#0f4c5c] px-5 py-2.5 text-xs font-bold text-[#faf7f0] shadow-sm transition-all hover:opacity-95 active:scale-95"
                >
                  Launch Seal Studio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}

          {/* Right-Side Bento Cards */}
          <div className="col-span-1 min-w-0 flex flex-col gap-6 md:col-span-2 lg:col-span-4">
            {/* Quick Direct Launch Widget */}
            <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-[#0f4c5c]/15 bg-[#fffdf9] p-5 sm:p-6 shadow-sm">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f4c5c]/10 text-[#0f4c5c]">
                    <Terminal className="h-5 w-5" />
                  </span>
                  <span className="font-display rounded-full border border-[#0f4c5c]/15 bg-[#faf7f0] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#4f6d75]">
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

              <div className="mt-6 rounded-2xl border border-[#0f4c5c]/15 bg-[#faf7f0] p-3.5">
                <div className="font-display text-[10px] font-bold uppercase tracking-wider text-[#4f6d75]">
                  Featured Endpoint
                </div>
                <a
                  href="https://sebind.github.io/seal4qe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-between gap-2 font-mono text-xs font-bold text-[#0f4c5c] hover:underline"
                >
                  <span className="truncate">sebind.github.io/seal4qe</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Upcoming Lab Slot Widget */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-dashed border-[#0f4c5c]/25 bg-[#fffdf9]/70 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f0ebe0] text-[#0f4c5c]">
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
