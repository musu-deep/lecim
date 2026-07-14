import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Language } from '../types';

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'center' | 'start';
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function TextLink({ children, lang }: { children: ReactNode; lang: Language }) {
  return (
    <span className="text-link">
      {children}
      {lang === 'ar' ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
    </span>
  );
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
