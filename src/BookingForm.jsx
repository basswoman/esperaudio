import { useState } from 'react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      experience: form.experience.value,
      software: form.software.value,
      goals: form.goals.value,
    };

    try {
      const res = await fetch('https://formspree.io/f/xdkwqaky', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <h2 className="text-3xl font-semibold text-[#D6724E] mb-3">
          Thank you!
        </h2>
        <p className="text-gray-600 mb-6">
          I'll get back to you soon. If you'd like, you can also book a free
          15-minute intro chat to discuss your goals and see if we're a good
          fit.
        </p>

        {/* Calendly Embed */}
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://calendly.com/hello-esper/introduction-meeting"
            width="100%"
            min-width="320px"
            height="100%"
            style={{ border: 0 }}
            title="Book a free intro chat"
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-lg  p-8 space-y-5"
    >
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        Tell Me About You
      </h2>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200  text-red-700 text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          disabled={loading}
          className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#D6724E] disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          required
          disabled={loading}
          className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#D6724E] disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="experience" className="sr-only">
          Experience Level
        </label>
        <select
          id="experience"
          name="experience"
          required
          disabled={loading}
          className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#D6724E] disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <option value="">Experience Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      <div>
        <label htmlFor="software" className="sr-only">
          Preferred Software
        </label>
        <select
          id="software"
          name="software"
          required
          disabled={loading}
          className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#D6724E] disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <option value="">Preferred Software</option>
          <option>Ableton Live</option>
          <option>Logic Pro</option>
          <option>GarageBand</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="goals" className="sr-only">
          Your Goals
        </label>
        <textarea
          id="goals"
          name="goals"
          rows="4"
          placeholder="What do you want to learn or achieve?"
          required
          disabled={loading}
          className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#D6724E] disabled:bg-gray-100 disabled:cursor-not-allowed"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#D6724E] text-white py-3  hover:bg-[#c25f3b] transition font-medium"
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
