import { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowUpRight,
  Sparkles,
  Atom,
  Cpu,
  Layers,
  ChevronLeft,
  Tag,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  excerpt: string;
  content: string[];
  codeSnippet?: {
    title: string;
    lines: string[];
  };
  tags: string[];
  icon: 'atom' | 'cpu' | 'layers';
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('All Posts');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'vibecoding-seal4qe',
      title: 'Building Seal: Vibecoding a Browser-Native Quantum ESPRESSO Studio',
      subtitle: 'Lowering the barrier to first-principles DFT input preparation with modern web tools',
      category: 'Vibecoding & Tools',
      date: 'October 2026',
      readTime: '5 min read',
      featured: true,
      excerpt:
        'Preparing error-free pw.x input files and visualizing crystal unit cells often requires juggling multiple desktop utilities. Here is how Seal brings interactive 3D structure building and Quantum ESPRESSO configuration directly into the browser.',
      content: [
        'First-principles Density Functional Theory (DFT) calculations using Quantum ESPRESSO are foundational in modern computational materials science. Yet for students and researchers alike, setting up crystal lattices, verifying atomic coordinates from .cif or .xyz files, and formatting namelists (&CONTROL, &SYSTEM, &ELECTRONS) can be error-prone.',
        'With Seal (Quantum ESPRESSO Studio), the goal was to create a zero-install, browser-native environment where researchers can inspect crystal structures like Silicon, Graphene, TiO₂, and SrTiO₃ in real time while dynamically generating clean pw.x input decks.',
        'By combining interactive 3D crystallographic visualization with instant parameter validation, Seal bridges the gap between conceptual materials design and high-performance computing execution.',
      ],
      codeSnippet: {
        title: 'seal4qe — Generated pw.x Workflow',
        lines: [
          "&CONTROL calculation = 'scf', prefix = 'SrTiO3', pseudo_dir = './pseudo/' /",
          '&SYSTEM  ibrav = 1, celldm(1) = 7.37, nat = 5, ntyp = 3, ecutwfc = 60.0 /',
          'K_POINTS automatic',
          '  8 8 8 0 0 0',
        ],
      },
      tags: ['Quantum ESPRESSO', 'Vibecoding', 'Web Tools', 'DFT'],
      icon: 'atom',
    },
    {
      id: 'dft-ml-hydrogen-carbon-capture',
      title: 'First-Principles DFT & Machine Learning for Hydrogen Storage and Carbon Capture',
      subtitle: 'Accelerating the screening of porous functional materials',
      category: 'Computational & DFT',
      date: 'September 2026',
      readTime: '6 min read',
      excerpt:
        'Combining ab-initio binding energy calculations with machine learning descriptors allows us to rapidly explore vast chemical spaces for reversible H₂ storage and selective CO₂ adsorption.',
      content: [
        'Addressing global clean-energy challenges requires functional materials capable of storing hydrogen at practical temperatures and capturing carbon dioxide with high selectivity.',
        'While First-Principles Density Functional Theory accurately resolves van der Waals corrected adsorption energies and charge transfer mechanisms, screening thousands of candidate frameworks purely via DFT is computationally expensive.',
        'By training machine learning models on curated DFT electronic and structural descriptors, we can predict gas adsorption capacities orders of magnitude faster and focus experimental synthesis on the most promising candidates.',
      ],
      tags: ['Hydrogen Storage', 'Carbon Capture', 'Machine Learning', 'DFT'],
      icon: 'cpu',
    },
    {
      id: 'quaternary-oxychalcogenides-thermoelectrics',
      title: 'Quaternary Oxychalcogenides & Chalcohalides for Energy Conversion',
      subtitle: 'Tuning phonon transport and electronic band structure in low-toxicity semiconductors',
      category: 'Materials Science',
      date: 'August 2026',
      readTime: '4 min read',
      excerpt:
        'How mixed-anion chemistry in oxychalcogenides and pnictogen-based chalcohalides unlocks ultralow lattice thermal conductivity alongside favorable carrier mobility.',
      content: [
        'Mixed-anion compounds—such as quaternary oxychalcogenides and pnictogen chalcohalides—offer a rich chemical playground where contrasting bond ionicities and atomic masses coexist within layered crystal architectures.',
        'In thermoelectric applications, this structural hierarchy scatters heat-carrying phonons while preserving electronic transport pathways, enabling higher thermoelectric figure-of-merit (ZT) values.',
        'Integrating ultrasonic spray pyrolysis and solid-state synthesis with DFT band-structure modeling helps us map structure–property relationships for sustainable energy harvesting and broadband photodetection.',
      ],
      tags: ['Thermoelectrics', 'Oxychalcogenides', 'Optoelectronics'],
      icon: 'layers',
    },
  ];

  const categories = [
    'All Posts',
    'Vibecoding & Tools',
    'Computational & DFT',
    'Materials Science',
  ];

  const filteredPosts =
    activeCategory === 'All Posts'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const renderIcon = (type: BlogPost['icon']) => {
    switch (type) {
      case 'atom':
        return <Atom className="h-6 w-6" />;
      case 'cpu':
        return <Cpu className="h-6 w-6" />;
      case 'layers':
        return <Layers className="h-6 w-6" />;
    }
  };

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
            <BookOpen className="h-3.5 w-3.5 text-[#0f4c5c]" />
            <span className="font-display">Research Notes &amp; Essays</span>
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#09323c] md:text-5xl">
                 Lab <span className="text-[#0f4c5c]">Blog</span>
              </h1>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#2c4c54]">
                Thoughts on computational physics, first-principles DFT workflows, functional materials, and vibecoding scientific web applications.
              </p>
            </div>

            {/* Apple-Style Segmented Glass Filter Pill */}
            <div className="flex flex-wrap items-center gap-1.5 self-start rounded-2xl border border-white/80 bg-white/50 p-1.5 shadow-[0_8px_24px_-6px_rgba(9,50,60,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-2xl md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedPost(null);
                    setActiveCategory(cat);
                  }}
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

        <AnimatePresence mode="wait">
          {selectedPost ? (
            /* Full Article Glass Reader View */
            <motion.article
              key={selectedPost.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/60 p-6 shadow-[0_24px_48px_-12px_rgba(9,50,60,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] ring-1 ring-[#0f4c5c]/10 backdrop-blur-2xl md:p-10"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold text-[#0f4c5c] shadow-xs transition-all hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to all articles
              </button>

              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#4f6d75]">
                <span className="rounded-full bg-[#0f4c5c]/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-[#0f4c5c]">
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}
                </span>
              </div>

              <h2 className="mb-2 text-2xl font-black leading-tight text-[#09323c] md:text-4xl">
                {selectedPost.title}
              </h2>
              <p className="mb-8 text-base font-medium text-[#0f4c5c] md:text-lg">
                {selectedPost.subtitle}
              </p>

              <div className="space-y-5 text-base leading-relaxed text-[#2c4c54]">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {selectedPost.codeSnippet && (
                <div className="my-8 overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-[#09323c]/95 via-[#0f4c5c]/90 to-[#134e5e]/95 p-4 text-[#faf7f0] shadow-[0_12px_30px_-8px_rgba(9,50,60,0.3)]">
                  <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/90" />
                      <span className="ml-2 font-mono text-[11px] text-white/75">
                        {selectedPost.codeSnippet.title}
                      </span>
                    </div>
                  </div>
                  <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-teal-100">
                    {selectedPost.codeSnippet.lines.join('\n')}
                  </pre>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#0f4c5c]/10 pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-display rounded-full border border-white/80 bg-white/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2c4c54]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedPost.id === 'vibecoding-seal4qe' && (
                  <a
                    href="https://sebind.github.io/seal4qe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#09323c] to-[#0f4c5c] px-5 py-2.5 text-xs font-bold text-[#faf7f0] shadow-md transition-all hover:scale-[1.02]"
                  >
                    Try Seal Studio <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ) : (
            /* Apple-Themed Glassy Bento Blog Grid */
            <motion.div
              key="blog-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12"
            >
              {filteredPosts.map((post, idx) => {
                const isFeatured = post.featured && activeCategory === 'All Posts' && idx === 0;
                return (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className={cn(
                      'group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/80 bg-white/55 p-6 shadow-[0_24px_48px_-12px_rgba(9,50,60,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] ring-1 ring-[#0f4c5c]/10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/65 hover:shadow-[0_32px_64px_-12px_rgba(9,50,60,0.18),inset_0_1px_2px_rgba(255,255,255,1)]',
                      isFeatured
                        ? 'col-span-1 md:col-span-2 lg:col-span-12 lg:p-8'
                        : 'col-span-1 md:col-span-1 lg:col-span-6'
                    )}
                  >
                    {/* Specular glass reflection */}
                    <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-white/70 via-[#14b8a6]/15 to-transparent blur-2xl transition-transform duration-700 group-hover:scale-110" />

                    <div>
                      {/* Top Meta Row */}
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#09323c] via-[#0f4c5c] to-[#14b8a6] text-[#faf7f0] shadow-[0_8px_20px_-4px_rgba(15,76,92,0.4),inset_0_1px_1px_rgba(255,255,255,0.35)]">
                            {renderIcon(post.icon)}
                          </div>
                          <div>
                            <span className="font-display inline-flex items-center gap-1 rounded-full bg-[#0f4c5c]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0f4c5c]">
                              {isFeatured && <Sparkles className="h-3 w-3" />}
                              {post.category}
                            </span>
                            <div className="mt-1 flex items-center gap-3 text-xs font-medium text-[#4f6d75]">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {post.readTime}
                              </span>
                            </div>
                          </div>
                        </div>

                        {isFeatured && (
                          <span className="rounded-full border border-white/80 bg-white/70 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-[#09323c] shadow-2xs backdrop-blur-md">
                            Featured Post
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h2
                        onClick={() => setSelectedPost(post)}
                        className={cn(
                          'cursor-pointer font-black tracking-tight text-[#09323c] transition-colors group-hover:text-[#0f4c5c]',
                          isFeatured ? 'mb-2 text-2xl lg:text-3xl' : 'mb-2 text-xl'
                        )}
                      >
                        {post.title}
                      </h2>
                      <p className="mb-3 font-display text-xs font-bold text-[#0f4c5c] lg:text-sm">
                        {post.subtitle}
                      </p>

                      {/* Excerpt */}
                      <p className="mb-5 text-sm leading-relaxed text-[#2c4c54]">
                        {post.excerpt}
                      </p>

                      {/* Featured Code Preview inside Featured Card */}
                      {isFeatured && post.codeSnippet && (
                        <div className="mb-6 overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-[#09323c]/95 via-[#0f4c5c]/90 to-[#134e5e]/95 p-4 text-[#faf7f0] shadow-[0_12px_30px_-8px_rgba(9,50,60,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]">
                          <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/90" />
                              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/90" />
                              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/90" />
                              <span className="ml-2 font-mono text-[11px] text-white/70">
                                {post.codeSnippet.title}
                              </span>
                            </div>
                            <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-teal-200">
                              DFT Snippet
                            </span>
                          </div>
                          <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-teal-100/95">
                            {post.codeSnippet.lines.join('\n')}
                          </pre>
                        </div>
                      )}
                    </div>

                    {/* Footer: Tags + Read Button */}
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[#0f4c5c]/10 pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-display inline-flex items-center gap-1 rounded-full border border-white/80 bg-white/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2c4c54]"
                          >
                            <Tag className="h-2.5 w-2.5 text-[#0f4c5c]" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedPost(post)}
                        className="inline-flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-[#09323c] to-[#0f4c5c] px-4 py-2 text-xs font-bold text-[#faf7f0] shadow-[0_8px_16px_-4px_rgba(15,76,92,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all hover:scale-[1.02] active:scale-95"
                      >
                        Read Article
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.main>
  );
}
