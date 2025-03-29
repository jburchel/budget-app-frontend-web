const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Budget Envelope App</h3>
            <p className="text-gray-400 mt-1">Take control of your finances</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {currentYear} Budget App Team. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              {' | '}
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;