import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function LegalPageLayout({ breadcrumbs, heading, lastUpdated, children }) {
  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* PAGE TITLE BANNER */}
      <section className="bg-linear-to-r from-teal-100 to-teal-50/50 py-12 px-6 border-b border-primary/10 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] bg-size-[16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-text-secondary font-medium">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-text-secondary/50" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-primary font-semibold">{crumb}</span>
                ) : (
                  <span className="text-text-secondary/80">{crumb}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker tracking-tight leading-tight">
            {heading}
          </h1>
        </div>
      </section>

      {/* CONTENT CONTAINER */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-212.5 mx-auto">
          <div className="bg-white rounded-2xl border border-primary/5 shadow-soft p-8 md:p-12 text-left space-y-8">
            
            {/* Last Updated Badge */}
            {lastUpdated && (
              <span className="inline-block px-3 py-1 bg-slate-100 text-text-secondary text-xs font-semibold rounded-full tracking-wide">
                Last Updated: {lastUpdated}
              </span>
            )}

            {/* Page Content (children) */}
            {children}

          </div>
        </div>
      </section>

    </div>
  );
}
