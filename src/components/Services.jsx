import React, { useEffect } from "react";
import {
  Monitor,
  Smartphone,
  Cloud,
  Shield,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
        AOS.init({
          duration: 1000,      
        });
      }, []);
  const services = [
    {
      title: "Enterprise Solutions",
      description:
        "Custom enterprise platforms built with cutting-edge technologies.",
      icon: Monitor,
      gradient: "from-violet-600 to-indigo-600",
      features: ["Cloud Integration", "Scalable Architecture", "24/7 Support"],
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform apps that deliver exceptional experiences.",
      icon: Smartphone,
      gradient: "from-indigo-600 to-blue-600",
      features: ["Native Performance", "Cross-Platform", "Offline Support"],
    },
    {
      title: "Cloud Services",
      description:
        "Scalable cloud infrastructure solutions optimized for performance.",
      icon: Cloud,
      gradient: "from-blue-600 to-sky-600",
      features: ["Auto-scaling", "Load Balancing", "Monitoring"],
    },
    {
      title: "Cyber Security",
      description: "Advanced security measures to protect your digital assets.",
      icon: Shield,
      gradient: "from-sky-600 to-cyan-600",
      features: ["Threat Detection", "Regular Audits", "Compliance"],
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Our Services</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Complete Solutions for
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Success
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Transform your business with our comprehensive suite of digital
            services, carefully crafted to drive innovation and sustainable
            growth.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-down"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative space-y-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon size={28} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2 text-violet-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-100">
                  <button className="group inline-flex items-center text-sm font-medium text-slate-900 hover:text-violet-600 transition-colors">
                    Learn more
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center">
          <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-900 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10" />

            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Ready to Transform Your Business?
              </h3>
              <p className="text-slate-400">
                Get started with our expert team today
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-medium hover:shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-0.5">
                  Start Your Project
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-slate-700 text-white font-medium hover:bg-slate-800 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
