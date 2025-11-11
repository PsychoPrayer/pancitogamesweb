'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Implement actual form submission logic
    // For now, just simulate a submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--pancito-primary)] to-[var(--pancito-secondary)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90">
            Have questions, suggestions, or just want to say hello? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--pancito-dark)]">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--pancito-primary)] focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--pancito-primary)] focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--pancito-primary)] focus:border-transparent outline-none transition"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--pancito-primary)] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[var(--pancito-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--pancito-secondary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent! ✓' : 'Send Message'}
                </button>

                {status === 'sent' && (
                  <p className="text-green-600 text-center">Thank you! We&apos;ll get back to you soon.</p>
                )}

                {status === 'error' && (
                  <p className="text-red-600 text-center">Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--pancito-dark)]">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-[var(--pancito-light)] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[var(--pancito-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Email</h3>
                    <a href="mailto:hi@pancitogames.com" className="text-[var(--pancito-primary)] hover:underline">
                      hi@pancitogames.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-[var(--pancito-light)] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[var(--pancito-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">United States</p>
                    <p className="text-gray-500 text-sm">Founded in 2016</p>
                  </div>
                </div>

                {/* Social Media (Placeholder) */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-[var(--pancito-light)] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[var(--pancito-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">Social Media</h3>
                    <p className="text-gray-500 text-sm">Coming Soon!</p>
                    <div className="flex space-x-3 mt-2">
                      <span className="text-gray-400">Instagram</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">Twitter</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">TikTok</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Box */}
              <div className="mt-8 bg-[var(--pancito-light)] p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Business Inquiries</h3>
                <p className="text-gray-700 mb-4">
                  Interested in partnerships, press inquiries, or collaboration opportunities?
                </p>
                <p className="text-sm text-gray-600">
                  Please email us at{' '}
                  <a href="mailto:hi@pancitogames.com" className="text-[var(--pancito-primary)] hover:underline font-semibold">
                    hi@pancitogames.com
                  </a>{' '}
                  with your proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[var(--pancito-dark)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                When will Memory History be released?
              </h3>
              <p className="text-gray-700">
                Memory History is currently in development. We&apos;ll announce the beta release date soon. Sign up on the Memory History page to be notified!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                What platforms will Memory History be available on?
              </h3>
              <p className="text-gray-700">
                Memory History will be available on Android first, with iOS coming shortly after.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Are you planning to release more games?
              </h3>
              <p className="text-gray-700">
                Yes! Memory History is just the beginning. We have several educational games in the pipeline celebrating different aspects of Latin American culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



