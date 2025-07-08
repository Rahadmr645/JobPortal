import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p className="mb-0">
          Made with ❤️ by <a href="https://yourwebsite.com" className="text-info">YourName</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;