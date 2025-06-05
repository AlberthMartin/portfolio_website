import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="border-t border-slate-700 py-20 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-12 text-center text-white">Contact</h2>

        <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
          {/* Phone Section */}
          <div className="flex-1 bg-black p-6 rounded-xl border border-white/10 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition text-center">
            <Phone className="text-indigo-400 mx-auto mb-2" size={32} />
            <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
            <a href="tel:+358401915419" className="text-indigo-300 underline hover:text-indigo-400 transition">
              +358 40 191 5419
            </a>
          </div>

          {/* Email Section */}
          <div className="flex-1 bg-black p-6 rounded-xl border border-white/10 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition text-center">
            <Mail className="text-indigo-400 mx-auto mb-2" size={32} />
            <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
            <a href="mailto:alberth.martin01@gmail.com" className="text-indigo-300 underline hover:text-indigo-400 transition break-words">
              alberth.martin01@gmail.com
            </a>
          </div>

          {/* Location Section */}
          <div className="flex-1 bg-black p-6 rounded-xl border border-white/10 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition text-center">
            <MapPin className="text-indigo-400 mx-auto mb-2" size={32} />
            <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
            <p className="text-gray-300">Turku, Finland</p>
          </div>
        </div>
      </div>
    </section>
  );
};
