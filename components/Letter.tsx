'use client';

import Image from "next/image";
import { useState } from "react";
import { Confirmation } from "./Confirmation";
import { EmailInput } from "./EmailInput";

export const Letter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Confirmation email={email} />;
  }

  return (
    <article className="letter-container bg-paper rounded-sm p-8 sm:p-12 md:p-16 max-w-2xl mx-auto border border-line relative">
      {/* Logo at top right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <Image 
          src="/logo.png" 
          alt="The Waiting Club" 
          width={112}
          height={112}
          className="w-20 sm:w-24 md:w-28 h-auto"
        />
      </div>

      {/* Letter header - like a date on stationery */}
      <header className="opacity-0 animate-fade-up delay-100 mb-8">
        <p className="text-ink-light text-sm tracking-wide italic">
          A letter, left for you
        </p>
      </header>

      {/* Main letter content */}
      <div className="space-y-4">
        <p className="opacity-0 animate-fade-up delay-200 text-ink leading-relaxed">
          We kept asking ourselves a simple question.
        </p>

        <p className="opacity-0 animate-fade-up delay-300 text-ink leading-relaxed">
          Why does everything have to live on a screen?
        </p>

        <p className="opacity-0 animate-fade-up delay-400 text-ink leading-relaxed">
          Growing up, waiting was part of the joy. I remember waiting for Twinkle magazines, counting the days on a calendar, crossing them off one by one, just to feel that quiet excitement build. It gave the thing arriving more meaning before it even showed up.
        </p>

        <p className="opacity-0 animate-fade-up delay-500 text-ink leading-relaxed">
          Today, almost everything is a click away. Shows, entertainment, answers. There&apos;s nothing left to wait for anymore. And somewhere in all that instant access, something gentle disappeared.
        </p>

        <p className="opacity-0 animate-fade-up delay-700 text-ink leading-relaxed">
          So we asked ourselves another question. What if we built something that didn&apos;t live on a screen at all?
        </p>

        <p className="opacity-0 animate-fade-up delay-800 text-ink leading-relaxed">
          That question became The Waiting Club.
        </p>

        <p className="opacity-0 animate-fade-up delay-900 text-ink leading-relaxed mt-6">
          If that sounds like something you&apos;d enjoy, leave your email below. 
          We&apos;ll let you know when we get started.
        </p>

        <p className="opacity-0 animate-fade-up delay-1000 text-ink leading-relaxed italic text-ink-light">
          No rush. Take your time.
        </p>
      </div>

      {/* Email input section */}
      <div className="opacity-0 animate-fade-up delay-1100 mt-8">
        <EmailInput onSubmit={handleSubmit} />
      </div>

      {/* Signature */}
      <footer className="opacity-0 animate-fade-up delay-1200 mt-12 pt-6 border-t border-line">
        <p className="font-serif text-ink italic">
          With patience,
        </p>
        <p className="font-serif text-ink mt-2">
          The Waiting Club
        </p>
      </footer>
    </article>
  );
};

