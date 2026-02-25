import { Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="bg-[#137fec] p-1.5 rounded-lg text-white">
                <Stethoscope className="size-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">Ruhil Dental</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing high-quality dental services with a focus on patient comfort and advanced technology in the heart of Rohtak.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/services" className="hover:text-[#137fec] transition-colors">Root Canal Treatment</Link></li>
              <li><Link to="/services" className="hover:text-[#137fec] transition-colors">Dental Implants</Link></li>
              <li><Link to="/services" className="hover:text-[#137fec] transition-colors">Teeth Whitening</Link></li>
              <li><Link to="/services" className="hover:text-[#137fec] transition-colors">Braces & Aligners</Link></li>
              <li><Link to="/services" className="hover:text-[#137fec] transition-colors">Children's Dentistry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/" className="hover:text-[#137fec] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#137fec] transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#137fec] transition-colors">Patient Stories</Link></li>
              <li><Link to="/contact" className="hover:text-[#137fec] transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#137fec]">Phone:</span> +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#137fec]">Email:</span> info@ruhildental.com
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#137fec]">Location:</span> Rohtak, Haryana
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ruhil Dental Clinic. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <Link to="#" className="hover:text-[#137fec]">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#137fec]">Terms of Service</Link>
            <Link to="#" className="hover:text-[#137fec]">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
