import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Get In Touch</h1>
          <p className="text-lg text-slate-600">
            Have questions or want to book an appointment? We're here to help you achieve your best smile.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-[#137fec] size-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <p className="text-slate-600">+91 98765 43210</p>
                  <p className="text-slate-600">+91 1262 234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-[#137fec] size-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <p className="text-slate-600">contact@ruhildental.com</p>
                  <p className="text-slate-600">support@ruhildental.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-[#137fec] size-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Address</p>
                  <p className="text-slate-600">Main Market Road, Near City Center, Rohtak, Haryana 124001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#137fec]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="text-[#137fec] size-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Hours</p>
                  <p className="text-slate-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white p-6 rounded-2xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all font-bold text-lg"
            >
              <MessageCircle className="size-6" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="px-4 py-3 rounded-xl border border-slate-200 focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="px-4 py-3 rounded-xl border border-slate-200 focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="px-4 py-3 rounded-xl border border-slate-200 focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Interested In</label>
                  <select className="px-4 py-3 rounded-xl border border-slate-200 focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 outline-none transition-all bg-white">
                    <option>General Checkup</option>
                    <option>Root Canal Treatment</option>
                    <option>Dental Implants</option>
                    <option>Teeth Whitening</option>
                    <option>Braces & Aligners</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="px-4 py-3 rounded-xl border border-slate-200 focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-fit px-10 py-4 bg-[#137fec] text-white font-bold rounded-xl shadow-xl shadow-[#137fec]/30 hover:bg-[#137fec]/90 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="size-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55844.08836526118!2d76.5684617!3d28.8955152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d859975645705%3A0x2fa202655148e339!2sRohtak%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}
