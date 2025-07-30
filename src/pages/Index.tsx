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
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const message = "Hello Spiritual Healer Papa Shonga, I would like to schedule a consultation for traditional healing services. Please let me know your availability.";
    const phoneNumber = "256701234567"; // Replace with actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const services = [{
    title: "Love Spells & Binding",
    description: "Powerful love spells to bring back lost lovers, strengthen relationships, and create lasting romantic bonds.",
    image: "/lovable-uploads/dcce88fc-064c-4893-8f81-0bfb647fee8f.png"
  }, {
    title: "Money & Wealth Spells", 
    description: "Traditional rituals to attract financial prosperity, business success, and remove money blockages.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
  }, {
    title: "Protection & Cleansing",
    description: "Spiritual protection from enemies, evil eyes, witchcraft, and negative energies affecting your life.",
    image: "/lovable-uploads/fd8806e4-00e4-49bd-8998-6dd56c240ff6.png"
  }, {
    title: "Court Case Spells",
    description: "Legal assistance through traditional methods to win court cases and overcome legal challenges.",
    image: "/lovable-uploads/b2f5b4ec-d3ee-4497-85ae-11cab40f3dbc.png"
  }, {
    title: "Marriage & Divorce",
    description: "Traditional solutions for marriage problems, divorce prevention, and relationship healing.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop"
  }, {
    title: "Fertility & Pregnancy",
    description: "Traditional remedies for fertility issues, safe pregnancy, and childbirth complications.",
    image: "/lovable-uploads/62817db7-efc1-4648-ab15-d3a0880024bd.png"
  }, {
    title: "Business & Career",
    description: "Spells for job promotion, business growth, customer attraction, and career advancement.",
    image: "/lovable-uploads/c12a2f93-b9de-4ec8-9f38-caa7e4ea36ed.png"
  }, {
    title: "Health & Healing",
    description: "Traditional healing for chronic illnesses, mental health issues, and spiritual ailments.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  }, {
    title: "Spiritual Guidance",
    description: "Connect with ancestral spirits for guidance, wisdom, and spiritual direction in life decisions.",
    image: "/lovable-uploads/92d2b722-1fdd-470d-87fa-f6fcc8a8e410.png"
  }, {
    title: "Enemy Protection",
    description: "Strong protection spells against enemies, jealousy, hatred, and those who wish you harm.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop"
  }, {
    title: "Traditional Rituals",
    description: "Authentic African traditional ceremonies and rituals for various spiritual purposes.",
    image: "/lovable-uploads/03a16e47-7a76-4fbc-8a79-b34b5997119d.png"
  }, {
    title: "Spiritual Ceremonies",
    description: "Powerful spiritual ceremonies with traditional herbs, candles, and ancestral guidance.",
    image: "/lovable-uploads/e2aa1c75-3178-4d18-a71b-668583da6665.png"
  }];

  const testimonials = [{
    name: "Sarah M.",
    text: "Papa Shonga's love spells brought my husband back after 3 years of separation. I'm forever grateful for his powerful work.",
    rating: 5
  }, {
    name: "James K.",
    text: "After years of financial struggle, his money spells transformed my business. I now have more wealth than ever.",
    rating: 5
  }, {
    name: "Mary A.",
    text: "His protection spells saved me from enemies who wanted to destroy my life. Papa Shonga is truly gifted.",
    rating: 5
  }, {
    name: "David R.",
    text: "Won my court case against all odds thanks to his powerful legal spells. Highly recommend his services.",
    rating: 5
  }, {
    name: "Grace L.",
    text: "After 10 years of trying, his fertility spells blessed me with twins. Papa Shonga works miracles.",
    rating: 5
  }, {
    name: "Peter M.",
    text: "His business spells increased my customers by 300%. My shop is now the most successful in town.",
    rating: 5
  }];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-amber-900/95 backdrop-blur-md shadow-lg' : 'bg-amber-900/90 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-orange-400 rounded-lg flex items-center justify-center shadow-lg border-2 border-amber-200">
                  <span className="text-amber-900 font-bold text-xl">P.S</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-amber-100 leading-tight">Papa Shonga</h1>
                <p className="text-amber-300 text-xs font-medium">Spiritual Healer</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-amber-100">P.S</h1>
                <p className="text-amber-300 text-xs">Spiritual Healer</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'testimonials', 'contact'].map(item => (
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
                {['home', 'about', 'services', 'testimonials', 'contact'].map(item => (
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-40 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-orange-900/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in bg-black/60 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center text-6xl mx-auto mb-6">
              👨‍⚕️
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-amber-100 mb-4 leading-tight">
              Spiritual Healer Papa Shonga
            </h1>
            <h2 className="text-xl md:text-2xl text-amber-200 mb-6 font-semibold">
              Powerful Traditional Healer & Spiritual Guide
            </h2>
            <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to authentic spiritual healing with over 30 years of ancestral wisdom. 
              Experience the power of ancient African traditions combined with powerful spells for love, money, protection, and success.
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
                className="border-2 border-amber-200 text-amber-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-200 hover:text-amber-900 transition-all duration-300 hover:scale-105"
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
              <h2 className="text-4xl font-bold text-amber-900 mb-6">About Spiritual Healer Papa Shonga</h2>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                With over three decades of experience in traditional African healing and spiritual guidance, 
                Papa Shonga comes from a long lineage of respected healers and spiritual practitioners. 
                Born with the gift of connecting with ancestral spirits and understanding the powerful forces of nature.
              </p>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                His mission is to help people overcome life's challenges through powerful traditional spells, 
                spiritual cleansing, and ancestral guidance. Whether you need love spells, money spells, 
                protection, or healing, Papa Shonga provides authentic solutions that deliver real results.
              </p>
              <div className="flex flex-wrap gap-4 text-amber-700">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold">30+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  <span className="font-semibold">5000+ Satisfied Clients</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  <span className="font-semibold">Powerful Results Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <img src="/lovable-uploads/99e176a1-39bc-4a0b-b42f-a1434d5223a5.png" alt="Traditional Spiritual Healing Ceremony" className="rounded-xl shadow-2xl w-80 h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Spiritual Healing Services</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Comprehensive spiritual healing services rooted in ancient African traditions and powerful spiritual practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-amber-600">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">{service.title}</h3>
                  <p className="text-amber-700 leading-relaxed">{service.description}</p>
                </div>
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
            <p className="text-lg text-amber-700">Real testimonials from people who have experienced powerful results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
            <p className="text-lg text-amber-100">Ready to transform your life? Contact Spiritual Healer Papa Shonga today</p>
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
              <a href="mailto:papashonga@healing.com" className="text-amber-100 hover:text-amber-300 transition-colors">
                papashonga@healing.com
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
          <p>&copy; 2024 Spiritual Healer Papa Shonga. All rights reserved.</p>
          <p className="mt-2 text-sm text-amber-300">Ancient Wisdom • Powerful Spells • Guaranteed Results</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
