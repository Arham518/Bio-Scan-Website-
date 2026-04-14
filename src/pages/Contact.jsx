import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. Our biometric security team will contact you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Connect with <span className="italic font-serif text-brand-500">Experts</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
            Inquire about our AI enhancement systems or request a technical consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Contact Details</h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Our research facility is located in Mithi. We are available for global collaborations and enterprise integrations.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-900 dark:text-brand-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">Email Support</h4>
                  <p className="text-muted-foreground font-medium">mr.arham710@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-900 dark:text-brand-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">Direct Line</h4>
                  <p className="text-muted-foreground font-medium">+923103323518</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-900 dark:text-brand-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">Location</h4>
                  <p className="text-muted-foreground font-medium">Mithi, Sindh, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-brand-500" />
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                All communications are encrypted and secure.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-12 rounded-[2.5rem] border shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/50 border rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-500 focus:bg-background transition-all peer placeholder-transparent"
                  placeholder="Name"
                />
                <label className="absolute left-6 top-4 text-muted-foreground transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-500 peer-focus:bg-background peer-focus:px-2 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2">
                  Full Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/50 border rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-500 focus:bg-background transition-all peer placeholder-transparent"
                  placeholder="Email"
                />
                <label className="absolute left-6 top-4 text-muted-foreground transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-500 peer-focus:bg-background peer-focus:px-2 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-muted/50 border rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-500 focus:bg-background transition-all peer placeholder-transparent resize-none"
                  placeholder="Message"
                ></textarea>
                <label className="absolute left-6 top-4 text-muted-foreground transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-500 peer-focus:bg-background peer-focus:px-2 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-900 dark:bg-brand-100 text-white dark:text-brand-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
