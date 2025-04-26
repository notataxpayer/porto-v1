import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowUpIcon 
} from '@heroicons/react/24/outline';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaInstagram 
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Dymika
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Freelance web developer specializing in creating modern, responsive websites and web applications.
            </p>
            <div className="flex space-x-4">
              {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-purple-600 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Company Websites', 'Personal Portfolios', 'E-commerce', 'Web Apps', 'Academic Projects'].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <EnvelopeIcon className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  dymikavindranew725@gmail.com
                </a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <PhoneIcon className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +62 812-3456-7890
                </a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <MapPinIcon className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Malang, Indonesia</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-8"
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Freelans. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 bg-purple-600 p-3 rounded-full shadow-lg z-50"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="h-5 w-5 text-white" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;