// components/SignUpForm.tsx
"use client"; // Mark this component as a Client Component
import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic (e.g., API call)
    alert(`Thank you for signing up with ${email}`);
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-black to-gray text-white">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Sign up now and be the first to know when we go live!
      </h2>

      {/* Subheadline */}
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Stay informed and be among the first to experience Celeriz, the
        innovative cross-border payment platform.
      </p>

      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full md:flex-grow p-4 rounded-full border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full  bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-10 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            NOTIFY ME!
          </button>
        </div>
      </form>
    </section>
  );
}
