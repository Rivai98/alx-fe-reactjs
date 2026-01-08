function Home() {
  const styles = {
    container: {
      padding: '40px 20px',
      textAlign: 'center',
      minHeight: 'calc(100vh - 200px)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    heading: {
      fontSize: '48px',
      marginBottom: '20px',
      fontWeight: 'bold'
    },
    paragraph: {
      fontSize: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Company</h1>
      <p style={styles.paragraph}>
        We are dedicated to delivering excellence in all our services. 
        With over 30 years of experience, we provide innovative solutions 
        tailored to your business needs.
      </p>
    </div>
  );
}

export default Home;
