import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, MessageCircle, Stethoscope } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Dr. Ruhil', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 md:px-20 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-[#137fec]">
            <Stethoscope className="size-8" />
          </div>
          <h2 className="text-slate-900 text-lg font-extrabold leading-tight tracking-tight">Ruhil Dental</h2>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-[#137fec]",
                  location.pathname === link.href 
                    ? "text-[#137fec] border-b-2 border-[#137fec]" 
                    : "text-slate-700"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <a 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg h-10 bg-green-500 hover:bg-green-600 text-white gap-2 text-sm font-bold px-4 transition-all shadow-sm"
          >
            <MessageCircle className="size-5" />
            WhatsApp
          </a>
        </div>

        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-sm font-semibold py-2",
                location.pathname === link.href ? "text-[#137fec]" : "text-slate-700"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/919876543210"
            className="flex items-center justify-center rounded-lg h-12 bg-green-500 text-white gap-2 font-bold"
          >
            <MessageCircle className="size-5" />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
