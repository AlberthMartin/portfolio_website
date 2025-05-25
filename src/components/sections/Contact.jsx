import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-4xl font-semibold mb-12 text-center">Contact</h2>

        <div className="relative">
          {/* Glow behind the card */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-300 blur-xl opacity-30 animate-pulse z-0" />

          {/* Contact card */}
          <div className="relative z-10 bg-black p-8 rounded-xl border border-white/10 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[#F1F5F9]">
                <Phone className="text-indigo-400" />
                <a href="tel:+358401915419" className="underline hover:text-indigo-300 transition">
                  +358 40 191 5419
                </a>
              </div>

              <div className="flex items-center gap-4 text-[#F1F5F9]">
                <Mail className="text-indigo-400" />
                <a href="mailto:alberth.martin01@gmail.com" className="underline hover:text-indigo-300 transition">
                  alberth.martin01@gmail.com
                </a>
              </div>

              
              <div className="flex items-center gap-4 text-[#F1F5F9]">
                <MapPin className="text-indigo-400" />
                <span>Turku, Finland</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
