import UserRole from '../components/UserRole';

export default function Home() {
  return (
    <main style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        backgroundColor: '#fff3cd', 
        border: '2px solid #ffc107',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#856404' }}>
          ⚠️ WARNING: INTENTIONALLY VULNERABLE APPLICATION ⚠️
        </h2>
        <p style={{ margin: '0', color: '#856404' }}>
          This application contains <strong>deliberate security vulnerabilities</strong> for educational purposes only. 
          DO NOT deploy to production or expose to the internet. Use only in isolated local development environments 
          for security training and awareness.
        </p>
      </div>

      <h1 style={{ marginBottom: '10px' }}>Vulnerable Next.js Demo Application</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
        An educational demonstration of OWASP Top 10 vulnerabilities and common security misconfigurations.
      </p>

      <div style={{ marginBottom: '30px' }}>
        <h2>Explore Vulnerabilities:</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <a 
                href="/admin" 
                style={{ 
                  color: '#0070f3', 
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                🔓 Admin Dashboard
              </a>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                Demonstrates <strong>A01:2025 Broken Access Control</strong> - accessible without authentication
              </p>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <a 
                href="/api/users/1" 
                style={{ 
                  color: '#0070f3', 
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                👤 User API Demo
              </a>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                Demonstrates <strong>Insecure Direct Object Reference (IDOR)</strong> - access any user's data
              </p>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h2>Client-Side Security Control:</h2>
        <UserRole />
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          This role check is client-side only and can be manipulated in browser DevTools.
        </p>
      </div>

      <div style={{ 
        marginTop: '40px', 
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h3>Learning Objectives:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>A01:2025 Broken Access Control:</strong> Missing authentication and authorization checks</li>
          <li><strong>A02:2025 Security Misconfiguration:</strong> Missing security headers, exposed secrets</li>
          <li><strong>A03:2025 Software Supply Chain Failures:</strong> Vulnerable dependencies with known CVEs</li>
          <li><strong>Code Quality Issues:</strong> ESLint violations and poor coding practices</li>
        </ul>
        <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
          Run <code style={{ backgroundColor: '#e9ecef', padding: '2px 6px', borderRadius: '3px' }}>npm audit</code> to see vulnerable dependencies.
          <br />
          Run <code style={{ backgroundColor: '#e9ecef', padding: '2px 6px', borderRadius: '3px' }}>npm run lint</code> to see code quality issues.
        </p>
      </div>
    </main>
  );
}
