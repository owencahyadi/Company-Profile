import React, { useEffect } from "react";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  const stats = [
    { value: "99%", label: "Client Satisfaction" },
    { value: "1500+", label: "Projects Completed" },
    { value: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-slate-900 lg:text-8xl">
              Transform Your
              <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Vision
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Experience the perfect blend of innovation and excellence with our
              cutting-edge solutions designed to elevate your digital presence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-300 transform hover:-translate-y-0.5 group inline-flex items-center">
              Start Your Project
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-slate-700 text-slate-900 font-medium hover:bg-slate-50 transition-all duration-300 group inline-flex items-center">
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="zoom-in"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <p className="text-3xl font-bold text-slate-900">{value}</p>
                  <p className="mt-2 text-sm text-slate-600">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
