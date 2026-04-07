import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Journal: React.FC = () => {
  return (
    <div className="bg-[#262624] text-[#faf9f5]">
      <Navbar theme="dark" />
      <main className="pt-32 pb-24">
        {/* Featured Hero Spread */}
        <section className="max-w-screen-2xl mx-auto px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">
            <div className="lg:col-span-7 relative z-10">
              <span className="font-label text-sm uppercase tracking-[0.3em] text-primary mb-6 block">Editorial Volume I</span>
              <h1 className="font-headline text-6xl md:text-8xl leading-tight mb-8 text-stone-50 -tracking-widest">
                The Soul of <br />Curated <span className="italic text-primary">Interiors</span>
              </h1>
              <div className="max-w-md bg-stone-800/40 backdrop-blur-md p-8 rounded-lg mb-8">
                <p className="text-stone-300 font-body leading-relaxed text-lg italic">
                  "Luxury is not about excess, but the thoughtful reduction to the essentials that move the spirit."
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-stone-800 shadow-2xl">
                <img
                  className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnmoe3YkyNT6rUUbzW6Dyw877iwYn4HS6MDycxhij58OWaIhDgSJTGRmiu14TT7t9zkx1XZPNCvc1gQHy_XaeW-0u59uTOhDNPhyMu1JFjdjUXLxmLrETpnreEHKm0N3GeUJzSLpozAnj31uzRvA9vjRi34s1A8dJAyqGkXcEWKbIm9OCbCZDWa-tRu9lZC1qK86oGFC4-B2oSdpvND3hnXDdGzil1S6Y-Q-aeWton9mJWmtATLxokmCfKG9ClIJamO8NRbiikiOl"
                  referrerPolicy="no-referrer"
                  alt="Luxury interior"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/20 backdrop-blur-3xl rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Magazine Grid Layout */}
        <section className="max-w-screen-2xl mx-auto px-12">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-headline text-4xl text-stone-50">Latest Stories</h2>
            <div className="h-[1px] flex-grow mx-12 bg-stone-800/50"></div>
            <div className="flex space-x-4 font-label text-xs uppercase tracking-widest text-stone-500">
              <button className="hover:text-primary transition-colors">Architecture</button>
              <span className="text-stone-700">/</span>
              <button className="hover:text-primary transition-colors">Lighting</button>
              <span className="text-stone-700">/</span>
              <button className="hover:text-primary transition-colors">Objects</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Article 1: Large Bento */}
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8 bg-stone-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent z-10"></div>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv8wcCEdTMuiRjUXrQH6TyZAL8qeEsKjK_zyHvoJ9i5VeVdQRmpRuPN6mjoOnLj2mKsBgfNu6BrVZJ1RPsv5H7uMhM2EpvVVWn8vAiAqeXwZsWQo3gyqiDrMYH3LzBiLLu4b2Baj4RLCfZjwPBrqjrhGv7CQ4Cn0VrRwpsOoD04Lhno2h0TKFZjfaRZjBzV6ZeF11RLDUoJq_2TshSM11zMyoboqtTP079yMP0Xp2A02f3XOES7Q8NozRqnaUwAObpr8_0-3Msfjk8"
                  referrerPolicy="no-referrer"
                  alt="Brutalist building"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <span className="bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-white rounded-full">Atmosphere</span>
                </div>
              </div>
              <div className="max-w-2xl">
                <h3 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors leading-snug">The Alchemy of Natural Light in Brutalist Frameworks</h3>
                <p className="font-body text-stone-400 leading-relaxed mb-6">Discover how we harness the path of the sun to animate concrete surfaces and create a living sculpture within the home.</p>
                <div className="flex items-center space-x-4 font-label text-xs uppercase tracking-widest text-stone-500">
                  <span>By Julian Voss</span>
                  <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
                  <span>8 Min Read</span>
                </div>
              </div>
            </div>
            {/* Article 2: Portrait */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-8 bg-stone-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0mblsdm7fOSP16hY9fqgCaE0Coo9a2C3n88Qhwde7J5FfhaC3nNwA87xL6Z3mBwTfiE3m7Ll4YL_6fYEkSFyuuZZD7EsVRYx4yzenxDxChEuxeWwkrLsnsFJ8Af0Flb6bcud1n6J3LHe6MfzFNbV08eojWsW-ENd84pNOmc4YIu8K5eRs0YHXCIq785iOqYm1aE6CTB0moAbvUx5s_lYu-N8p-lAbDUJ4zngdSvuCPO1OPv-2EKhso9Bf7glkLxn-fReWMz5raH9S"
                  referrerPolicy="no-referrer"
                  alt="Ceramic vase"
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">The Curated Object: Less but Better</h3>
                <p className="font-body text-stone-400 leading-relaxed mb-6">Why one perfect sculpture defines a room more than a thousand decorations.</p>
                <div className="flex items-center space-x-4 font-label text-xs uppercase tracking-widest text-stone-500">
                  <span>By Elena Rossi</span>
                  <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
                  <span>4 Min Read</span>
                </div>
              </div>
            </div>
            {/* Article 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[1/1] overflow-hidden rounded-lg mb-8 bg-stone-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDManyW5M1vTuGtankSC9vhf765BLlB829Tvcn4rThg7rENSkchTVJlLGMI0CfdQw85TwewqD6U-9QNDt9cZcPivlBsRjSUsN7TUbFbAyMj32LaZvLxlDRyUEMWrgmMsehVUiHz93kdJ6W48tlvDh1byBZzNm-K-Qqv4T_ZB9HU1rs_xoEAvqEyICoMjZ5fYwjtkfw3ap5AL7V_thUbjgYRhV9Idl89fHU7n9Phfglk95-DjqpisKVkZST3huw8yhh8q4fkX_D0lCv5"
                  referrerPolicy="no-referrer"
                  alt="Modern kitchen"
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">Culinary Sanctuaries</h3>
                <p className="font-body text-stone-400 leading-relaxed mb-6">Reimagining the kitchen as a place of ritual, peace, and high-tech invisibility.</p>
                <div className="flex items-center space-x-4 font-label text-xs uppercase tracking-widest text-stone-500">
                  <span>By Marcus Thorne</span>
                  <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
                  <span>12 Min Read</span>
                </div>
              </div>
            </div>
            {/* Article 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-[1/1] overflow-hidden rounded-lg mb-8 bg-stone-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMa7ST8TYnEQh0bDRBrsT2Lq-v5Tu8vhMwY22Xl-9MTAHWSc9ExEvaZb1cFq-MPQY7907BCy8ioNjMbjz2-564v63bx0ZRzzxDvLilhweQZXWyLUHAKNWfBsCdKgSY6t1PoeLVKSk9vBfItcxlAHVXgrGF-j52Mk940XxfZ4CYq1ZM8WECMlu38sa7ySHkxSnZwYZ0jCK76pgh7cxr6l7HE7JSKF1MHBlVjRNxnHpRMvlrLj9lCK_DnVAHvzrfOngVHeJ4YAT4Y-Y_"
                  referrerPolicy="no-referrer"
                  alt="Modern bedroom"
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">The Sleep Architecture</h3>
                <p className="font-body text-stone-400 leading-relaxed mb-6">How material choices and acoustic design impact your nocturnal recovery.</p>
                <div className="flex items-center space-x-4 font-label text-xs uppercase tracking-widest text-stone-500">
                  <span>By Dr. Sarah Chen</span>
                  <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
                  <span>6 Min Read</span>
                </div>
              </div>
            </div>
            {/* Article 5 */}
            <div className="group cursor-pointer">
              <div className="aspect-[1/1] overflow-hidden rounded-lg mb-8 bg-stone-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqzdjbsf6vrkHEUx1v9MhxPeio8asEOGDndYb8PBCcqtk_Dli1SzG3W76biIZHq5bwVKTg95OBflIT8DbrHznuiQJR3cSGKdFF91GBufgkNB8V-AJQytkESonh4wXeFKR_Uh_pXfqxYzaDwWYWUJoRxAS5U8Z3vLpbHlJ_lNEa4sKeD14bv4exIF668arO7AU9jQX4jRkexKmNa-trPtp8Yg0ewOdEwxNM1a8CXIQeNARublkmdaoHFCO6NtEiZdxhKPArtYO8f1fB"
                  referrerPolicy="no-referrer"
                  alt="Luxury bathroom"
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">Urban Escapism</h3>
                <p className="font-body text-stone-400 leading-relaxed mb-6">Designing private spas in the heart of the world's most chaotic cities.</p>
                <div className="flex items-center space-x-4 font-label text-xs uppercase tracking-widest text-stone-500">
                  <span>By Julian Voss</span>
                  <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
                  <span>10 Min Read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Subscription Spread */}
        <section className="max-w-screen-2xl mx-auto px-12 mt-32">
          <div className="bg-stone-900 rounded-lg p-16 relative overflow-hidden border border-stone-800/50">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full"></div>
            <div className="max-w-2xl relative z-10">
              <span className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-6 block">The Atelier Note</span>
              <h2 className="font-headline text-5xl mb-8 leading-tight">Join our inner circle for weekly design provocations.</h2>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  className="bg-transparent border-0 border-b border-stone-700 focus:ring-0 focus:border-primary text-stone-50 font-body py-4 w-full placeholder:text-stone-600"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="bg-gradient-to-br from-primary to-primary-container text-white px-12 py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity" type="submit">
                  Subscribe
                </button>
              </form>
              <p className="text-stone-500 font-label text-[10px] mt-6 tracking-widest uppercase italic">Respect for privacy is part of our luxury standard.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="dark" />
    </div>
  );
};

export default Journal;
