import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aman Sharma",
      role: "Talwandi Kota",
      rating: 5,
      quote: "Good work by staff and nice doctor Mr. Vinay Gulati. I had chronic neck pain and posture issues for years. Their targeted electrotherapy combined with muscle training worked wonders."
    },
    {
      name: "Rajesh Verma",
      role: "Teacher",
      rating: 5,
      quote: "Overall, I highly recommend Dr. Gulati for back pain treatment. He explained the root cause of my sciatica pain very clearly and recommended a non-invasive treatment that worked. I am running again!"
    },
    {
      name: "Priyanshu Gupta",
      role: "Kota",
      rating: 5,
      quote: "After just a few sessions, I noticed significant improvement in my condition. I was struggling with joint pain and stiffness in my shoulder (frozen shoulder) and now I have achieved 100 percent mobility."
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* 1. PAGE TITLE BANNER */}
      <section className="bg-gradient-to-r from-teal-100 to-teal-50/50 py-12 px-6 border-b border-primary/10 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-text-secondary font-medium">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-text-secondary/80">Patient Portal</span>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-primary font-semibold">Testimonials</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker tracking-tight leading-tight">
            Verified Patient Recovery Testimonials
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* 2. INTRO PARAGRAPH */}
          <div className="text-left max-w-3xl">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              We are grateful to our patients who shared their recovery experiences. These reports highlight our dedication to providing personalized, non-surgical rehabilitation.
            </p>
          </div>

          {/* 3. TESTIMONIALS LIST (2 columns desktop, 1 column mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="group relative bg-white p-8 md:p-10 rounded-2xl border border-primary/5 shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative Faded Quote Icon in background */}
                <Quote className="absolute -top-4 -left-4 w-28 h-28 text-primary/[0.03] pointer-events-none group-hover:scale-105 transition-transform duration-300" />
                
                <div className="space-y-5 relative z-10">
                  {/* Rating Stars (Amber/Gold) */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-accent stroke-none" />
                    ))}
                  </div>
                  
                  {/* Quote text */}
                  <p className="text-text-secondary font-serif italic text-sm md:text-base leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                
                {/* User info at bottom */}
                <div className="border-t border-primary/10 pt-5 mt-6 relative z-10 flex flex-col">
                  <span className="font-sans font-bold text-primary-darker text-sm md:text-base">
                    {t.name}
                  </span>
                  <span className="text-xs font-semibold text-primary/80 tracking-wider">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 4. GOOGLE REVIEWS CTA STRIP */}
          <div className="bg-teal-50/70 border border-primary/10 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-4">
              {/* Google G Custom SVG Icon */}
              <div className="w-12 h-12 bg-white rounded-xl shadow-soft border border-primary/5 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-primary-darker text-base md:text-lg">
                  Loved your recovery experience?
                </h4>
                <p className="text-text-secondary text-xs md:text-sm">
                  Leave us a review on Google and help others find personalized, non-surgical relief!
                </p>
              </div>
            </div>
            
            <a
              href="https://maps.google.com/?q=Gulati+Physiotherapy+Clinic+Talwandi+Kota+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition duration-300 text-sm whitespace-nowrap"
            >
              Write a Review
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
