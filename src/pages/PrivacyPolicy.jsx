import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      breadcrumbs={["Privacy Policy"]}
      heading="Privacy Policy"
      lastUpdated="January 2026"
    >
      <div className="space-y-8">
        {/* Intro */}
        <p className="text-[1.05rem] leading-[1.8] text-slate-600">
          We value your privacy. This policy outlines how we handle medical diagnoses, contact details, and session logs at Gulati Physiotherapy Clinic.
        </p>

        {/* Section: Clinical Data Privacy */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif font-bold text-xl md:text-2xl text-primary-darker border-l-4 border-teal-600 pl-4">
            Clinical Data Privacy
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-slate-600">
            We treat all patient files, orthopedic assessments, and recovery reports confidentially. Information is shared only with authorized medical professionals involved in your care.
          </p>
        </div>

        {/* Section: Use of Contact Information */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif font-bold text-xl md:text-2xl text-primary-darker border-l-4 border-teal-600 pl-4">
            Use of Contact Information
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-slate-600">
            Your contact details are used solely to schedule sessions, send reminders, and provide treatment updates. We do not share your details with third-party marketing services.
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
