import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gold py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-12" src="/path/to/logo.svg" alt="Logo" />
          </div>
          {/* Droits d'auteur */}
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Filéor. Tous droits réservés.</p>
          {/* Réseaux sociaux */}
          <div className="flex space-x-4">
            <a href="lien_vers_facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <img src="/assets/facebook.png" alt="Facebook" className="h-10 w-24" />
            </a>
            <a href="https://www.instagram.com/bracelet_bykika/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <img src="/assets/insta.png" alt="Instagram" className="h-10 w-24"/>
            </a>
            <a href="lien_vers_tiktok" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <img src="/assets/tiktok.png" alt="TikTok" className="h-10 w-24" />
            </a>
            <a href="lien_vers_youtube" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <img src="/assets/youtube.png" alt="YouTube" className="h-10 w-24" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
