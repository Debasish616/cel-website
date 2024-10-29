"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for signing up with ${email}`);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      {/* First Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000">
        <div className="m-0">
          <Image src="/logo.png" alt="Celeriz Logo" width={300} height={300} />
        </div>
        <h1 className="text-5xl md:text-3xl font-bold text-center mt-[-0.5rem]">
          Unleash the Flow of Global Finance
        </h1>
      </section>

      {/* Second Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000">
        <p className="text-2xl md:text-4xl text-center max-w-3xl leading-relaxed">
          Celeriz: Where your money moves at the speed of thought, across
          borders and beyond limitations
        </p>
      </section>

      {/* Third Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000">
        <p className="text-2xl md:text-4xl text-center max-w-3xl leading-relaxed">
          Tomorrow&apos;s finance, today&apos;s reality
        </p>
      </section>

      {/* Fourth Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000">
        <p className="text-2xl md:text-4xl text-center max-w-3xl leading-relaxed">
          Experience the cutting-edge of cross-border payments with
          Celeriz&apos;s blockchain-powered platform
        </p>
      </section>

      {/* Celeriz Story Section */}
      <section
        id="celeriz-story"
        className="snap-start h-screen flex flex-col items-center justify-center text-center px-4 transition-opacity duration-1000"
      >
        {/* Bold Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          BORDERS ARE JUST LINES ON A MAP.
        </h2>

        {/* Story Content */}
        <p className="text-xl md:text-2xl max-w-4xl leading-relaxed mb-8">
          The story of Celeriz starts with connection. We envision a world where
          financial barriers dissolve, where value flows as freely as ideas.
          Those who embrace global citizenship deserve more: more freedom, more
          opportunities, more power over their finances. This is the borderless
          future we&apos;re building.
        </p>

        <p className="text-xl md:text-2xl max-w-4xl leading-relaxed mb-8">
          Join the network, and experience a world without financial frontiers.
        </p>

        {/* Closing Tagline */}
        <p className="text-3xl md:text-4xl font-bold italic">
          Not just a payment platform. A bridge to the future.
        </p>
      </section>

      {/* Sign-up Section and Footer */}
      <section className="snap-start h-screen flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Sign up now and be the first to know when we go live!
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
          Stay informed and be among the first to experience Celeriz, the
          innovative cross-border payment platform.
        </p>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full md:flex-grow p-4 rounded-full border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-10 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              NOTIFY ME!
            </button>
          </div>
        </form>

        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Company Name */}
            <p className="text-lg font-semibold text-white">Celeriz © 2024</p>

            {/* Footer Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.73 0-1.325.594-1.325 1.325v21.351c0 .73.594 1.325 1.325 1.325h11.49v-9.29h-3.123v-3.622h3.123v-2.672c0-3.066 1.867-4.736 4.595-4.736 1.312 0 2.438.097 2.765.141v3.207h-1.899c-1.491 0-1.781.71-1.781 1.748v2.292h3.563l-.466 3.622h-3.098v9.29h6.079c.73 0 1.325-.594 1.325-1.325v-21.351c0-.731-.594-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.043.761.128 1.122-4.09-.205-7.719-2.165-10.148-5.144-.424.728-.666 1.572-.666 2.476 0 1.709.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.386 1.698 4.374 3.95 4.827-.414.112-.849.172-1.296.172-.317 0-.626-.031-.929-.088.627 1.956 2.445 3.379 4.6 3.418-1.684 1.32-3.809 2.108-6.115 2.108-.398 0-.79-.023-1.176-.069 2.179 1.397 4.768 2.211 7.548 2.211 9.051 0 13.998-7.497 13.998-13.985 0-.213-.004-.426-.014-.637.961-.693 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0h-20.46c-.974 0-1.771.797-1.771 1.771v20.459c0 .974.797 1.77 1.771 1.77h20.459c.974 0 1.771-.796 1.771-1.771v-20.459c0-.974-.797-1.771-1.771-1.771zm-13.538 20.281h-3.107v-10.281h3.107v10.281zm-1.553-11.667c-.997 0-1.805-.809-1.805-1.805 0-.997.809-1.805 1.805-1.805s1.805.808 1.805 1.805c0 .996-.809 1.805-1.805 1.805zm12.312 11.667h-3.106v-5.412c0-1.292-.026-2.951-1.798-2.951-1.798 0-2.073 1.403-2.073 2.854v5.509h-3.107v-10.281h2.984v1.404h.041c.415-.788 1.428-1.615 2.939-1.615 3.14 0 3.719 2.067 3.719 4.757v5.735z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
