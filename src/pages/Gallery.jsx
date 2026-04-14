import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Fingerprint, Scan, Shield, Cpu } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80", title: "Biometric Scanning" },
    { id: 2, src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80", title: "Digital Security" },
    { id: 3, src: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80", title: "AI Research" },
    { id: 4, src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80", title: "Server Infrastructure" },
    { id: 5, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80", title: "Microchip Analysis" },
    { id: 6, src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80", title: "Data Encryption" },
    { id: 7, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80", title: "Tech Innovation" },
    { id: 8, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80", title: "Cyber Security" },
    { id: 9, src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80", title: "Global Network" },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Technology <span className="italic font-serif text-brand-500">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
            Visualizing the intersection of biometric science and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer group border shadow-lg"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                  <Scan className="text-white w-6 h-6" />
                </div>
                <p className="text-white font-bold text-xl tracking-tight uppercase">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-brand-950/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              layoutId={`image-${selectedImage.id}`}
              className="max-w-5xl w-full bg-background rounded-[2.5rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1">{selectedImage.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium">Biometric Research Division</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900 rounded-xl flex items-center justify-center text-brand-500">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900 rounded-xl flex items-center justify-center text-brand-500">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
