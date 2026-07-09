import React from 'react';
import { CheckCircle } from 'lucide-react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function WarrantiesGuarantees() {
  const commitments = [
    {
      title: "Personalized Therapy Protocols",
      description: "If you do not see functional progress within the first 6 sessions of your clinical plan, we will review and adjust your exercises and therapies at no additional diagnosis cost."
    },
    {
      title: "Qualified Therapists",
      description: "Every session is supervised by a certified physiotherapist to ensure exercises are performed safely and effectively."
    },
    {
      title: "Clean & Sanitized Stations",
      description: "All clinical tables, support bands, and resistance devices are thoroughly sanitized between sessions to maintain high hygiene standards."
    }
  ];

  return (
    <LegalPageLayout
      breadcrumbs={["Warranties & Guarantees"]}
      heading="Warranties & Guarantees"
      lastUpdated="January 2026"
    >
      <div className="space-y-8">
        {/* Intro */}
        <p className="text-[1.05rem] leading-[1.8] text-slate-600">
          We are committed to delivering safe and effective rehabilitation. We outline clear timelines and care standards to help you feel confident in your treatment plan.
        </p>

        {/* Section: Our Care Commitments */}
        <div className="space-y-6 pt-4">
          <h2 className="font-serif font-bold text-xl md:text-2xl text-primary-darker border-l-4 border-teal-600 pl-4">
            Our Care Commitments
          </h2>

          {/* Commitment Cards */}
          <div className="space-y-4">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-brand-bg border border-primary/5 rounded-xl p-5 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm md:text-base text-primary-darker">
                    {idx + 1}. {item.title}
                  </h4>
                  <p className="text-sm md:text-[0.95rem] leading-[1.8] text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LegalPageLayout>
  );
}
