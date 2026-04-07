import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shop: React.FC = () => {
  return (
    <div className="bg-background text-on-tertiary-container">
      <Navbar theme="dark" />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Editorial Header */}
        <header className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-stone-50 mb-6">
                The Curated <br /><span className="italic text-primary">Atelier Shop</span>
              </h1>
              <p className="font-body text-lg text-stone-400 max-w-xl leading-relaxed">
                Exquisite objects for the contemporary home. Each piece is selected for its architectural integrity and tactile resonance.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <div className="flex flex-col items-end gap-4">
                <span className="font-label text-xs uppercase tracking-widest text-stone-500">Filter by Category</span>
                <div className="flex gap-4">
                  <button className="font-label text-sm uppercase tracking-wider text-orange-500 border-b border-orange-500">All</button>
                  <button className="font-label text-sm uppercase tracking-wider text-stone-500 hover:text-stone-200 transition-colors">Lighting</button>
                  <button className="font-label text-sm uppercase tracking-wider text-stone-500 hover:text-stone-200 transition-colors">Furniture</button>
                  <button className="font-label text-sm uppercase tracking-wider text-stone-500 hover:text-stone-200 transition-colors">Objects</button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Product Grid (Asymmetric) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {/* Product 1 */}
          <div className="group relative">
            <div className="aspect-[4/5] overflow-hidden bg-stone-800 rounded-lg mb-6">
              <img
                alt="Sculptural Chair"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQxZQuR33ix6-ZYdec44GBgyx9pdBD2USrmO4hWy0DBDA2WEF4GWvYQfFYlx_qyNcA3LeJ0GyTcn7UB-O1Q6tK8iP8WFmN7N0aeR54AOgZqpTKNKMmIUMSxPM8YQyX5IoqfvD8JT8B_rM8jrUkE-7KoAKnx_pOAjBfzzpEB_fWFpkrpOCFRc_Cv7oS0-K6iISy3Qgq4RtPf44vyytYvlIGJqaUwP9mTyOq5SPEf1FPZQqachETyaaRJDjcqF6Wlt9ZCzDXXO8xoYDD"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl text-stone-50 mb-1">Ethereal Lounge Chair</h3>
                <p className="font-label text-xs uppercase tracking-widest text-stone-500">Solid Walnut & Boucle</p>
              </div>
              <span className="font-body text-lg text-primary">$4,200</span>
            </div>
            <button className="mt-6 w-full py-4 bg-gradient-to-r from-primary to-primary-container text-stone-50 font-label text-xs uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              Add to Collection
            </button>
          </div>

          {/* Product 2 (Offset) */}
          <div className="group relative lg:mt-12">
            <div className="aspect-[4/5] overflow-hidden bg-stone-800 rounded-lg mb-6">
              <img
                alt="Pendant Light"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcfYRoF2eTxk49tCRwVvtNOzeXuJ48Zn3Rs9QJM5UkAHBNtpw2liPC-hZXUzkwWnTQJX3OX42DtfFP4vGv5WqJHxGpDDPMXzQRB_G2ofbDO_YxqEWEP7rJ_5dnfF5tfLyY8fTK6ffLY0nC5z-t3WJFYT_zEdmDMQVef2R0PF2kUcshN60VM2CuEDQCIY1PpaIkl3yfG5cdTYcd4mOcHrr94F1vGq78SoW3XHwQMXbaBMtRNh2kEyIhxug473xRG696fYSCZzS_qG5U"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl text-stone-50 mb-1">Aurelia Pendant</h3>
                <p className="font-label text-xs uppercase tracking-widest text-stone-500">Brushed Brass & Opal</p>
              </div>
              <span className="font-body text-lg text-primary">$1,850</span>
            </div>
            <button className="mt-6 w-full py-4 bg-gradient-to-r from-primary to-primary-container text-stone-50 font-label text-xs uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              Add to Collection
            </button>
          </div>

          {/* Product 3 */}
          <div className="group relative">
            <div className="aspect-[4/5] overflow-hidden bg-stone-800 rounded-lg mb-6">
              <img
                alt="Ceramic Vase"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8zOoap5Fhul90F0fX8YGKxLYkKvRNozm5OUpB4MokdQu2JkWSYkj2Gz4M9iDWqhEEfeH5r13W48Psuk0ooK4GvyKbgHGfpKsvkcKzBAZY3kJtnF2hlcMPnOV4jGI6OF9cdFgdIAtbX69d0hWjT-sHfnY2QwRk6UqFxrfPY8OHVvzFlPObeMpG0Uxbm7NT48bndyPIMSMeHYlsvvoKtKr9r7IifdDgRpLZblLsyOxZtMjvcMFoGUgqm74tADjIh5RmfhDDnfj39Eki"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl text-stone-50 mb-1">Terraform Vase No. 04</h3>
                <p className="font-label text-xs uppercase tracking-widest text-stone-500">Raw Glazed Ceramic</p>
              </div>
              <span className="font-body text-lg text-primary">$640</span>
            </div>
            <button className="mt-6 w-full py-4 bg-gradient-to-r from-primary to-primary-container text-stone-50 font-label text-xs uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              Add to Collection
            </button>
          </div>

          {/* Product 4 (Large Feature) */}
          <div className="md:col-span-2 group relative">
            <div className="aspect-[16/9] overflow-hidden bg-stone-800 rounded-lg mb-6">
              <img
                alt="Dining Table"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7q80IB1UEO2KjsNHFwq_XaPOBpuFHZbfxb_MuXU-zR5lfynVTB6u7bZ_8yegZSn5CCLNejyj2FcW_pDYogAzBTZU34aHyhinZq0hVgqtKqBMwDFnuWsBJfj0348XJpu8Oa7ncNNePiYElviQEh0yt2L8opDqYBj-UZAOZDojfKQ8bG8uSk09pTHpbItu8dmFPrGpwyLrHWpiOzTiarOAtCQJZGmLgjxeHd5jL_kHUNoUFnJ_WYB2ioYAMP8JRdHwgPpsfGkChoyHd"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-headline text-4xl text-stone-50 mb-2">Monolith Dining Table</h3>
                <p className="font-label text-sm uppercase tracking-widest text-stone-500">Blackened Oak / Limited Edition</p>
              </div>
              <div className="text-right">
                <span className="block font-body text-2xl text-primary mb-4">$12,400</span>
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-stone-50 font-label text-xs uppercase tracking-widest rounded-lg transition-all duration-300 hover:scale-105">
                  Acquire Piece
                </button>
              </div>
            </div>
          </div>

          {/* Product 5 */}
          <div className="group relative lg:-mt-24">
            <div className="aspect-[4/5] overflow-hidden bg-stone-800 rounded-lg mb-6">
              <img
                alt="Side Table"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANems0NT2fRVtKX-fmGK2rZH0ex__dOvcI-wCTqXc4vXKxapFalk0wpuv_Tlbr2cIQYcziQ1MmM9H7DsHOSuHA3oZAkEjbP9MCFmVjoQtrLXZOAReFN4GXpafTIOkntbumou6YisJS72nHGPoKvossGCNQt6fjhAikLPEsQ44Gl3TYWPlWPGkOBDKyepZsw-nIdiO_nXkkodM7Cdz6fjCbTm5kTfd2Pml2rZPdZR0IB5_x9VcY9BPf6KXaI3qxTxb6TMOO0ifXHXOz"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl text-stone-50 mb-1">Eclipse Side Table</h3>
                <p className="font-label text-xs uppercase tracking-widest text-stone-500">Nero Marquina Marble</p>
              </div>
              <span className="font-body text-lg text-primary">$2,100</span>
            </div>
            <button className="mt-6 w-full py-4 bg-gradient-to-r from-primary to-primary-container text-stone-50 font-label text-xs uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              Add to Collection
            </button>
          </div>
        </section>

        {/* Newsletter / Atelier Note */}
        <section className="mt-40 bg-stone-900/50 py-24 px-12 rounded-lg relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="font-headline text-4xl text-stone-50 mb-6">Curated Updates</h2>
            <p className="font-body text-stone-400 mb-10 leading-relaxed">
              Join our inner circle for exclusive access to new atelier releases, architectural insights, and private viewing invitations.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-grow bg-transparent border-0 border-b-2 border-stone-700 focus:ring-0 focus:border-primary text-stone-50 font-body py-4 transition-colors"
                placeholder="Your email address"
                type="email"
              />
              <button className="px-10 py-4 bg-primary hover:bg-primary-container text-stone-50 font-label text-xs uppercase tracking-widest rounded-lg transition-all">Subscribe</button>
            </form>
          </div>
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-50/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </section>
      </main>
      <Footer theme="dark" />
    </div>
  );
};

export default Shop;
