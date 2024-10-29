// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Footer Logo or Company Name */}
          <p className="text-lg font-semibold text-white mb-4 md:mb-0">
            Celeriz © 2024
          </p>

          {/* Footer Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        {/* Social Icons (Optional) */}
        <div className="mt-8 text-center">
          <a href="#" className="text-blue-500 hover:text-white mx-2">
            Facebook
          </a>
          <a href="#" className="text-blue-500 hover:text-white mx-2">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-white mx-2">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
