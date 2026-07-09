import React from 'react';
import { Cpu, ShieldCheck, Heart, Calendar } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechnologyTemplate({ technology }) {
  if (!technology) return <div className="p-8 text-center">Technology not found</div>;
  
  // Dynamically resolve icon if available
  const IconComponent = Icons[technology.icon] || Cpu;

  return (
    <div className="bg-brand-bg min-h-screen py-16 px-6 text-text-main font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Technology Hero */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-primary/5 shadow-soft text-left flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="p-4 bg-primary/10 text-primary rounded-2xl">
            <IconComponent className="w-12 h-12" />
          </div>
          <div className="space-y-3 flex-1">
            <span className="text-xs bg-accent/15 text-accent font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Advanced Clinical Technology
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-primary-darker">{technology.name}</h1>
            <p className="text-text-secondary leading-relaxed max-w-xl">
              {technology.shortDescription}
            </p>
          </div>
        </div>

        {/* Technology Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-soft space-y-4">
            <h3 className="font-serif font-bold text-2xl text-primary-dark flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" /> Key Therapeutic Benefits
            </h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Non-invasive stimulation to accelerate tissue regeneration and healing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Deep penetration targeting neural pathways and deep muscle fibers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Precisely controlled computerized frequencies designed to minimize treatment discomfort.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Clinically tested protocols with rapid relief from inflammatory pain.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-soft space-y-4">
            <h3 className="font-serif font-bold text-2xl text-primary-dark flex items-center gap-2">
              <Heart className="w-6 h-6 text-accent" /> Why We Use It
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              At Gulati Physiotherapy Clinic, we prioritize cutting-edge, evidence-based tools. By incorporating equipment like {technology.name}, we provide a higher caliber of precision care that traditional manual therapy alone cannot achieve. 
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              This results in reduced recovery timelines, less pain during therapy sessions, and more sustainable outcomes for complex spine and joint disorders.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-tr from-primary-dark to-primary-darker p-8 md:p-12 rounded-3xl text-white text-center space-y-6 shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold font-serif">Experience the benefits of {technology.name}</h2>
          <p className="text-teal-100 max-w-lg mx-auto text-sm">
            Consult with our specialists to see if this technology is suitable for your rehabilitation protocol.
          </p>
          <div className="pt-2">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition duration-300 shadow-lg shadow-accent/25"
            >
              <Calendar className="w-5 h-5" />
              Schedule Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
