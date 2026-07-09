import React, { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, BadgeCheck, CheckCircle2, ChevronRight, Home, ShieldCheck } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { technologies } from '../data/technology';

const benefitItems = [
  { label: 'Non-Invasive', icon: ShieldCheck },
  { label: 'Clinically Proven', icon: BadgeCheck },
  { label: 'Fast Recovery Support', icon: CheckCircle2 }
];

export default function TechnologyPage() {
  const { slug } = useParams();

  const technology = useMemo(() => technologies.find((item) => item.slug === slug), [slug]);

  const IconComponent = useMemo(() => {
    if (!technology) {
      return LucideIcons.Activity;
    }

    return LucideIcons[technology.icon] || LucideIcons.Activity;
  }, [technology]);

  const otherTechnologies = useMemo(() => {
    if (!technology) {
      return [];
    }

    return technologies.filter((item) => item.slug !== technology.slug);
  }, [technology]);

  if (!technology) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-bg text-text-main font-sans">
      <section className="relative overflow-hidden border-b border-primary/10 bg-linear-to-br from-teal-50 via-brand-bg to-amber-50/40">
        <div className="absolute inset-0 pointer-events-none opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(217,119,6,0.08),transparent_35%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:px-8 md:py-16">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-text-secondary">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3 text-text-secondary/50" />
            <span>Technology</span>
            <ChevronRight className="h-3 w-3 text-text-secondary/50" />
            <span className="text-primary">{technology.title}</span>
          </nav>

          <div className="grid items-center gap-8 md:grid-cols-[auto,1fr] md:gap-10">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/10 md:mx-0 md:h-28 md:w-28">
              <IconComponent className="h-11 w-11 text-primary md:h-14 md:w-14" />
            </div>

            <div className="space-y-4 text-center md:text-left">
              <p className="inline-flex rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent shadow-sm backdrop-blur">
                Advanced Clinical Technology
              </p>
              <h1 className="text-4xl font-serif font-bold tracking-tight text-text-main md:text-5xl lg:text-6xl">
                {technology.title}
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-8 text-text-secondary md:mx-0 md:text-lg">
                {technology.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-14 md:px-8 md:py-20">
        <div className="space-y-5">
          <h2 className="border-l-4 border-primary pl-4 text-2xl font-serif font-bold text-text-main md:text-3xl">
            {technology.sectionHeading}
          </h2>
          <p className="max-w-4xl text-base leading-8 text-text-secondary md:text-lg">
            {technology.sectionContent}
          </p>
        </div>

        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {benefitItems.map((item) => {
              const ItemIcon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl bg-brand-bg px-4 py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-text-main">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">How It Helps</p>
            <p className="text-sm leading-7 text-text-secondary md:text-base">
              This therapy is designed to fit into a guided rehabilitation plan with steady, measurable support for pain relief and functional recovery.
            </p>
          </div>

          <Link
            to="/online-appointment"
            className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Book a Session
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-5 border-t border-primary/10 pt-2">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-serif font-bold text-text-main">Explore Other Technologies</h3>
            <Link to="/" className="hidden items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent md:inline-flex">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherTechnologies.map((item) => {
              const OtherIcon = LucideIcons[item.icon] || LucideIcons.Activity;

              return (
                <Link
                  key={item.slug}
                  to={`/technology/${item.slug}`}
                  className="group rounded-2xl border border-primary/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <OtherIcon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-serif font-bold text-text-main transition-colors group-hover:text-primary">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-6 text-text-secondary line-clamp-3">
                        {item.intro}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}