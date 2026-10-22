import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, Building2, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const subject = (formData.get('subject') as string) || 'Inquiry from Portfolio Website';
    const message = (formData.get('message') as string) || '';

    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:sebindevasia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-1 justify-center py-12 px-6 md:px-20 lg:px-40"
    >
      <div className="flex flex-col max-w-[1100px] w-full">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="font-display flex items-center gap-2 text-[#0f4c5c] font-bold text-sm uppercase tracking-widest">
            <span className="h-px w-8 bg-[#0f4c5c]"></span>
            Get in Touch
          </div>
          <h1 className="text-[#09323c] text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Contact
          </h1>
          <p className="text-[#2c4c54] text-lg max-w-2xl leading-relaxed">
            Interested in research collaborations, prospective student opportunities, or academic inquiries? Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-[#0f4c5c]/15 bg-[#fffdf9] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#09323c] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0f4c5c]/10 text-[#0f4c5c]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#4f6d75] mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:sebindevasia@gmail.com"
                      className="text-base font-medium text-[#09323c] hover:text-[#0f4c5c] hover:underline break-all transition-colors"
                    >
                      sebindevasia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0f4c5c]/10 text-[#0f4c5c]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#4f6d75] mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+916282714836"
                      className="text-base font-medium text-[#09323c] hover:text-[#0f4c5c] transition-colors"
                    >
                      +91 - 6282 7148 36
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0f4c5c]/10 text-[#0f4c5c]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#4f6d75] mb-1">
                      Affiliation
                    </h3>
                    <p className="text-base font-medium text-[#09323c]">
                      Department of Physics
                    </p>
                    <p className="text-sm text-[#2c4c54] mt-0.5 leading-relaxed">
                      PSG Institute of Technology and Applied Research<br />
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0f4c5c]/10 text-[#0f4c5c]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#4f6d75] mb-1">
                      Home Address
                    </h3>
                    <p className="text-sm text-[#2c4c54] leading-relaxed">
                      Kerala - 686606, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0f4c5c]/15">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#4f6d75] mb-3">
                  Research Laboratory
                </h3>
                <a
                  href="https://lasergroup.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#f0ebe0] px-4 py-3 text-sm font-bold text-[#0f4c5c] transition-all hover:bg-[#0f4c5c] hover:text-[#faf7f0]"
                >
                  <Globe className="w-4 h-4" />
                  Visit LASER Group Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#0f4c5c]/15 bg-[#fffdf9] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-[#09323c] mb-2">
                Send a Message
              </h2>
              <p className="text-sm text-[#4f6d75] mb-8">
                Fill out the form below to compose a direct email inquiry.
              </p>

              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-bold text-[#09323c] mb-1.5"
                  >
                    Full Name <span className="text-[#0f4c5c]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    enterKeyHint="next"
                    placeholder="Dr. Jane Doe"
                    className="w-full min-h-[48px] rounded-xl border border-[#0f4c5c]/25 bg-[#faf7f0] px-4 py-3 text-base text-[#09323c] placeholder:text-[#4f6d75]/60 focus:border-[#0f4c5c] focus:bg-[#fffdf9] focus:outline-2 focus:outline-offset-2 focus:outline-[#0f4c5c] user-invalid:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-bold text-[#09323c] mb-1.5"
                  >
                    Email Address <span className="text-[#0f4c5c]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    enterKeyHint="next"
                    placeholder="jane.doe@university.edu"
                    className="w-full min-h-[48px] rounded-xl border border-[#0f4c5c]/25 bg-[#faf7f0] px-4 py-3 text-base text-[#09323c] placeholder:text-[#4f6d75]/60 focus:border-[#0f4c5c] focus:bg-[#fffdf9] focus:outline-2 focus:outline-offset-2 focus:outline-[#0f4c5c] user-invalid:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-bold text-[#09323c] mb-1.5"
                  >
                    Subject <span className="text-[#0f4c5c]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    enterKeyHint="next"
                    placeholder="Research Collaboration / Ph.D. Inquiry"
                    className="w-full min-h-[48px] rounded-xl border border-[#0f4c5c]/25 bg-[#faf7f0] px-4 py-3 text-base text-[#09323c] placeholder:text-[#4f6d75]/60 focus:border-[#0f4c5c] focus:bg-[#fffdf9] focus:outline-2 focus:outline-offset-2 focus:outline-[#0f4c5c] user-invalid:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-bold text-[#09323c] mb-1.5"
                  >
                    Message <span className="text-[#0f4c5c]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-[#0f4c5c]/25 bg-[#faf7f0] px-4 py-3 text-base text-[#09323c] placeholder:text-[#4f6d75]/60 focus:border-[#0f4c5c] focus:bg-[#fffdf9] focus:outline-2 focus:outline-offset-2 focus:outline-[#0f4c5c] user-invalid:border-red-600 transition-colors resize-y"
                  />
                </div>

                <div aria-live="polite">
                  {submitted && (
                    <div className="flex items-center gap-2.5 rounded-xl bg-[#0f4c5c]/10 border border-[#0f4c5c]/25 px-4 py-3 text-sm font-medium text-[#09323c]">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#0f4c5c]" />
                      <span>
                        Opening your email client to send the message to{' '}
                        <strong className="font-bold">sebindevasia@gmail.com</strong>.
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#0f4c5c] px-8 py-3.5 text-base font-bold text-[#faf7f0] shadow-md transition-all hover:bg-[#09323c] hover:shadow-lg active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
