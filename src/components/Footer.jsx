import { BsWhatsapp } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Genius Higher Educational Institute
          </h2>
          <p className="text-gray-400 mb-4 max-w-sm">
            Innovating technology solutions with dedication and excellence.
            Empowering businesses worldwide with our expertise.
          </p>
          <p className="text-gray-400 text-sm">
            <strong>Address:</strong>Genius Higher Educational Institute, Police Road, Mawathagama<br />
            <strong>Phone:</strong> 070 717 1551<br />
            <strong>Email:</strong> sbndaranayaka84@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Services</li>
            <li className="hover:text-white transition cursor-pointer">Products</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Useful Links + Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>
              <a href="https://www.e-thaksalawa.moe.gov.lk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Ethaksalawa
              </a>
            </li>
            <li>
              <a href="http://www.nanasala.lk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Nanasala
              </a>
            </li>
            <li>
              <a href="https://moe.gov.lk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Ministry of Education
              </a>
            </li>
            <li>
              <a href="https://www.gov.lk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Government Web Portal
              </a>
            </li>
          </ul>

          <div>
            <h4 className="text-white font-medium mb-2">Follow Us</h4>
            <div className="flex space-x-4 text-white">
              <a href="http://wa.me/+94707171551" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                <BsWhatsapp size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedinIn size={20} />
              </a>
            </div>
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
