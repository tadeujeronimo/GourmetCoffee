import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <p> © {currentYear} Gourmet Coffee. Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
