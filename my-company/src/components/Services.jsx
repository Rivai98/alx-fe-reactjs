function Services() {
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
      marginBottom: '30px'
    },
    list: {
      listStyle: 'none',
      padding: '0'
    },
    listItem: {
      backgroundColor: '#f0f0f0',
      padding: '20px',
      margin: '15px 0',
      borderRadius: '8px',
      fontSize: '18px',
      color: '#333',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }
  };

  const services = [
    'Technology Consulting',
    'Market Analysis',
    'Product Development',
    'Strategic Planning',
    'Business Process Optimization',
    'Digital Transformation'
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <ul style={styles.list}>
        {services.map((service, index) => (
          <li 
            key={index} 
            style={styles.listItem}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            ✓ {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
