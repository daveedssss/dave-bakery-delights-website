
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bakery-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Dave's Bakery</h3>
            <p className="text-gray-300">
              Handcrafted treats made with love and the finest ingredients.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Our Products</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-2">Email: davesebastienghermino@gmail.com</p>
            <p className="text-gray-300">Phone: 09942553507</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Dave's Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
