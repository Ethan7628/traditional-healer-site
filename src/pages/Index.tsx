
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, Menu, X, MessageCircle } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const message = "Hello Dr. Kibuka, I would like to schedule a consultation for traditional healing services. Please let me know your availability.";
    const phoneNumber = "256701234567"; // Replace with actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const services = [
    {
      title: "Herbal Medicine",
      description: "Natural remedies using traditional herbs and plants for various ailments and health conditions.",
      icon: "🌿"
    },
    {
      title: "Spiritual Cleansing",
      description: "Removal of negative energies, spiritual blockages, and protection rituals for spiritual wellness.",
      icon: "✨"
    },
    {
      title: "Love & Relationship",
      description: "Traditional solutions for relationship problems, marriage issues, and matters of the heart.",
      icon: "💕"
    },
    {
      title: "Business Success",
      description: "Spiritual guidance and rituals to attract prosperity, success, and good fortune in business.",
      icon: "📈"
    },
    {
      title: "Ancestral Guidance",
      description: "Communication with ancestors for guidance, wisdom, and spiritual direction in life decisions.",
      icon: "🙏"
    },
    {
      title: "Health & Wellness",
      description: "Traditional healing methods for physical, mental, and emotional health restoration.",
      icon: "⚕️"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Dr. Kibuka's herbal remedies completely transformed my health. I'm forever grateful for his wisdom and care.",
      rating: 5
    },
    {
      name: "James K.",
      text: "After years of struggle, Dr. Kibuka's spiritual guidance brought peace and success to my business.",
      rating: 5
    },
    {
      name: "Mary A.",
      text: "His traditional healing methods helped save my marriage. Dr. Kibuka is truly gifted and authentic.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-amber-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-100">Dr. Kibuka</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-amber-100 hover:text-amber-300 transition-colors capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-amber-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-amber-700">
              <div className="flex flex-col space-y-2 mt-4">
                {['home', 'about', 'services', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-amber-100 hover:text-amber-300 transition-colors capitalize font-medium py-2 text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="text-8xl mb-6">🌿</div>
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
              Dr. Kibuka
            </h1>
            <h2 className="text-2xl md:text-3xl text-amber-800 mb-8 font-semibold">
              Traditional Healer & Spiritual Guide
            </h2>
            <p className="text-lg md:text-xl text-amber-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Welcome to authentic traditional healing with over 30 years of ancestral wisdom. 
              Experience the power of ancient remedies combined with spiritual guidance for complete wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-amber-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Consultation
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">About Dr. Kibuka</h2>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                With over three decades of experience in traditional healing, Dr. Kibuka comes from a long lineage 
                of respected healers and spiritual guides. Born with the gift of connecting with ancestral spirits 
                and understanding the healing properties of nature's remedies.
              </p>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                His mission is to bridge ancient wisdom with modern understanding, providing authentic healing 
                solutions that address not just physical ailments, but spiritual and emotional well-being too.
              </p>
              <div className="flex items-center space-x-4 text-amber-700">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold">30+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  <span className="font-semibold">1000+ Satisfied Clients</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center text-8xl animate-scale-in shadow-xl">
                👨‍⚕️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Traditional Healing Services</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Comprehensive traditional healing services rooted in ancestral wisdom and natural remedies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-amber-600"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{service.title}</h3>
                <p className="text-amber-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-amber-700">Real testimonials from people who have experienced healing</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-amber-800 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-amber-900 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-amber-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-amber-100">Ready to begin your healing journey? Contact Dr. Kibuka today</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-amber-300" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+256701234567" className="text-amber-100 hover:text-amber-300 transition-colors">
                +256 701 234 567
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-amber-300" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:drkibuka@healing.com" className="text-amber-100 hover:text-amber-300 transition-colors">
                drkibuka@healing.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-300" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-amber-100">Kampala, Uganda</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={generateWhatsAppMessage}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={generateWhatsAppMessage}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Dr. Kibuka Traditional Healer. All rights reserved.</p>
          <p className="mt-2 text-sm text-amber-300">Ancient Wisdom • Modern Healing • Authentic Results</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
