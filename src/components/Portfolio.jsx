import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import LazyImage from "./LazyImage";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "Mobile", "Cloud"];

  const projects = [
    {
      title: "Enterprise E-commerce",
      description: "AI-powered shopping platform with real-time analytics",
      image: "/src/assets/logoEcommerce.jpg",
      category: "Web",
      technologies: ["React", "Node.js", "AWS"],
      metrics: [
        { label: "Conversion", value: "+45%" },
        { label: "Performance", value: "99.9%" },
      ],
    },
    {
      title: "FinTech Mobile App",
      description: "Next-gen banking with biometric authentication",
      image: "/src/assets/logoMobile.jpg",
      category: "Mobile",
      technologies: ["React Native", "Firebase"],
      metrics: [
        { label: "App Rating", value: "4.9" },
        { label: "Daily Users", value: "50K+" },
      ],
    },
    {
      title: "Cloud Migration",
      description: "Large-scale infrastructure transformation",
      image: "/src/assets/logoCloud.png",
      category: "Cloud",
      technologies: ["AWS", "Kubernetes"],
      metrics: [
        { label: "Cost Saving", value: "60%" },
        { label: "Uptime", value: "99.99%" },
      ],
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
            <span className="text-sm font-medium">Our Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Showcase of Our
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Transform your business with our comprehensive suite of digital
            solutions, carefully crafted to drive innovation and sustainable
            growth.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3" data-aos="zoom-in">
          {projects
            .filter(
              (project) =>
                activeFilter === "All" || project.category === activeFilter
            )
            .map((project) => (
              <div
                key={project.title}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-white">
                            <div className="text-sm opacity-75">
                              {metric.label}
                            </div>
                            <div className="text-lg font-bold">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 text-sm text-gray-600"
                      >
                        <Code size={14} />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium group">
                    View Details
                    <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
