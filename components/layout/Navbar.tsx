"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Menu, X, CheckCircle2, Sparkles, Building2 } from "lucide-react";

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
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9 rounded-lg bg-corporate-navy flex items-center justify-center p-1.5 shadow-xs transition-transform group-hover:scale-105">
              <Image src="/favicon.svg" alt="Dalienst Logo" width={32} height={32} className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-tight group-hover:text-corporate-primary transition-colors">
                DALIENST
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-none mt-0.5">
                Software Architect
              </span>
            </div>
          </Link>

          {/* Availability Status Badge (Desktop) */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-medium text-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Systems Architecture &amp; Advisory</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <Link href="#about" className="hover:text-corporate-primary transition-colors">
              About
            </Link>
            <Link href="#company" className="hover:text-corporate-primary transition-colors flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-corporate-primary" />
              Corban Tech
            </Link>
            <Link href="#platforms" className="hover:text-corporate-primary transition-colors">
              Platforms
            </Link>
            <Link href="#enterprise" className="hover:text-corporate-primary transition-colors">
              Enterprise Work
            </Link>
            <Link href="#architecture" className="hover:text-corporate-primary transition-colors">
              Architecture
            </Link>
            <Link href="#stack" className="hover:text-corporate-primary transition-colors">
              Tech Stack
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <Link
              href="#contact"
              className="px-4 py-2 rounded-md bg-corporate-primary hover:bg-orange-600 text-white text-xs font-semibold transition-all shadow-xs inline-flex items-center gap-1.5"
            >
              Let&apos;s Connect <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-slate-200 mt-3 space-y-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Architecture &amp; Advisory</span>
            </div>
            <nav className="flex flex-col gap-2 text-sm font-semibold text-slate-700 pt-1">
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                About
              </Link>
              <Link
                href="#company"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-corporate-primary" />
                Corban Technologies LTD
              </Link>
              <Link
                href="#platforms"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Commercial Platforms (6 Divisions)
              </Link>
              <Link
                href="#enterprise"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Enterprise Case Studies (Tamarind)
              </Link>
              <Link
                href="#architecture"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Engineering Philosophy
              </Link>
              <Link
                href="#stack"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Tech Stack &amp; Education
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md bg-corporate-primary text-white text-center font-semibold mt-2"
              >
                Contact Dalienst
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
