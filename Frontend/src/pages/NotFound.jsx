import React from 'react';
import { Link } from 'react-router-dom';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-brand-bg px-6 py-16 text-text-main">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/10">
          <SearchX className="h-10 w-10" />
        </div>
        <h1 className="font-serif text-7xl font-bold tracking-tight text-primary md:text-8xl">404</h1>
        <p className="mt-4 text-2xl font-semibold text-text-main md:text-3xl">Page not found</p>
        <p className="mt-4 max-w-xl text-base leading-7 text-text-secondary md:text-lg">
          The page you are looking for does not exist or has moved. Use the button below to return to the home page.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent-hover"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}