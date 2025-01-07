import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["123 Innovation Street", "Tech Valley, TV 12345"],
      ariaLabel: "Office Location",
    },
    {
      icon: Phone,
      title: "Contact Details",
      details: ["Phone: (123) 456-7890", "Email: hello@company.com"],
      ariaLabel: "Contact Information",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekends: By appointment"],
      ariaLabel: "Business Hours",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  const StatusMessage = ({ status }) => {
    if (!status) return null;

    const configs = {
      success: {
        icon: CheckCircle2,
        text: "Thank you for your message! We'll get back to you soon.",
        className: "bg-green-50 border-green-200 text-green-800",
      },
      error: {
        icon: XCircle,
        text: "There was an error sending your message. Please try again.",
        className: "bg-red-50 border-red-200 text-red-800",
      },
    };

    const config = configs[status];
    const Icon = config.icon;

    return (
      <div
        className={`flex items-center p-4 mb-6 border rounded-lg ${config.className}`}
      >
        <Icon className="w-5 h-5 mr-2 flex-shrink-0" />
        <p className="text-sm">{config.text}</p>
      </div>
    );
  };

  return (
    <section
      className="relative py-20 sm:py-24 bg-white"
      aria-label="Contact Us Section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-50/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-full flex flex-col justify-between">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
              id="contact-form-title"
            >
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-4">
              Let's discuss how we can help transform your business
            </p>

            <StatusMessage status={submitStatus} />

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-labelledby="contact-form-title"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200 resize-y min-h-[100px]"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:pl-8 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Let's Build Something
                  <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Amazing Together
                  </span>
                </h2>
                <p className="text-lg text-slate-600 mt-4">
                  Whether you have a question about our services, need a custom
                  solution, or just want to say hello, we'd love to hear from
                  you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="group relative bg-slate-50 rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                    aria-label={item.ariaLabel}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    <div className="relative flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md">
                          <item.icon size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <div className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-slate-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Our Location
          </h2>
          <iframe
            data-aos="fade-down"
            title="Google Maps"
            className="w-full rounded-lg border-0"
            style={{ height: "400px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.053081566976!2d106.61572261135096!3d-6.2567379937056335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sMultimedia%20Nusantara%20University!5e0!3m2!1sen!2sid!4v1736244011380!5m2!1sen!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
