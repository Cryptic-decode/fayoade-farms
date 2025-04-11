'use client';

import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-[#2A7E2E]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Newsletter Content */}
          <div className="mb-8">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
              Stay Connected
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Get the latest updates on our farm-fresh products, seasonal offerings, and exclusive promotions delivered straight to your inbox.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 rounded-lg border-2 border-transparent focus:border-[#9FD134] focus:ring-2 focus:ring-[#9FD134] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`px-8 py-4 bg-[#9FD134] text-white font-medium rounded-lg hover:bg-[#8BC022] transition-colors
                  ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {/* Status Message */}
            {status !== 'idle' && (
              <div className={`mt-4 text-center ${status === 'success' ? 'text-white' : 'text-red-200'}`}>
                {message}
              </div>
            )}

            {/* Privacy Notice */}
            <p className="text-white/70 text-sm mt-4">
              By subscribing, you agree to receive marketing communications from us. 
              Don&apos;t worry, we respect your privacy and you can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 