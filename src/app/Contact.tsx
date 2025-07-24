'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  const FORMSPREE_URL = 'https://formspree.io/f/mqalplva';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous error when user starts typing
    if (submissionState === 'error') {
      setSubmissionState('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email, // This tells Formspree to set reply-to header
        }),
      });

      if (response.ok) {
        setSubmissionState('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset to idle state after 5 seconds
        setTimeout(() => {
          setSubmissionState('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmissionState('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly.');
      console.error('Form submission error:', error);
    }
  };

  const isSubmitting = submissionState === 'submitting';

  return (
    <section
      id="contact"
      className={`${
        darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
      } min-h-screen py-20 px-4 transition-colors duration-500 flex items-center justify-center`}
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Contact Me
          </h2>
          <p className={`text-base md:text-lg leading-relaxed max-w-lg mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind, or just want to say hi? I&apos;d love to hear from you. Fill out the form and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Success Message */}
        {submissionState === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p>Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.</p>
          </motion.div>
        )}

        {/* Error Message */}
        {submissionState === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{errorMessage}</p>
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${
            darkMode 
              ? 'bg-[#1e293b] border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          } rounded-2xl border shadow-xl p-8 md:p-12`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                  darkMode
                    ? 'bg-[#0f172a] border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder=""
              />
            </div>

            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Email 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                  darkMode
                    ? 'bg-[#0f172a] border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder=""
              />
            </div>

            {/* Message Field */}
            <div>
              <label 
                htmlFor="message" 
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Message 
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
                  darkMode
                    ? 'bg-[#0f172a] border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || submissionState === 'success'}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                isSubmitting || submissionState === 'success'
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              } ${
                darkMode ? 'focus:ring-offset-[#1e293b]' : 'focus:ring-offset-gray-50'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : submissionState === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
        </motion.div>
      </div>
    </section>
  );
}