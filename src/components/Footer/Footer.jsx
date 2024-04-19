import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 CoderShop. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    position: 'relative', // Cambiado de 'fixed' a 'relative'
    width: '100%',
    backgroundColor: 'rgb(107, 206, 245)',
    color: 'rgb(0, 0, 0)',
    padding: '10px',
    textAlign: 'center',
  },
};

export default Footer;
