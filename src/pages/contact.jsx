import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
          <p className="text-gray-600">
            Reach out to us directly through phone or WhatsApp, or visit our location shown below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  Genius Higher Educational Institute,<br />
                  Police Road, Mawathagama, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
                <a href="tel:+94707171551" className="text-blue-600 hover:underline">
                  +94 70 717 1551
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-green-500 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">WhatsApp</h4>
                <a
                  href="http://wa.me/+94707171551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Genius Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258.7624573649568!2d80.44774881210307!3d7.435061534526432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33965f64ab739%3A0x6cebc8beff90cfdc!2sInnometrics%20Lanka%20(Pvt)%20Ltd!5e1!3m2!1sen!2slk!4v1753779341079!5m2!1sen!2slk"
              width="100%"
              height="320"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
