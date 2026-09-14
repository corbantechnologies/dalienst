import Link from "next/link";
import Image from "next/image";
import { Building2, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Parent Company */}
          <div className="space-y-3 md:col-span-2 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-slate-900 border border-slate-700 flex items-center justify-center p-1">
                <Image src="/favicon.svg" alt="Dalienst Logo" width={24} height={24} />
              </div>
              <span className="text-base font-bold text-white tracking-tight">DALIENST OWINO ODUOR</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Lead Software Engineer &amp; Systems Architect. Founder and Managing Director at <strong className="text-white">Corban Technologies LTD</strong>. Building, cloud-hosting, and scaling mission-critical platforms across East Africa.
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-[11px] pt-1">
              <Building2 className="w-3.5 h-3.5 text-corporate-primary" />
              <span>Corban Technologies LTD · Mombasa &amp; Nairobi, Kenya</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <Link href="#about" className="hover:text-corporate-primary transition-colors">
                  Executive Profile
                </Link>
              </li>
              <li>
                <Link href="#company" className="hover:text-corporate-primary transition-colors">
                  Corban Technologies LTD
                </Link>
              </li>
              <li>
                <Link href="#platforms" className="hover:text-corporate-primary transition-colors">
                  Commercial Platforms
                </Link>
              </li>
              <li>
                <Link href="#architecture" className="hover:text-corporate-primary transition-colors">
                  Architecture Philosophy
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-corporate-primary transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Corporate Entity</h4>
            <div className="space-y-2">
              <a
                href="https://www.corbantechnologies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-corporate-primary hover:text-orange-400 transition-colors font-semibold"
              >
                <span>corbantechnologies.org</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-[11px] text-slate-400">
                Official website of Corban Technologies LTD — Enterprise software, cloud infrastructure, and telecom platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Dalienst Owino Oduor. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Corporate Vehicle:</span>
            <a
              href="https://www.corbantechnologies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Corban Technologies LTD
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
