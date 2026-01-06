interface ConfirmationProps {
  email: string;
}

export const Confirmation = ({ email }: ConfirmationProps) => {
  return (
    <article className="letter-container bg-paper rounded-sm p-8 sm:p-12 md:p-16 max-w-2xl mx-auto border border-line">
      <div className="space-y-4">
        <p className="text-ink leading-relaxed text-lg">
          Thank you.
        </p>

        <p className="text-ink leading-relaxed">
          You&apos;re on the waitlist.
        </p>

        <p className="text-ink leading-relaxed">
          We&apos;ll notify you when The Waiting Club begins.
        </p>

        <p className="text-ink leading-relaxed italic text-ink-light">
          Until then, take your time.
        </p>
      </div>

      <footer className="mt-12 pt-6 border-t border-line">
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

