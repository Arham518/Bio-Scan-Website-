import { motion } from 'motion/react';
import { Target, Shield, Cpu, Users, Database, Zap } from 'lucide-react';

export default function About() {
  const team = [
    { name: "Sharlet Khokhar", role: "Lead Researcher" },
    { name: "Muhammad Arham", role: "AI Engineer" },
    { name: "Muhammad Hashim Khan", role: "System Architect" }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Specialist Models",
      desc: "Targeted enhancement for aged, cut, and wounded fingerprint patterns."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hybrid Architecture",
      desc: "Advanced classifier + fusion system for optimal reconstruction."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Robust Datasets",
      desc: "Trained on FVC, SOCOFing, and NIST for maximum reliability."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Project <span className="italic font-serif text-brand-500">Overview</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
            Advancing biometric security through state-of-the-art AI-driven fingerprint restoration.
          </p>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Degraded fingerprints—whether due to aging, wounds, or environmental factors—pose a significant challenge to Automated Fingerprint Identification Systems (AFIS). Traditional methods often fail to extract reliable minutiae from these low-quality samples.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Our system utilizes a hybrid AI approach, combining specialist deep learning models with a sophisticated fusion system. By classifying the type of degradation first, we apply targeted enhancement techniques that restore ridge clarity and connectivity.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-500/10 rounded-3xl -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
              alt="Technology"
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900"
            >
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-900 dark:text-brand-100 mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-brand-900 dark:bg-brand-100 text-white dark:text-brand-900 rounded-[3rem] p-12 mb-24 text-center">
          <h2 className="text-3xl font-bold mb-8">Core Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {["Deep Learning", "Image Processing", "AFIS Integration", "Neural Networks", "Computer Vision"].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
                <Zap className="w-4 h-4" /> {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Development Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border bg-background hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-brand-900 dark:text-brand-100" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-brand-500 font-bold text-sm uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
