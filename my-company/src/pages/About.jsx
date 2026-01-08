function About() {
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)'
    },
    heading: {
      fontSize: '42px',
      color: '#333',
      marginBottom: '20px'
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#666',
      marginBottom: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Our company has been providing top-notch services since 1990. 
        We specialize in various fields including technology, marketing, and consultancy.
      </p>
      <p style={styles.paragraph}>
        Our mission is to empower businesses with innovative solutions and strategic guidance. 
        We are committed to understanding our clients' unique needs and delivering results 
        that exceed expectations.
      </p>
      <p style={styles.paragraph}>
        With a team of experienced professionals and a passion for excellence, 
        we have successfully served hundreds of clients worldwide. 
        Our track record speaks for itself.
      </p>
    </div>
  );
}

export default About;
