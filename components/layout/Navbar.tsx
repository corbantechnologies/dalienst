"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, ExternalLink, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2.5"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9 rounded-lg bg-corporate-navy flex items-center justify-center p-1.5 shadow-xs transition-transform group-hover:scale-105">
              <Image src="/favicon.svg" alt="Dalienst Logo" width={32} height={32} className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-tight group-hover:text-corporate-primary transition-colors">
                DALIENST
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-none mt-0.5">
                Systems Architect
              </span>
            </div>
          </Link>

          {/* Minimal Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
            <Link href="#about" className="hover:text-corporate-primary transition-colors">
              About
            </Link>
            <Link href="#company" className="hover:text-corporate-primary transition-colors">
              Corban Tech (CTLTD)
            </Link>
            <Link href="#platforms" className="hover:text-corporate-primary transition-colors">
              Platforms
            </Link>
            <Link href="#architecture" className="hover:text-corporate-primary transition-colors">
              Architecture
            </Link>
            <Link href="#contact" className="hover:text-corporate-primary transition-colors">
              Inquire
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://www.corbantechnologies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              corbantechnologies.org <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
            <Link
              href="#contact"
              className="px-4 py-1.5 rounded-md bg-corporate-primary hover:bg-orange-600 text-white text-xs font-semibold transition-all shadow-xs inline-flex items-center gap-1"
            >
              Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-slate-200 mt-3 space-y-2 text-sm font-semibold text-slate-700">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              About
            </Link>
            <Link
              href="#company"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              Corban Technologies LTD
            </Link>
            <Link
              href="#platforms"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              Platforms
            </Link>
            <Link
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              Architecture Philosophy
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              Executive Consultation
            </Link>
            <a
              href="https://www.corbantechnologies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md bg-slate-100 text-slate-800 font-semibold"
            >
              Visit corbantechnologies.org ↗
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
