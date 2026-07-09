import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shirt, FileText, Clock, ArrowRight } from 'lucide-react';

export default function PatientGuidelines() {
  const guidelines = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "What to Wear",
      description: "Wear loose, comfortable clothing (activewear, track pants, t-shirts) that allows easy access to the area being treated (e.g., knee, shoulder, or neck)."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Medical History Records",
      description: "Bring along any relevant medical reports, X-rays, MRI scans, or doctor referral prescriptions from previous consults."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Punctuality and Booking",
      description: "Arrive 10 minutes before your scheduled slot. If you need to cancel or rearrange your booking, please call us 24 hours in advance."
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* 1. PAGE TITLE BANNER */}
      <section className="bg-linear-to-r from-teal-100 to-teal-50/50 py-12 px-6 border-b border-primary/10 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-text-secondary font-medium">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-text-secondary/80">Patient Info</span>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-primary font-semibold">Guidelines</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker tracking-tight leading-tight">
            Patient Pre-Session Guidelines
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* 2. INTRO PARAGRAPH */}
          <div className="text-left max-w-3xl">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              To help ensure a smooth session, please review these brief clinical guidelines before your visit:
            </p>
          </div>

          {/* 3. GUIDELINES LIST (3-column grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {guidelines.map((g, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl border border-primary/5 shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Number Badge + Circular Icon */}
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      {g.icon}
                    </div>
                    <span className="text-4xl font-serif font-extrabold text-primary/10">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-lg md:text-xl text-primary-darker">
                      {g.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. CTA STRIP (Amber-tinted callout box) */}
          <div className="bg-amber-50/60 border border-accent/15 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-lg text-text-main">
                Have questions before your visit?
              </h4>
              <p className="text-text-secondary text-sm">
                Get in touch with our team or schedule your next rehabilitation slot online.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary/5 font-bold rounded-xl transition duration-300 text-sm w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
              
              <Link
                to="/online-appointment"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition duration-300 text-sm w-full sm:w-auto text-center gap-1.5"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
