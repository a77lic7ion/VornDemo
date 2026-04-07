import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#faf9f5] text-[#1b1c1a]">
      <Navbar theme="light" />
      <main className="pt-24 min-h-screen">
        {/* Hero Section / Context Header */}
        <section className="relative h-[409px] md:h-[512px] flex items-center px-12 hero-gradient-overlay overflow-hidden">
          <div className="max-w-screen-2xl mx-auto w-full z-10">
            <h1 className="font-headline text-5xl md:text-7xl text-white tracking-tight leading-tight max-w-3xl">
              Let’s Compose Your <span className="italic text-primary-fixed-dim">Next Masterpiece</span>.
            </h1>
            <p className="mt-6 text-stone-400 text-lg md:text-xl font-light tracking-wide max-w-xl">
              Dedicated to the art of bespoke environments. Contact our atelier to begin your curated journey.
            </p>
          </div>
          {/* Decorative Accent */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full"></div>
        </section>

        {/* Contact Content */}
        <section className="max-w-screen-2xl mx-auto px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Information Column */}
            <div className="lg:col-span-4 space-y-16">
              <div>
                <h2 className="font-headline text-2xl text-on-surface mb-6">Our Atelier</h2>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p className="font-light">128 Rue du Faubourg Saint-Honoré<br />75008 Paris, France</p>
                  <p className="font-light">+33 (0) 1 42 66 12 34</p>
                  <p className="font-light">atelier@themodernatelier.com</p>
                </div>
              </div>
              <div>
                <h2 className="font-headline text-2xl text-on-surface mb-6">Inquiries</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">New Projects</p>
                    <p className="text-secondary font-light">projects@themodernatelier.com</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Press & Media</p>
                    <p className="text-secondary font-light">press@themodernatelier.com</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <img
                  alt="Atelier workspace"
                  className="w-full aspect-[4/5] object-cover rounded-lg shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRG0l_lXj3k5vgtnuC8k-k2ms2yBqxpUFIapi9tGIONHVbGMITGg9dD5YcHQsDKx8Ig_uF1WiBl9WOpumyNRSNX3QbGo3W2ZEnL9gGJKe91dhMZJSEPoGUZSKX8ddUvMBU1jcsPXXf6KsYKcguFEtGnrX7-NB9gworOpu1OodfMTJNF3MLZiTW-O9UIhC5ppEA21PVbSBO10X0jnX0sljb-AkCAKpGMBQ86AvtYfyZ_N6ssHVyszd07wpp3m08k69GP58vd-Vttai8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Form Column */}
            <div className="lg:col-span-8 bg-surface-container-low p-8 md:p-16 rounded-lg shadow-sm">
              <form action="#" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block text-xs uppercase tracking-widest text-secondary mb-2">Full Name</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-stone-300 font-light text-lg"
                      placeholder="Julianne Voisine"
                      type="text"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-xs uppercase tracking-widest text-secondary mb-2">Email Address</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-stone-300 font-light text-lg"
                      placeholder="julianne@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2">Subject of Interest</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-colors font-light text-lg appearance-none">
                    <option>Residential Interior Design</option>
                    <option>Commercial Architecture</option>
                    <option>Furniture Commission</option>
                    <option>Art Curation</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2">The Message</label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-stone-300 font-light text-lg resize-none"
                    placeholder="Tell us about your vision..."
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex items-center justify-between pt-8">
                  <p className="text-sm text-stone-400 font-light max-w-sm leading-snug">
                    By submitting this form, you agree to our privacy policy and the storage of your data for communication purposes.
                  </p>
                  <button className="group flex items-center space-x-4 bg-gradient-to-br from-primary to-primary-container text-white px-10 py-5 rounded-lg transition-all hover:shadow-xl hover:shadow-primary/20 active:scale-95" type="submit">
                    <span className="font-headline tracking-wide text-lg">Send Inquiry</span>
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section (Asymmetric) */}
        <section className="max-w-screen-2xl mx-auto px-12 pb-24">
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-stone-900/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
            <img
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEBkmxjyTRGgy28ta4gV1k2m20ht-PcJ6VQVx6sI-hSU0BZ43BJEp3GXAyNvuncEfWPyZwPlhtaV5JcksWvVx8zKuB1eBZyH15Q7OVzE2KDiIlXFfFIyXQUo4XxpjTzXaGfPGUo2w8oGjlIe-AR5NVgzoQPuqjI_UnH8Szo1ToTLgoIk-4MQLnZkMYEAjN6Z0FNjbFRDq6jRaMnESC0pQXG4yeJVS7uEBarswuUBBlGcfdTz2p5GK0W66o0PRoseU19plVwv_bm9BG"
              referrerPolicy="no-referrer"
              alt="Map of Paris"
            />
            <div className="absolute top-12 left-12 z-20 bg-white/90 backdrop-blur p-8 rounded-lg shadow-2xl max-w-xs">
              <span className="material-symbols-outlined text-primary mb-4">location_on</span>
              <h3 className="font-headline text-xl mb-2">Visit the Studio</h3>
              <p className="text-sm text-secondary font-light leading-relaxed">
                Our Paris atelier is open by appointment only. Please contact us to schedule a private viewing of our current collections.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="light" />
    </div>
  );
};

export default Contact;
