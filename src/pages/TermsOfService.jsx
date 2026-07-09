import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function TermsOfService() {
  return (
    <LegalPageLayout
      breadcrumbs={["Terms of Service"]}
      heading="Terms of Service"
      lastUpdated="January 2026"
    >
      <div className="space-y-8">
        {/* Intro */}
        <p className="text-[1.05rem] leading-[1.8] text-slate-600">
          By scheduling a session at Gulati Physiotherapy Clinic, you agree to follow our clinical guidelines and terms of service.
        </p>

        {/* Section: Consultation & Cancellations */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif font-bold text-xl md:text-2xl text-primary-darker border-l-4 border-teal-600 pl-4">
            Consultation &amp; Cancellations
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-slate-600">
            All clinical visits require a pre-booked slot. Cancellations or changes to your booking must be made at least 24 hours before your session time.
          </p>
        </div>

        {/* Section: Liability Disclaimer */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif font-bold text-xl md:text-2xl text-primary-darker border-l-4 border-teal-600 pl-4">
            Liability Disclaimer
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-slate-600">
            Rehabilitation outcomes vary by individual. Our staff provides treatment in line with professional care standards, but results cannot be guaranteed.
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
