'use client';

import { useState } from 'react';

interface EmailInputProps {
  onSubmit: (email: string) => void;
}

export const EmailInput = ({ onSubmit }: EmailInputProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        onSubmit(email);
      } else {
        alert('Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block mb-2 text-ink">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full bg-transparent border-b border-line text-ink focus:outline-none focus:border-ink pb-2"
          placeholder=""
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 px-8 py-3 bg-accent-brown text-white rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Add me to the list'}
      </button>
    </form>
  );
};

