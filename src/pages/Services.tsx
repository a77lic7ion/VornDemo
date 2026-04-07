import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  return (
    <div className="bg-[#262624] text-white">
      <Navbar theme="dark" />
      <main className="pt-32 pb-24">
        {/* Hero Section: Curated Hero */}
        <section className="max-w-screen-2xl mx-auto px-12 mb-40 relative">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-7 z-10">
              <h1 className="font-headline text-7xl md:text-8xl font-bold tracking-tighter text-stone-50 leading-[0.9] mb-8">
                The Art of <br /><span className="text-primary italic">Bespoke Living</span>
              </h1>
              <div className="max-w-lg mb-12">
                <p className="text-stone-400 text-lg leading-relaxed font-body">
                  Transforming spaces into living masterpieces. We blend architectural precision with curated aesthetics to define your signature atmosphere.
                </p>
              </div>
              <button className="terracotta-gradient text-white px-10 py-5 rounded-lg text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all shadow-xl">
                Start Your Journey
              </button>
            </div>
            <div className="col-span-12 md:col-span-5 relative">
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-primary/20 rounded-lg -z-10"></div>
              <img
                alt="Luxury Interior"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClI30tio-sVbRrEsqfXvAjI-waZ_5nRrC_FR_LGalzLzQg-FIIaugB4Feczela3DdwyKMfB2d_IQOFEY85cL_yKTTd1s9-cmm9u5yIh1mdEoKpqO9717jDYhDoFYrSI1DI-roaKX07O8nWpS8-44jrkccrt5ebjx_7WFkU2Lv3hsYEejYBIIGkhDi_yby3hZnwFvXS6ERxSuidau5yjgG8fxVv2WeUm5KgvjMWuqz-tGTytOI0s_kItBOS497SQeie9lhaSXLraxXq"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Services Grid: Bento Style */}
        <section className="max-w-screen-2xl mx-auto px-12 mb-40">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Core Capabilities</span>
              <h2 className="font-headline text-5xl mt-2">Elevated Offerings</h2>
            </div>
            <div className="w-1/3 h-px bg-stone-800"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interior Design */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-lg bg-stone-900 aspect-video md:aspect-auto h-[500px]">
              <img
                alt="Interior Design"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHkeAVWqmiUFpRSEHriITYZVMa9ryZv_fQyU4jsTR9-1ndwrYAwdFsbYHoB1vm64vav6AILbB8WFQP4XF1CXvAbtEe2NOi8HOb6mauCtuzsRCJiQPJgYp7FxBWQBpgjnwsG82pWaNI3MNKRItFZ4nIX22hxOeaQR1abbFZiVozNaNl1bt1iPX_w0RBf_6KIRo0B56KPbrXDyUaacTY9NyUx0MobpjoVCPbb33HbAWWms6_kRbL-Ha10KK8-AydlvZbLLjq0dQBL25a"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-12 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-headline text-4xl mb-4 text-white">Interior Design</h3>
                    <p className="text-stone-300 max-w-md font-light leading-relaxed">
                      Our signature approach involves layering textures, natural materials, and custom palettes to evoke emotional resonance within every room.
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-5xl font-light">north_east</span>
                </div>
              </div>
            </div>
            {/* Architectural Design */}
            <div className="group relative overflow-hidden rounded-lg bg-stone-900 h-[500px]">
              <img
                alt="Architectural Design"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwkvMlDxvR8xp94VWgM8u9-UAmBCq2ZgpjIMTf6lKsZWtUtz7DHEfxQJok-bN5lGgDRuW-_WLCprhf4dsYIvkf6z-thY1-jrrHZc61tZW8RLZRX3mWa2kz-DsV8byXoPmhuB7YJAc_bO0gT_41meUeyyZkm0KEB_zwirnGo-2ptx4PCfrrnZ8ajnz73JECP6E8Q7vxMFV3V9mIKauH3P0lSg_m5RR-a5w8le2BeNMPv2nHM7OpepJH0Gy4-kup5OJkj8h91OqGWjq"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-950/20"></div>
              <div className="absolute bottom-0 p-8">
                <h3 className="font-headline text-3xl mb-4 text-white">Architectural Design</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  Beyond aesthetics, we craft spatial flow and structural integrity that harmonizes with the surrounding landscape.
                </p>
                <ul className="text-xs tracking-widest uppercase text-stone-500 space-y-2">
                  <li>— Conceptual Sketching</li>
                  <li>— Permit Acquisition</li>
                  <li>— Structural Oversight</li>
                </ul>
              </div>
            </div>
            {/* Furniture Curation */}
            <div className="group relative overflow-hidden rounded-lg bg-stone-900 h-[500px]">
              <div className="absolute inset-0 terracotta-gradient opacity-10 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="p-12 h-full flex flex-col justify-between">
                <span className="material-symbols-outlined text-primary text-6xl">chair</span>
                <div>
                  <h3 className="font-headline text-3xl mb-4 text-white">Furniture Curation</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-8">
                    Hand-selecting pieces from global artisans and exclusive showrooms to create a collection that reflects your unique identity.
                  </p>
                  <a className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/30 pb-1" href="#">Explore Collections</a>
                </div>
              </div>
            </div>
            {/* Collaborative Process */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-lg bg-stone-800/50 p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                <div>
                  <h3 className="font-headline text-4xl mb-6">Our Atelier Process</h3>
                  <p className="text-stone-400 leading-relaxed mb-8">
                    We operate as a high-touch partnership, ensuring that every detail—from the initial floor plan to the final handle finish—is executed with meticulous precision.
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-stone-700/50 p-4 rounded-lg text-center flex-1">
                      <div className="text-primary text-2xl font-bold mb-1">01</div>
                      <div className="text-[10px] uppercase tracking-tighter text-stone-400">Concept</div>
                    </div>
                    <div className="bg-stone-700/50 p-4 rounded-lg text-center flex-1">
                      <div className="text-primary text-2xl font-bold mb-1">02</div>
                      <div className="text-[10px] uppercase tracking-tighter text-stone-400">Design</div>
                    </div>
                    <div className="bg-stone-700/50 p-4 rounded-lg text-center flex-1">
                      <div className="text-primary text-2xl font-bold mb-1">03</div>
                      <div className="text-[10px] uppercase tracking-tighter text-stone-400">Build</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    alt="Process"
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7tczT_vmM0cbiRwW3geqI92jL67QhOJ3J30bF_XE88fRjSI9TQzf1zs-4OVI4Cm90dMnCvohcOTKYGmVYfCefqJhb0ngFDHUZQlnGzyTpdGwxxneo8NbyvNmmqbYRJZ7hhXH0pAUkD-5vhiacLJfhLKYoQkhDwBk8yIRYhe_GJQNTXV5sEGJuNMBhMA1H8J_xVj5sZtAW7FL4QbjtisSPGGJzpXj9di33UuwJCCIrlpj6UOnTvCKJd4PZ3BVsp3X676UbLp0U2fzT"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-screen-xl mx-auto px-12 mb-40 text-center">
          <div className="py-24 px-12 rounded-xl bg-stone-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-800/20 blur-[100px]"></div>
            <h2 className="font-headline text-5xl md:text-6xl mb-8 relative z-10">Ready to <span className="text-primary">Evolve</span> Your Space?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg mb-12 font-light relative z-10">
              Join our exclusive list of clients who value discretion, innovation, and timeless design. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
              <button className="terracotta-gradient px-12 py-5 rounded-lg font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform">
                Request a Private Consultation
              </button>
              <button className="bg-stone-800 px-12 py-5 rounded-lg font-bold uppercase tracking-widest text-sm border border-stone-700 hover:bg-stone-700 transition-all">
                View Lookbook
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="dark" />
    </div>
  );
};

export default Services;
