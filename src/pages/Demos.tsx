import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Demos: React.FC = () => {
  return (
    <div className="bg-background font-body text-on-surface antialiased">
      <Navbar theme="dark" />
      <main>
        {/* Hero Section / Slider */}
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-stone-950">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Luxury interior"
              className="w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7iqG6nBSAXZp0wduh8YPWKzb3hRIgl_vRJidYA_hhr0T5_qHV6BehAUaOv8QiIXWNFQZx95eH8pY3HzlA2uSk-3OHO4jHWpKGwaC7OBt8uVmcwc_3CYgRmGv1hvbeaebBd3AknRMcQ7PtwhdrglsEaMP5XZltd5dVxKfmj9S2zeL5Z7gU0__hyEQsuP_t89c4pzpwlNTXfu2nLDX2M8aPj2LzHrbF0aPB2tRybZGaT0OuznDkecK8yroETh_hha7VmyfV4fzzsX-m"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 hero-gradient-overlay"></div>
          </div>
          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-12 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-8 lg:col-span-7">
              {/* Counter Indicator */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-primary font-headline text-xl">03</span>
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="text-stone-400 font-headline text-xl">03</span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl text-surface font-bold leading-[1.1] mb-10 tracking-tight">
                Extraordinary <br /> Home Spaces.
              </h1>
              {/* CTAs */}
              <div className="flex flex-wrap gap-6 items-center">
                <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-lg font-medium transition-transform duration-200 active:scale-95">
                  View Services
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 text-surface rounded-lg font-medium hover:bg-surface/10 transition-colors duration-300">
                  Contact us
                </button>
              </div>
            </div>
            {/* Slider Arrows (Editorial Asymmetry) */}
            <div className="absolute bottom-24 right-12 flex gap-4">
              <button className="w-14 h-14 flex items-center justify-center border border-outline-variant/20 rounded-full text-surface hover:bg-primary hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-14 h-14 flex items-center justify-center border border-outline-variant/20 rounded-full text-surface hover:bg-primary hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer / Status Bar Component */}
        <div className="w-full bg-stone-900 border-t border-stone-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-screen-2xl mx-auto">
            {/* Footer Item 1 */}
            <div className="flex flex-col gap-3 px-12 py-10 border-r border-stone-800 last:border-r-0 group hover:bg-stone-800/50 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">star</span>
              <span className="font-label text-sm uppercase tracking-wider text-surface-container-highest">Award-winning Solutions</span>
            </div>
            {/* Footer Item 2 */}
            <div className="flex flex-col gap-3 px-12 py-10 border-r border-stone-800 last:border-r-0 group hover:bg-stone-800/50 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">calendar_today</span>
              <span className="font-label text-sm uppercase tracking-wider text-surface-container-highest">Exclusive 10 year warranty</span>
            </div>
            {/* Footer Item 3 */}
            <div className="flex flex-col gap-3 px-12 py-10 border-r border-stone-800 last:border-r-0 group hover:bg-stone-800/50 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">home</span>
              <span className="font-label text-sm uppercase tracking-wider text-surface-container-highest">Modern interior projects</span>
            </div>
            {/* Footer Item 4 */}
            <div className="flex flex-col gap-3 px-12 py-10 border-r border-stone-800 last:border-r-0 group hover:bg-stone-800/50 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">edit</span>
              <span className="font-label text-sm uppercase tracking-wider text-surface-container-highest">Get a personal estimate</span>
            </div>
          </div>
        </div>
      </main>
      <Footer theme="dark" />
    </div>
  );
};

export default Demos;
