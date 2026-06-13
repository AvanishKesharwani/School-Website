import Link from "next/link";
import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative architectural line art background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
             <img src="/logo.png" alt="Manka Public School Logo" className="h-12 w-auto" />
              <span className="font-bold text-xl tracking-tight text-brand-white">
                Manka Public School
              </span>
            <p className="text-brand-white/70 leading-relaxed">
              Empowering students with knowledge, character, creativity, and confidence to build a better future.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Manka.champa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://youtube.com/@mankapublicschool?si=7I2Mqov-K5_EWzAi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-yellow">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Vision & Mission', href: '/vision-mission' },
                { name: 'Careers', href: '/careers' },
                { name: 'Gallery', href: '/gallery' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-brand-white/70 hover:text-brand-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-yellow">Academics</h3>
            <ul className="space-y-4">
              {[
                { name: 'Pre Primary', href: '/academics/pre-primary' },
                { name: 'Primary', href: '/academics/primary' },
                { name: 'Middle School', href: '/academics/middle-school' },
                { name: 'Secondary', href: '/academics/secondary' },
                { name: 'Senior Secondary', href: '/academics/senior-secondary' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-brand-white/70 hover:text-brand-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-yellow">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.app.goo.gl/jKrTcZmQikGgLvERA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex gap-3 text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  <MapPin className="w-5 h-5 shrink-0 text-brand-yellow" />
                  <span>Manka Public School,<br />Champa, Chhattisgarh</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919981672985" 
                  className="flex gap-3 text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0 text-brand-yellow" />
                  <span>+91 99816 72985</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:mpscph2008@gmail.com" 
                  className="flex gap-3 text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0 text-brand-yellow" />
                  <span>mpscph2008@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-white/50">
          <p>&copy; {new Date().getFullYear()} Manka Public School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-brand-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
