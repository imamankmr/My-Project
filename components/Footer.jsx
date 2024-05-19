// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
            <p className="text-gray-400">Hotel.com is part of Hotel inc., the world leader in online travel and related services.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <p className="text-gray-400">amanjnvr@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Instagram</a></li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
          <p className="text-sm text-gray-400">Crafted with <span className="text-red-500">&hearts;</span> by our Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
