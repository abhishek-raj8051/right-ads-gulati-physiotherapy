import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, 
  Award, 
  ArrowRight, 
  Activity, 
  Calendar,
  Heart,
  TrendingUp,
  Sparkles,
  Cpu,
  RotateCw,
  Monitor,
  FileText,
  CheckCircle,
  Star,
  Quote,
  Phone,
  ArrowLeft
} from 'lucide-react';

// Reusable scroll reveal wrapper
function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// Custom animated counter component
function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    let totalMilliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMilliseconds / end), 20);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const services = [
    {
      title: "Back & Spine Care",
      desc: "Specialized non-surgical treatment for disc herniations, sciatica, and chronic lower back strains.",
      icon: <Shield className="w-6 h-6 text-primary" />,
      path: "/treatments/back-spine-pain"
    },
    {
      title: "Joint & Knee Rehab",
      desc: "Comprehensive therapeutic programs restoring movement and strength post-injury or arthritis flare-ups.",
      icon: <RotateCw className="w-6 h-6 text-primary" />,
      path: "/treatments/joint-knee-rehab"
    },
    {
      title: "Sports Injury Recovery",
      desc: "Accelerated athletic recovery regimes covering ligament tears, sprains, and kinetic chain imbalances.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      path: "/treatments/sports-injury"
    },
    {
      title: "Chiropractic Adjustment",
      desc: "Precise skeletal manipulation and spinal alignment to alleviate nerve compression and stiffness.",
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      path: "/treatments/chiropractic-alignment"
    },
    {
      title: "Stroke & Paralysis Recovery",
      desc: "Neuro-rehabilitation therapies engineered to trigger motor relearning, muscle tone stability, and independence.",
      icon: <Heart className="w-6 h-6 text-primary" />,
      path: "/treatments/stroke-paralysis"
    },
    {
      title: "Electrotherapy Treatments",
      desc: "Advanced biological currents including IFT, TENS, and ultrasonic thermal waves to block pain pathways.",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      path: "/treatments/electrotherapy"
    }
  ];

  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Expert Care",
      desc: "Guided by clinical specialists with extensive chiropractic and spinal certification."
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Modern Technology",
      desc: "Equipped with computerized decompression beds and premium bio-current stimulators."
    },
    {
      icon: <FileText className="w-6 h-6 text-accent" />,
      title: "Personalized Plans",
      desc: "Every recovery plan is custom-designed based on a detailed biomechanical assessment."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Proven Results",
      desc: "Over 10,000 restored lifestyles in Kota, from simple sprains to complex paralysis cases."
    }
  ];

  const galleryImages = [
    { src: "/images/doctor_real_desk.jpg", title: "Diagnostic Consultation Room", align: "object-[center_12%]" },
    { src: "/images/doctor_real_adjust.jpg", title: "Manual Spine Decompression", align: "object-[center_15%]" },
    { src: "/images/doctor_real_adjust2.jpg", title: "Shoulder Mobilization Therapy", align: "object-[center_15%]" },
    { src: "/images/doctor_real_adjust4.jpg", title: "Cervical Spine Adjustment", align: "object-[center_8%]" },
    { src: "/images/clinic_poster_needling.jpg", title: "Speech at AIIMS New Delhi Poster", align: "object-[center_15%]" },
    { src: "/images/doctor_real_award3.jpg", title: "World Physiotherapy Day Award", align: "object-[center_12%]" }
  ];

  const testimonials = [
    {
      quote: "The computerized decompression treatments here worked wonders for my sciatica pain. I couldn't walk for more than 5 minutes, but within weeks of therapy under Dr. Vinay Gulati, I am pain-free.",
      name: "Ramesh Sharma",
      condition: "Severe Sciatica Recoveree",
      rating: 5
    },
    {
      quote: "Outstanding care! The staff is highly professional, and the thermal ultrasound combined with mobilization exercises completely resolved my frozen shoulder stiffness. Highly recommend this clinic in Kota.",
      name: "Priyah Patel",
      condition: "Frozen Shoulder Recoveree",
      rating: 5
    },
    {
      quote: "Excellent rehabilitation center. I had an ACL strain and was guided through a step-by-step sports rehab program. Very satisfied with the personalized attention and modern electrotherapy modes.",
      name: "Rahul Verma",
      condition: "ACL Sports Strain Recoveree",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-brand-bg min-h-screen text-text-main font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-linear-to-br from-primary/5 via-brand-bg to-accent/5 pt-12 pb-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Text */}
          <div className="flex-1 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              Excellence In Motion
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-primary-darker leading-tight">
              Restoring Movement.<br />
              <span className="text-accent">Elevating Quality Of Life.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              Experience premium non-surgical recovery at Kota's premier physiotherapy and chiropractic clinic. Led by expert hands with state-of-the-art rehabilitation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/online-appointment"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition duration-300 gap-2 text-sm"
              >
                <Calendar className="w-4.5 h-4.5" />
                Schedule Consultation
              </Link>
              <a
                href="#treatments"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary border border-primary/20 hover:bg-primary/5 font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition duration-300 gap-2 text-sm"
              >
                Explore Treatments
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="grow w-full lg:w-[45%] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full relative z-10"
            >
              <img 
                src="/images/doctor_real_adjust.jpg" 
                alt="Dr. Vinay Gulati performing spine adjustment" 
                className="w-full aspect-4/3 object-cover object-[center_15%] rounded-2xl shadow-soft border border-primary/10" 
              />
            </motion.div>
            
            {/* Background Blob Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-soft border border-primary/5 flex items-center gap-3 z-20">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-primary-dark font-serif text-sm">Certified Care</div>
                <div className="text-text-secondary text-[11px]">Kota's Top Rated Clinic</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-primary/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center space-y-1">
            <div className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker">
              <AnimatedCounter value="15" suffix="+" />
            </div>
            <p className="text-xs text-text-secondary uppercase tracking-widest font-semibold">Years of Excellence</p>
          </div>
          <div className="text-center space-y-1 border-y sm:border-y-0 sm:border-x border-primary/10 py-4 sm:py-0">
            <div className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker">
              <AnimatedCounter value="10000" suffix="+" />
            </div>
            <p className="text-xs text-text-secondary uppercase tracking-widest font-semibold">Happy Recoveries</p>
          </div>
          <div className="text-center space-y-1">
            <div className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker">
              <AnimatedCounter value="74" suffix="+" />
            </div>
            <p className="text-xs text-text-secondary uppercase tracking-widest font-semibold">5-Star Google Reviews</p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Doctor image with floating badge */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src="/images/doctor_real_desk.jpg" 
                  alt="Dr. Vinay Gulati" 
                  className="w-full aspect-4/5 object-cover object-[center_15%] rounded-3xl shadow-soft border border-primary/10"
                />
                
                {/* Floating overlapping Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-soft border border-primary/10 max-w-50 text-left">
                  <div className="w-10 h-10 bg-accent/15 text-accent rounded-xl flex items-center justify-center mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-primary-dark leading-tight">15+ Years</h4>
                  <p className="text-xs text-text-secondary mt-1">Clinical Trust & Spine Expertise</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text content */}
          <div className="flex-1 text-left space-y-6">
            <ScrollReveal>
              <div className="space-y-2">
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Meet Our Chief Specialist</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-darker">Dr. Vinay Gulati</h2>
                <p className="text-xs bg-primary/10 text-primary-dark font-semibold px-3 py-1 rounded-full inline-block">
                  Founder & Chief Physiotherapist | Chiropractic Specialist
                </p>
              </div>

              <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed pt-2">
                <p>
                  Dr. Vinay Gulati holds a postgraduate degree in Orthopedic Physiotherapy and certifications in manual therapy and spine decompression. Over the last 15 years, he has successfully treated thousands of patients in Kota, Rajasthan, specializing in non-surgical recovery for disc problems and sciatica.
                </p>
                <p>
                  Our clinic combines chiropractic adjustments with high-tech modalities like computerized decompression and bio-currents to accelerate healing and deliver lasting wellness outcomes.
                </p>
              </div>

              {/* Accreditation cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-brand-bg p-4 rounded-xl border border-primary/5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif font-bold text-sm text-primary-dark">Advanced Certifications</h4>
                    <p className="text-[11px] text-text-secondary">USA-standard spinal manipulation protocols</p>
                  </div>
                </div>
                
                <div className="bg-brand-bg p-4 rounded-xl border border-primary/5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white text-accent rounded-lg flex items-center justify-center shadow-sm">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif font-bold text-sm text-primary-dark">Patient Centered Care</h4>
                    <p className="text-[11px] text-text-secondary">Personalized biomechanical treatments</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-soft transition duration-300 gap-2 text-sm"
                >
                  Connect Personally
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. SERVICES/TREATMENTS SECTION */}
      <section id="treatments" className="py-20 md:py-28 px-6 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Advanced Healing Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-darker">Our Specialized Treatments</h2>
            <p className="text-text-secondary text-sm md:text-base">
              Providing customized, non-surgical treatment pathways for a wide range of orthopedic and neurological conditions.
            </p>
          </div>

          {/* Grid of 6 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-8 rounded-2xl border border-primary/5 shadow-soft hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full text-left group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition duration-300 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="font-serif font-bold text-xl text-primary-dark group-hover:text-primary transition duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6">
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition duration-200 uppercase tracking-wider"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/treatments/back-spine-pain"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border border-primary/20 hover:bg-primary/5 font-bold rounded-xl shadow-soft transition duration-300 gap-2 text-sm"
            >
              View All Treatments
            </Link>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US / STATS STRIP */}
      <section className="py-16 px-6 bg-white border-y border-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="flex gap-4 items-start text-left bg-brand-bg p-6 rounded-2xl border border-primary/5">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-primary-dark">{item.title}</h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. GALLERY PREVIEW */}
      <section className="py-20 md:py-28 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Our Clinic</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-darker">Clinical Environment & Setup</h2>
            <p className="text-text-secondary text-sm md:text-base">
              Step inside our modern facility in Kota, designed for comfort and professional rehabilitation care.
            </p>
          </div>

          {/* Grid of 6 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-soft border border-primary/5 aspect-4/3">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className={`w-full h-full object-cover ${img.align || 'object-[center_15%]'} group-hover:scale-105 transition duration-500`} 
                  />
                  <div className="absolute inset-0 bg-primary-darker/60 opacity-0 group-hover:opacity-100 flex items-end justify-start p-5 transition duration-300">
                    <span className="text-white font-serif font-semibold text-base">{img.title}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-soft transition duration-300 gap-2 text-sm"
            >
              View Full Gallery
            </Link>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS PREVIEW */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          
          <div className="space-y-3">
            <span className="text-sm font-bold text-primary uppercase tracking-widest">What Our Patients Say</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-darker">Stories of Recovery</h2>
          </div>

          {/* Carousel Card with transition */}
          <div className="relative min-h-62.5 bg-brand-bg p-8 md:p-12 rounded-3xl border border-primary/5 shadow-soft max-w-2xl mx-auto flex flex-col justify-between text-left">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/15" />
            
            <div className="space-y-6">
              <div className="flex text-accent">
                {[...Array(testimonials[activeTestimonialIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent stroke-none" />
                ))}
              </div>
              
              <p className="text-text-secondary text-sm md:text-base italic leading-relaxed">
                "{testimonials[activeTestimonialIdx].quote}"
              </p>
            </div>
            
            <div className="border-t border-primary/10 pt-6 mt-6 flex justify-between items-center">
              <div>
                <h4 className="font-serif font-bold text-primary-dark text-base md:text-lg">
                  {testimonials[activeTestimonialIdx].name}
                </h4>
                <p className="text-xs text-accent font-semibold">
                  {testimonials[activeTestimonialIdx].condition}
                </p>
              </div>
              
              {/* Carousel controls */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-xl bg-white border border-primary/10 hover:bg-primary/5 flex items-center justify-center transition"
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft className="w-4 h-4 text-primary" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-xl bg-white border border-primary/10 hover:bg-primary/5 flex items-center justify-center transition"
                  aria-label="Next Testimonial"
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. APPOINTMENT CTA SECTION */}
      <section className="py-20 px-6 bg-linear-to-tr from-primary-dark to-primary-darker text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-teal-100 max-w-xl mx-auto text-sm md:text-base leading-relaxed mt-4">
              Schedule a premium, non-surgical assessment with Dr. Vinay Gulati. Restoring pain-free joint mobility and muscular balance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
              <a 
                href="tel:+919725565740" 
                className="flex items-center gap-2.5 hover:text-accent transition duration-200 text-lg font-bold"
              >
                <Phone className="w-5 h-5 text-accent animate-pulse" />
                <span>+91 97255 65740</span>
              </a>
              
              <Link
                to="/online-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-lg shadow-accent/25 hover:-translate-y-0.5 transition duration-300 gap-2 text-base"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment Online
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
