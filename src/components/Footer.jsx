import { Link } from 'react-router-dom';
import { Fingerprint, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-50 dark:bg-brand-950 border-t pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-900 dark:bg-brand-100 rounded-lg flex items-center justify-center">
              <Fingerprint className="text-white dark:text-brand-900 w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter">BIO-SCAN</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Advanced AI-driven fingerprint enhancement system. Restoring clarity to degraded biometric data for forensic and security excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-brand-900 dark:hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-900 dark:hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-900 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="text-muted-foreground hover:text-brand-900 dark:hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-brand-900 dark:hover:text-white transition-colors">About Project</Link></li>
            <li><Link to="/gallery" className="text-muted-foreground hover:text-brand-900 dark:hover:text-white transition-colors">Technology Gallery</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-brand-900 dark:hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-500" />
              <span>mr.arham710@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-500" />
              <span>+923103323518</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span>Mithi, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Stay Updated</h4>
          <p className="text-sm text-muted-foreground mb-4">Subscribe for technical updates and research papers.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white dark:bg-brand-900 border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button className="bg-brand-900 dark:bg-brand-100 text-white dark:text-brand-900 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {currentYear} Bio-Scan AI. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-900 dark:hover:text-white transition-colors">Research Ethics</a>
        </div>
      </div>
    </footer>
  );
}
