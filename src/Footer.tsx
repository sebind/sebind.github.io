import { GraduationCap, Mail, Share2, Podcast } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#0f4c5c]/15 bg-[#f0ebe0]/60 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#0f4c5c] text-[#faf7f0]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-display text-lg font-bold text-[#09323c]">Sebin Devasia</span>
            </div>
            <p className="mt-4 text-sm text-[#4f6d75]">Advancing physics through dedicated material research.</p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:sebindevasia@gmail.com" aria-label="Email Dr. Sebin Devasia" className="text-[#4f6d75] hover:text-[#0f4c5c] transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="#" aria-label="Share portfolio" className="text-[#4f6d75] hover:text-[#0f4c5c] transition-colors"><Share2 className="w-5 h-5" /></a>
            <a href="#" aria-label="Podcast and media" className="text-[#4f6d75] hover:text-[#0f4c5c] transition-colors"><Podcast className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-12 border-t border-[#0f4c5c]/10 pt-8 text-center text-xs text-[#4f6d75]">
          © 2026 | All rights reserved. Professional Portfolio.
        </div>
      </div>
    </footer>
  );
}
