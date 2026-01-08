function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px',
      borderTop: '1px solid #555'
    },
    text: {
      margin: '5px 0',
      fontSize: '14px'
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 MyCompany. All rights reserved.</p>
      <p style={styles.text}>Contact: info@mycompany.com | Phone: (555) 123-4567</p>
    </footer>
  );
}

export default Footer;
