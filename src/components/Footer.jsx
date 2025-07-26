import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Company Info */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold text-white mb-4">Company name</h2>
          <p className="text-gray-400 mb-4 max-w-sm">
            Innovating technology solutions with dedication and excellence.  
            Empowering businesses worldwide with our expertise.
          </p>
          <p className="text-gray-400">
            <strong>Address:</strong> 123, Tech Park, Colombo, Sri Lanka<br />
            <strong>Phone:</strong> +94 11 1234 567<br />
            <strong>Email:</strong> info@example.lk
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">Home</li>
            <li className="mb-2 hover:text-white cursor-pointer">About Us</li>
            <li className="mb-2 hover:text-white cursor-pointer">Services</li>
            <li className="mb-2 hover:text-white cursor-pointer">Products</li>
            <li className="mb-2 hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/tninternational" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com/tninternational" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com/company/tninternational" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com/tninternational" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TN International (PVT) LTD. All rights reserved.
      </div>
    </footer>
  );
}
