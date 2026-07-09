import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Mail, Copy, Check } from 'lucide-react';

export default function Careers() {
  const [copied, setCopied] = useState(false);
  
  const openings = [
    {
      title: 'Senior Physiotherapist',
      experience: '3+ Years',
      location: 'Kota',
      description: 'Requires clinical experience in orthopedic manual therapies and spinal assessment techniques.'
    },
    {
      title: 'Sports Rehab Therapist',
      experience: '1+ Years',
      location: 'Kota',
      description: 'Requires deep familiarity with muscular healing schedules, therapeutic exercises, and joint mobilization techniques.'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('careers@gulatiphysiotherapy.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToApply = (e) => {
    e.preventDefault();
    const applySection = document.getElementById('apply-section');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* 1. PAGE TITLE BANNER */}
      <section className="bg-linear-to-r from-teal-100 to-teal-50/50 py-12 px-6 border-b border-primary/10 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] bg-size-[16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-text-secondary font-medium">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-text-secondary/80">Join Us</span>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-primary font-semibold">Careers</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker tracking-tight leading-tight">
            Careers - Work with Gulati Physio
          </h1>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-3xl mx-auto space-y-16">
          
          {/* 2. INTRO PARAGRAPH */}
          <div className="text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              <Briefcase className="w-3.5 h-3.5" />
              Join Our Mission
            </div>
            <p className="text-lg md:text-xl text-text-secondary font-serif leading-relaxed italic">
              "Are you dedicated to helping patients recover their active lifestyle? We are expanding our team of specialized clinicians in Kota. Discover a professional space that supports learning, patient-centric values, and career growth."
            </p>
          </div>

          {/* 3. CURRENT JOB OPENINGS SECTION */}
          <div className="text-left space-y-8">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-darker">
                Current Job Openings
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            {openings.length === 0 ? (
              <div className="p-8 bg-white rounded-2xl border border-primary/5 shadow-soft text-center text-text-secondary">
                No current openings — check back soon or send us your CV anyway!
              </div>
            ) : (
              <div className="space-y-6">
                {openings.map((job, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-6 md:p-8 rounded-2xl border border-primary/5 border-l-4 border-l-accent shadow-soft hover:shadow-md hover:-translate-y-0.5 transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                  >
                    <div className="space-y-3 grow">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-darker">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-primary">
                        <Briefcase className="w-4 h-4 text-primary shrink-0" />
                        <span>Experience: {job.experience}</span>
                        <span className="text-text-secondary/40">|</span>
                        <span>Location: {job.location}</span>
                      </div>
                      
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <a 
                      href="#apply-section" 
                      onClick={handleScrollToApply}
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition duration-200 shrink-0 self-start md:self-center"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 4. HOW TO APPLY SECTION */}
          <div 
            id="apply-section" 
            className="p-6 md:p-10 bg-accent/5 rounded-3xl border border-accent/10 shadow-soft text-left space-y-6"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-serif font-bold text-primary-darker">
                  How To Apply
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl">
                  Send your professional CV along with a summary of clinical achievements to the email address below. Our office will review applications within 7-10 business days.
                </p>
              </div>
            </div>

            {/* Email Action Block with Copy Option */}
            <div className="bg-white p-4 rounded-xl border border-accent/10 flex items-center justify-between gap-4 max-w-md">
              <div className="truncate">
                <span className="text-[10px] text-text-secondary uppercase tracking-widest block font-bold">Email CV to</span>
                <a 
                  href="mailto:careers@gulatiphysiotherapy.in"
                  className="text-sm md:text-base font-bold text-primary hover:text-primary-dark underline truncate"
                >
                  careers@gulatiphysiotherapy.in
                </a>
              </div>
              
              <button 
                onClick={handleCopyEmail}
                className="w-10 h-10 rounded-lg bg-brand-bg hover:bg-primary/10 text-text-secondary hover:text-primary transition flex items-center justify-center shrink-0 border border-primary/5"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
