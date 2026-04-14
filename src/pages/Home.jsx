import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Shield, Cpu, Zap, ArrowRight, CheckCircle2, Fingerprint, Scan, Image as ImageIcon } from 'lucide-react';
import ThreeDScanner from '../components/ThreeDScanner';
import { cn } from '../lib/utils';

export default function Home() {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/tiff'];
    if (validTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a JPG, PNG, or TIFF image.");
    }
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  const startScanning = () => {
    if (!preview) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("Enhancement Complete! (Demo Simulation)");
    }, 3000);
  };

  const steps = [
    { icon: <Upload />, title: "Upload", desc: "Submit degraded fingerprint image" },
    { icon: <Cpu />, title: "Processing", desc: "AI-based feature extraction" },
    { icon: <Zap />, title: "Enhancement", desc: "Specialist model reconstruction" },
    { icon: <CheckCircle2 />, title: "Result", desc: "High-fidelity biometric output" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/90 dark:bg-brand-950/90 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-900 dark:text-brand-100 text-xs font-bold mb-6 tracking-widest uppercase">
              <Shield className="w-4 h-4" /> Next-Gen Biometrics
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              AI-Powered <br />
              <span className="text-brand-500 italic font-serif">Fingerprint</span> Enhancement
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed font-medium">
              Restore clarity to aged, wounded, or degraded fingerprints using our state-of-the-art hybrid AI models. Precision security for the modern era.
            </p>
            <button 
              onClick={() => document.getElementById('upload-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-900 dark:bg-brand-100 text-white dark:text-brand-900 px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
            >
              Start Scanning <Scan className="w-5 h-5" />
            </button>
          </motion.div>

          <div className="h-[500px] lg:h-[600px] hidden lg:block">
            <ThreeDScanner />
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="py-24 bg-brand-50 dark:bg-brand-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Enhancement Lab</h2>
            <p className="text-muted-foreground font-medium">Upload your biometric data for immediate AI reconstruction.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-[2.5rem] border shadow-2xl relative overflow-hidden"
          >
            <div
              className={cn(
                "relative border-2 border-dashed rounded-[2rem] p-12 transition-all flex flex-col items-center justify-center text-center",
                dragActive ? "border-brand-500 bg-brand-50/50 dark:bg-brand-900/20 scale-[0.99]" : "border-muted-foreground/20",
                preview ? "py-8" : "py-20"
              )}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png,.tiff"
                onChange={(e) => handleFile(e.target.files[0])}
              />

              <AnimatePresence mode="wait">
                {!preview ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Upload className="w-10 h-10 text-brand-900 dark:text-brand-100" />
                    </div>
                    <h3 className="text-xl font-bold">Drop your fingerprint here</h3>
                    <p className="text-muted-foreground text-sm">Supports JPG, PNG, and TIFF formats</p>
                    <button
                      onClick={onButtonClick}
                      className="text-brand-500 font-bold hover:underline mt-4"
                    >
                      or browse files
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6 w-full max-w-xs mx-auto"
                  >
                    <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-brand-500/20 shadow-inner bg-muted">
                      <img src={preview} alt="Preview" className="w-full h-full object-contain" />
                      {isProcessing && (
                        <div className="absolute inset-0 bg-brand-900/40 backdrop-blur-[2px] flex items-center justify-center">
                          <motion.div
                            animate={{ y: [0, 200, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 right-0 h-1 bg-brand-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                          />
                          <span className="text-white font-bold tracking-widest uppercase text-xs">Analyzing...</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setPreview(null)}
                        className="flex-1 py-3 rounded-xl border font-bold text-sm hover:bg-muted transition-colors"
                      >
                        Remove
                      </button>
                      <button
                        onClick={startScanning}
                        disabled={isProcessing}
                        className="flex-2 bg-brand-900 dark:bg-brand-100 text-white dark:text-brand-900 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
                      >
                        {isProcessing ? "Processing..." : "Enhance Image"} <Fingerprint className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">How It Works</h2>
            <p className="text-muted-foreground font-medium">Our multi-stage AI pipeline ensures maximum reconstruction accuracy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-100 dark:bg-brand-900 -translate-y-1/2 z-0"></div>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-background border-4 border-brand-50 dark:border-brand-900 rounded-full flex items-center justify-center text-brand-900 dark:text-brand-100 mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
