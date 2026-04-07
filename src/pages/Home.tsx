import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-[#262624] text-[#faf9f5]">
      <Navbar theme="dark" />
      <main className="pt-32 pb-24">
        {/* Hero Section: The Curated Hero */}
        <section className="max-w-screen-2xl mx-auto px-12 mb-32">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-7 relative z-10">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 block">Our Legacy</span>
              <h1 className="font-headline text-7xl md:text-8xl editorial-title text-stone-50 mb-8">
                The Soul of <br /> <span className="italic text-primary-fixed-dim">Modern Craft.</span>
              </h1>
              <div className="bg-primary/10 p-8 md:p-12 max-w-xl backdrop-blur-md rounded-lg border-l-4 border-primary">
                <p className="font-body text-xl text-stone-300 leading-relaxed">
                  We believe that space is more than four walls—it is an extension of the individual. Our atelier is dedicated to the pursuit of timeless design, where every detail is a deliberate act of artistry.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl">
                <img
                  alt="Luxury Architecture"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTJKEi49h8D6xy5E7XlPm9uIiM2ccZK7bhcutkooUXSvYtf3BHxug8weFCV2vVUh5cQ2eBRXPXh2Hg8wQlzgSeMlFfwFhtJ4G5AEdziTSbZDeVdj9CaQqcEGtxG9aSoq-6NsMzZaXPIsQMOz3sh4rSMCMm9pWc0BfoGWNAQrMaJ6mtBpKHDcgBiD-oWrxEWcKJFZR0ScIdaWAZzdzQJAygqbk-JA5lbdoKb8xEolVK_dpb0skMwmKa1XaVaZrW5_8RcELmWpkpifP_"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/20 rounded-lg -z-10 blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* The Story Section */}
        <section className="bg-stone-900/40 py-32 mb-32">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="font-headline text-4xl text-stone-50 mb-12">Our Philosophy</h2>
                <div className="space-y-8 text-stone-400 font-body text-lg leading-relaxed">
                  <p>
                    Founded in 2014, The Modern Atelier emerged from a desire to return to the slow, intentional methods of traditional craftsmanship while embracing the sleek geometry of modernism.
                  </p>
                  <p>
                    We don't follow trends. We curate environments that evolve with time. Every stone, every grain of wood, and every brushstroke of terracotta is selected to tell a story that lasts decades, not seasons.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-6">
                  <div className="w-24 h-[1px] bg-primary"></div>
                  <span className="font-headline italic text-primary text-2xl">Craft over Convenience.</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="pt-12">
                  <img
                    className="rounded-lg mb-4 h-80 w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj5GjD8tlVURjLdSBv-j3ZGjw2x7MC1zRWlWF5Ss7ZIEPHAYAIc3t77o4c5ssDyOCDxrirP9E-_T4ia5vWsyD7RGnk1cvINjK2QltmTHxL3C88nuojLVTUPzZUklmfxktzf_G3e8HlEUw-gg3Zm-EKxAngg4Z7q0FIQPheYkH1cO2ZhJtgz-ESXbh9jebu0s24wT5M8usFAMomT4OoI83_Zz9KmFHsnI39bNGVTWQZQeWFA6WzNrhsi7S8GQiNI8dSKfxy5MVCRaIz"
                    referrerPolicy="no-referrer"
                    alt="Artisan hands"
                  />
                  <img
                    className="rounded-lg h-60 w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVTZ-mj3kQZVC-Ow456Ypi0QvxVGZ9H8M4UZfcg8zMLKNOoTkXJWby5m-qMv82G147dw3xrudXp7ST_n0Iijhb8kQOMJOjFdhIC4D4PoJQP_I17g5m2eZt48q3n1ncByUeNP9yMSgy33d5GILbF904JBa39ka5z9uRjnwoJ4l922LdLSYmLG22ayFL5QEorOPygeY0OV_A1EOJ7E-WYiCkVWBYbSCXMYy1Pxs3KC8u0LCkfY_nNIqa7WMyHBVv10e8aqxopagHeT91"
                    referrerPolicy="no-referrer"
                    alt="Minimalist interior"
                  />
                </div>
                <div>
                  <img
                    className="rounded-lg mb-4 h-60 w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRRrhaVyKz8At3kzebN98mM_ZTax2R5W73LgnaNoeZ0OFJCLGNSnvjfQFaM0Qc-cIAALxJxQQoLctoXty5O3y2bDDBaVJYLM6PmW66W9uQJYq0yzy0rOpnSRzVlw86m0uaUNXJ9GH8ZCoPfIlXnCLiAod6Ikd4JYNO6MW9TB5evU7Z-01T7mFxhxjHvumuuLNB2V92egYjkNTe_STv4LS7yDeyGZpXnAbcTAMrxlZIJo6JRRZ5h_6vhy01wu5r6LY8zjqCiNLhVYwU"
                    referrerPolicy="no-referrer"
                    alt="Stone texture"
                  />
                  <img
                    className="rounded-lg h-80 w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQr71OOY1bgiD0Vz21QK5Kd_oIxvw_UHvSqASw_61md7TssCEN3g_74W1IF2bc0CTMcn4dGfYOUm1fNkeUbut3uXonepIRe0bDshcXMqIcb0v0oGHXP-8CCA9p2DAZYJDmE8CjOnZSgTGk9euPJ72-vMH1qlMKCSBTaSPV8eQX_Mm5VTHh_aHV811ZROWr7X1cLFMq_lC0umNFex2tl85hMaJBozwBITJUtgvI81MZUUmKIjMjidsxX_H8SnxELrdq80tEPxAhblP"
                    referrerPolicy="no-referrer"
                    alt="Drafting tools"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values: Bento Grid */}
        <section className="max-w-screen-2xl mx-auto px-12 mb-32">
          <h2 className="font-headline text-4xl text-stone-50 text-center mb-16">The Pillars of our Atelier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Item 1 */}
            <div className="md:col-span-2 bg-stone-900/60 p-12 rounded-lg group hover:bg-stone-900/80 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">architecture</span>
              <h3 className="font-headline text-3xl text-stone-50 mb-4">Intentional Design</h3>
              <p className="text-stone-400 text-lg">We architect experiences, not just structures. Every line serves a purpose, every shadow creates a mood.</p>
            </div>
            {/* Bento Item 2 */}
            <div className="bg-primary/20 p-12 rounded-lg flex flex-col justify-between">
              <h3 className="font-headline text-3xl text-primary-fixed-dim italic">100% Bespoke</h3>
              <div className="mt-8">
                <span className="font-body text-stone-300">Each project is a singular collaboration, tailored to the unique narrative of its owner.</span>
              </div>
            </div>
            {/* Bento Item 3 */}
            <div className="bg-stone-900/60 p-12 rounded-lg group">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">eco</span>
              <h3 className="font-headline text-3xl text-stone-50 mb-4">Sustainable Luxury</h3>
              <p className="text-stone-400 text-lg">Ethical sourcing of materials that age beautifully, ensuring a legacy that honors the earth.</p>
            </div>
            {/* Bento Item 4 */}
            <div className="md:col-span-2 relative overflow-hidden rounded-lg group">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHvQcXKX_irJsNzpoTVyHagR6SXDctWLcV6BtunHYSOK875WFVN-ANO3j38MBqHENtTcHkgUecFMyIclgqaQKZ8eArMRVtm1AdIeiFBc89doSqpiCBOcMfkASgYXDibDeUDhuO2pOIGyK6VnGvSRMpAke_amA8erApVum91eLjvHdAIAA_T4HetmAT1JU1U9qO0grSQrI-DiH6T2bJnZhMtyt0BQ2urB2QsAXxni4_rKDFdCWeexFEI9JexOXrLy_bUDa1BdC0K7Od"
                referrerPolicy="no-referrer"
                alt="Studio space"
              />
              <div className="relative p-12 h-full flex flex-col justify-center">
                <h3 className="font-headline text-3xl text-stone-50 mb-4">Global Reach</h3>
                <p className="text-stone-200 text-lg max-w-md">From Milan to Kyoto, we bring a global perspective to local sensibilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-12 text-center py-24 border-y border-stone-800">
          <h2 className="font-headline text-5xl text-stone-50 mb-8 editorial-title">Let’s craft your legacy.</h2>
          <p className="font-body text-xl text-stone-400 mb-12">We are currently accepting inquiries for late 2024 projects.</p>
          <a className="inline-flex items-center px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-stone-50 font-label tracking-widest uppercase text-sm rounded-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300" href="#">
            Begin a Project
          </a>
        </section>
      </main>
      <Footer theme="dark" />
    </div>
  );
};

export default Home;
