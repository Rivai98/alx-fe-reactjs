import { Link } from 'react-router-dom';

function Navbar() {
  const styles = {
    nav: {
      backgroundColor: '#333',
      padding: '15px 20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      color: '#667eea',
      fontSize: '24px',
      fontWeight: 'bold',
      textDecoration: 'none'
    },
    links: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none',
      margin: '0',
      padding: '0'
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'color 0.3s ease'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          MyCompany
        </Link>
        <ul style={styles.links}>
          <li>
            <Link 
              to="/" 
              style={styles.link}
              onMouseEnter={(e) => e.target.style.color = '#667eea'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              style={styles.link}
              onMouseEnter={(e) => e.target.style.color = '#667eea'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              style={styles.link}
              onMouseEnter={(e) => e.target.style.color = '#667eea'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              style={styles.link}
              onMouseEnter={(e) => e.target.style.color = '#667eea'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
