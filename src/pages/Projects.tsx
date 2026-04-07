import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects: React.FC = () => {
  return (
    <div className="bg-[#262624] text-inverse-on-surface selection:bg-primary selection:text-white">
      <Navbar theme="dark" />
      <main className="pt-32 pb-24">
        {/* Hero Header */}
        <header className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="uppercase tracking-[0.3em] text-sm text-primary font-semibold mb-4 block">Archive 2024</span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">Selected <br /><i className="font-normal">Works.</i></h1>
            </div>
            <div className="max-w-sm pb-2">
              <p className="text-stone-400 text-lg leading-relaxed font-light">
                A curation of architectural interventions and interior narratives where heritage meets the sharp edge of modernism.
              </p>
            </div>
          </div>
        </header>

        {/* Project Portfolio - High-End Asymmetric Gallery */}
        <section className="px-6 md:px-12 max-w-screen-2xl mx-auto space-y-32 md:space-y-48">
          {/* Project 01: Large Spanning Hero */}
          <article className="group relative">
            <div className="aspect-[21/9] w-full overflow-hidden rounded-lg bg-stone-800">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_-UU4wTV1x_mHTEP7s_LiPauLhe2vL6Ajm6RLt11nGF2HpxBKTI_IICi41rqrhTsiVnk4kk13AKtSCXEdcYzBh7l_LKEW_ORBXsleGex2UT0i6tjPm96J_msPvBXmxhd3urAe3__xa7CgpKP3r_uGcDPLICKw0Q0hhwFvxN7T64z2ftixVdaeZUhPxi0W2gPGInuotcoEVFg_0akdYd8GMHf8xODqpoTaXhN84nMmwCJJueSrBb2NOHH1jmJl98MzzrDx1adnh0UK"
                referrerPolicy="no-referrer"
                alt="The Heirloom Residence"
              />
            </div>
            <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <h2 className="font-headline text-3xl md:text-5xl text-stone-50 mb-4">The Heirloom Residence</h2>
                <div className="flex gap-4 items-center">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-widest border border-stone-700 rounded-full text-stone-400">Residential</span>
                  <span className="px-3 py-1 text-[10px] uppercase tracking-widest border border-stone-700 rounded-full text-stone-400">Restoration</span>
                </div>
              </div>
              <div className="md:max-w-md">
                <p className="text-stone-400 leading-relaxed mb-6">A deep-earth study in texture and silence. We revitalized a 1920s estate by stripping away the noise, leaving only the soul of the clay and the timber.</p>
                <a className="inline-flex items-center gap-2 text-primary font-semibold group/link" href="#">
                  <span className="uppercase text-xs tracking-widest">Explore Project</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Project 02 & 03: Asymmetric Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <article className="md:col-span-7 group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-stone-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbSOg4fuzBm1Pa5sLHH9AnREf4zLwAmibPxaZRAGqNoOHjY7GletVzW0Qr61bPVLOUohgINfe2kXHqQ5OM4agawjSqEaPXQetegNlAlXKjao-hP1rdpxDgiTX5Jw-jbP0z8qwSnQIv3y8Ah03pNCdgLyFldWak5e0gu8UI8KV5wlEQeHFjanw252XxK8RuIyr58Zgy7ehWhbBgFFsKokCSooHVWrnvOTMxOdQTuzbq67AAImzgBIRRyvHQd2PpTPZIKHU-4zhTLHVv"
                  referrerPolicy="no-referrer"
                  alt="Concrete Silence"
                />
              </div>
              <div className="mt-8">
                <h2 className="font-headline text-2xl md:text-3xl text-stone-50 mb-2">Concrete Silence</h2>
                <p className="text-stone-500 uppercase text-[10px] tracking-widest">Brutalist Retreat • Zurich</p>
              </div>
            </article>
            <article className="md:col-span-5 md:mt-32 group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpS94kBPpJ5Bwoj7okugCP3xlTwtDWaNf-Ww8U0K4EcFAR62taDev9V97w1XLBmOTdUToG96Uc9GI1v2AL9a_vXJ78hyoN5QOZ6OhpUDg6QMknMYLYG2yP5vfZ9RCN7KvLZ52b2eUilhQo4tUjqoygcO6J4VjRWgKCcRzrrPsqnCt-KzEgYDKZsmQWB5ClNh8mKHKOTzQORaITO9yBWxaZOQJ0MrL_jZgy0xlG_auxOkbfTPyIoqjFrArOPsWeae70-e8gocQqC6Jk"
                  referrerPolicy="no-referrer"
                  alt="The Dark Atelier"
                />
              </div>
              <div className="mt-8">
                <h2 className="font-headline text-2xl md:text-3xl text-stone-50 mb-2">The Dark Atelier</h2>
                <p className="text-stone-500 uppercase text-[10px] tracking-widest">Culinary Studio • Paris</p>
              </div>
            </article>
          </div>

          {/* Project 04: Full Bleed Visual Interlude */}
          <article className="relative w-full h-[819px] flex items-center justify-center group">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgKFQ23LiuPNTfGP7jXtdJ-VlC2cYYS0kTAN2HEaRUultwbafQXi0or2Ts_gxdMo9ijXVOPBuVAp5BDqyjP2nNOwN7m_fWg0_W9bxLRdqXr6_PhSnwNdp_cgLJBEeWVmtB7z2z6WDgDlPdgj3m6d-hm8I9R5_lck4WCA2rihjfg794tEZW0vJEdGKIBkhMNtxnJuZcw3V_Gk0R4PRLwSYN9aUl1FtWl6U4BSVOvAU-4IC8esIrLYPkDHXslT7K3ZMyHoQbtiZH_cu1"
                referrerPolicy="no-referrer"
                alt="Sanctuary"
              />
              <div className="absolute inset-0 bg-stone-950/40"></div>
            </div>
            <div className="relative z-10 text-center px-6">
              <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Ongoing Engagement</span>
              <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl text-stone-50 max-w-4xl leading-tight mb-8">Sanctuary of <br />Atmospheric Light.</h2>
              <button className="px-8 py-4 tonal-gradient rounded-lg text-white font-medium uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                View Journal
              </button>
            </div>
          </article>

          {/* Project 05 & 06: Reversed Asymmetry */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <article className="md:col-span-5 group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8jxhY5uw9sM7Z0iZ0fMzQ0wPyeb2YTrCGJw2mMi7_02rnHugVOzUs9ET7PzeBdqN5Q5VNZPvLUQi0UCpTicwNqhrcx_vrFJDx1O_GzGOOwNaB44Eri5Ehq_zJWEjdHzfs9VRw0K2L8CGFX_HYTVQliM3NTlinIrF1hZk5G0nkHPZCmi5Y6aruxw7DPcoX4KsA5XlMnKtsEf7seF0gHNLWr80RdDo9X3dS-GcXfeMiBVxaY-WmUAc2p9OsrEKXWoYtJ6PHd5reAPUu"
                  referrerPolicy="no-referrer"
                  alt="Mediterranean Solstice"
                />
              </div>
              <div className="mt-8">
                <h2 className="font-headline text-2xl md:text-3xl text-stone-50 mb-2">Mediterranean Solstice</h2>
                <p className="text-stone-500 uppercase text-[10px] tracking-widest">Outdoor Living • Ibiza</p>
              </div>
            </article>
            <article className="md:col-span-7 md:mt-[-8rem] group">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvgNzgTJdgSHQ94ClLuSzV461-XlayNk13x-cia-2UHqyGRA-QUNfTRU3WVVVgg0pBgWkQ8s_t0viEUhx2yea9TbIpRenAGw3z7YQisaIXFJyCUTI2BFg-W2vsNWDVEsaC_7zrYl-HrqGQs3fRCMI_MHmiEJCUgQOquZa666LeHUtFxjEJj2mOXHbAy-9YuGXGflaVBgQZ7ZtIrXNcYaxYFkmG3rif20CKwCuIP4eOATYWGhptMu6MHk_LDZY8UCK-MaNGa5Nz1swT"
                  referrerPolicy="no-referrer"
                  alt="The Archive Loft"
                />
              </div>
              <div className="mt-8">
                <h2 className="font-headline text-2xl md:text-3xl text-stone-50 mb-2">The Archive Loft</h2>
                <p className="text-stone-500 uppercase text-[10px] tracking-widest">Workplace • London</p>
              </div>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-48 px-6 md:px-12 max-w-screen-xl mx-auto text-center">
          <div className="py-24 bg-stone-900/50 rounded-lg backdrop-blur-sm border border-stone-800/30">
            <h3 className="font-headline text-3xl md:text-5xl text-stone-50 mb-8 italic">Ready to compose your space?</h3>
            <p className="text-stone-400 max-w-xl mx-auto mb-12 text-lg font-light">We accept a limited number of commissions per year to ensure the absolute integrity of every atelier project.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a className="tonal-gradient px-10 py-5 rounded-lg text-white font-bold uppercase tracking-[0.2em] text-xs" href="#">
                Start a Conversation
              </a>
              <a className="px-10 py-5 rounded-lg border border-stone-700 text-stone-50 font-bold uppercase tracking-[0.2em] text-xs hover:bg-stone-800 transition-colors" href="#">
                View Price Guide
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="dark" />
    </div>
  );
};

export default Projects;
