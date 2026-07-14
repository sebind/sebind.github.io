import { GraduationCap, Mail, Share2, Podcast } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1754cf]/10 bg-[#f6f6f8] py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1754cf] text-white">
              </div>
              <span className="text-lg font-bold">Sebin Devasia</span>
            </div>
            <p className="mt-4 text-sm text-slate-500">Advancing physics through dedicated material research.</p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:sebindevasia@gmail.com" className="text-slate-400 hover:text-[#1754cf] transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-[#1754cf] transition-colors"><Share2 className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-[#1754cf] transition-colors"><Podcast className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-12 border-t border-[#1754cf]/5 pt-8 text-center text-xs text-slate-400">
          © 2026 | All rights reserved. Professional Portfolio.
        </div>
      </div>
    </footer>
  );
}
