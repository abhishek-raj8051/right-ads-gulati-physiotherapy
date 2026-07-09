import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, ChevronRight, Award, Shield } from 'lucide-react';

export default function AboutDoctor() {
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
            <span className="text-text-secondary/80">About</span>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-primary font-semibold">Dr. Vinay Gulati</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker tracking-tight leading-tight">
            Dr. Vinay Gulati - Chief Specialist
          </h1>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Portrait Image */}
          <div className="w-full">
            <img 
              src="/images/doctor_real_desk.jpg" 
              alt="Dr. Vinay Gulati at clinical desk" 
              className="w-full h-[320px] sm:h-[450px] object-cover object-[center_15%] rounded-2xl shadow-soft border border-primary/10"
            />
          </div>

          {/* Intro paragraph (prose-lg style) */}
          <div className="text-left">
            <p className="text-lg md:text-xl text-text-secondary font-serif italic leading-relaxed max-w-3xl">
              "Dr. Vinay Gulati, the visionary founder and chief clinical director of Gulati Physiotherapy Clinic, has spent over 15 years developing targeted recovery methods. He represents a new breed of patient-focused practitioners who emphasize active care over long prescription tables."
            </p>
          </div>

          {/* Medical Philosophy & Approach */}
          <div className="text-left space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-darker">
                Medical Philosophy & Approach
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
              I believe that real pain relief requires understanding each patient's individual biomechanics. We don't just treat the pain point; we look at the system. By combining hands-on spinal corrections with medical technology, we can relieve pressure on pinched nerves and rebuild muscle memory.
            </p>
          </div>

          {/* Certifications & Milestones */}
          <div className="text-left space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-darker">
                Certifications & Professional Milestones
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <ul className="space-y-3.5 pt-2 max-w-3xl">
              {[
                "Doctor of Physiotherapy with advanced research in spinal decompression.",
                "Specialized Post-Graduate training in Manual Osteopathic therapy and joints alignment.",
                "Certified Chiropractic Adjustments Specialist.",
                "Member of National Physiotherapists Association & Sports Medicine boards."
              ].map((milestone, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-text-secondary leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2-Column Fact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-soft hover:shadow-md transition text-left flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-primary-dark">Expertise Area</h4>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  Manual Chiropractic alignment, spinal traction therapies, postural recomputation, and nerve pain decompression.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-soft hover:shadow-md transition text-left flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-primary-dark">Years In Practice</h4>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  Over 15 years guiding patients in Kota to achieve natural recovery, avoiding surgical interventions.
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Practice & Recognitions Gallery */}
          <div className="text-left space-y-6 pt-6">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-darker">
                Clinical Practice & Recognitions
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/doctor_real_award3.jpg", title: "World Physiotherapy Day Honour", desc: "Awarded for exceptional clinical contributions" },
                { src: "/images/doctor_real_award2.jpg", title: "Rajasthan MedEx Award", desc: "Presented by Aditi Govitrikar" },
                { src: "/images/doctor_real_award1.jpg", title: "Healthcare Summit Leadership", desc: "Honoured at state medical summit" },
                { src: "/images/doctor_real_adjust.jpg", title: "Spine & Joint Decompression", desc: "Advanced chiropractic adjustment" },
                { src: "/images/doctor_real_adjust4.jpg", title: "Cervical Decompression", desc: "Targeted nerve relief adjustment" },
                { src: "/images/clinic_poster_needling.jpg", title: "Needling Presentation at AIIMS", desc: "Poster demonstrating Australian Needling" }
              ].map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl border border-primary/5 shadow-soft bg-white">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-teal-50/50">
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 text-left">
                    <h4 className="font-serif font-bold text-sm text-primary-dark truncate">{img.title}</h4>
                    <p className="text-[10px] text-text-secondary line-clamp-1">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Action Block */}
          <div className="pt-8 text-center">
            <Link
              to="/online-appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-lg shadow-accent/20 hover:-translate-y-0.5 transition duration-300 gap-2.5 text-base"
            >
              <Calendar className="w-5 h-5" />
              Request Consultation Slot
            </Link>
          </div>


        </div>
      </section>

    </div>
  );
}
