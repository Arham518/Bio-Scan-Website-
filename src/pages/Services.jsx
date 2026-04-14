import { motion } from 'motion/react';
import { Layout, Code, Cloud, Cpu, Smartphone, Search } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning interfaces that engage users and drive results."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Building robust, scalable, and high-performance web applications using modern frameworks."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Optimizing your infrastructure with secure and scalable cloud-native architectures."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      description: "Leveraging artificial intelligence to automate processes and provide intelligent insights."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Developing seamless cross-platform mobile experiences for iOS and Android."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Crafting data-driven strategies to help your brand stand out in a crowded market."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="italic font-serif text-brand-500">Services</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your unique business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-background border shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-900 dark:text-brand-100 mb-6 group-hover:bg-brand-900 group-hover:text-white dark:group-hover:bg-brand-100 dark:group-hover:text-brand-900 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
