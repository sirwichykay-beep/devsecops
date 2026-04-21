export default function AdminDashboard() {

  const exposedSecrets = {
    apiKey: 'sk_live_50123456789',
    databaseUrl: 'mongodb://admin:password123@localhost:27017/production',
    jwtSecret: 'super-secret-key-do-not-share',
    adminPassword: 'admin123',
    stripeKey: 'tk_live_501abcdefg',
    awsAccessKey: 'ASDFEXAMPLETOKEN'
  };

  const exposedEnvSecrets = {
    nextPublicApiKey: process.env.NEXT_PUBLIC_API_KEY,
    nextPublicStripeKey: process.env.NEXT_PUBLIC_STRIPE_KEY,
    nextPublicJwtSecret: process.env.NEXT_PUBLIC_JWT_SECRET,
    nextPublicAdminPassword: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
    nextPublicDatabaseUrl: process.env.NEXT_PUBLIC_DATABASE_URL,
    nextPublicAwsAccessKey: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
    nextPublicAwsSecretKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY
  };

  const sensitiveData = {
    totalUsers: 15234,
    revenue: '$1,234,567.89',
    activeSubscriptions: 8432,
    pendingPayments: '$45,678.90',
    serverStatus: 'Online',
    lastBackup: '2025-01-15 03:00:00 UTC'
  };

  return (
    <main style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        backgroundColor: '#f8d7da', 
        border: '2px solid #dc3545',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '30px'
      }}>
        <p style={{ margin: '0', color: '#721c24', fontSize: '14px' }}>
          <strong>🔓 VULNERABILITY DEMONSTRATION:</strong> This page is accessible without any authentication!
          Anyone who knows the URL can access this admin dashboard.
        </p>
      </div>

      <h1 style={{ marginBottom: '10px', color: '#dc3545' }}>
        🔐 Admin Dashboard
      </h1>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
        Welcome to the admin control panel. This page should only be accessible to authenticated administrators.
      </p>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Business Metrics</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          {Object.entries(sensitiveData).map(([key, value]) => (
            <div 
              key={key}
              style={{ 
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}
            >
              <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', marginBottom: '5px' }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#212529' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#dc3545' }}>
          ⚠️ Exposed Credentials (CRITICAL VULNERABILITY)
        </h2>
        <div style={{ 
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '15px'
        }}>
          <p style={{ marginTop: '0', fontSize: '14px', color: '#856404' }}>
            <strong>VULNERABILITY:</strong> Sensitive credentials and API keys are hardcoded and exposed in the source code.
            These should be stored in environment variables and NEVER displayed in the UI.
          </p>
          <div style={{ 
            backgroundColor: '#212529',
            color: '#f8f9fa',
            padding: '15px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '13px',
            overflowX: 'auto'
          }}>
            {Object.entries(exposedSecrets).map(([key, value]) => (
              <div key={key} style={{ marginBottom: '8px' }}>
                <span style={{ color: '#6c757d' }}>{key}:</span> <span style={{ color: '#ffc107' }}>"{value}"</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#f8d7da',
          border: '2px solid #dc3545',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <p style={{ marginTop: '0', fontSize: '14px', color: '#721c24' }}>
            <strong>CRITICAL VULNERABILITY:</strong> NEXT_PUBLIC_ prefixed environment variables are embedded in the 
            client-side JavaScript bundle and visible to anyone. Check your browser's DevTools → Sources → 
            _next/static/chunks/ to see these values in plain text!
          </p>
          <div style={{ 
            backgroundColor: '#212529',
            color: '#f8f9fa',
            padding: '15px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '13px',
            overflowX: 'auto'
          }}>
            {Object.entries(exposedEnvSecrets).map(([key, value]) => (
              <div key={key} style={{ marginBottom: '8px' }}>
                <span style={{ color: '#6c757d' }}>{key}:</span> <span style={{ color: '#dc3545' }}>"{value || 'undefined'}"</span>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: '0', marginTop: '15px', fontSize: '13px', color: '#721c24' }}>
            💡 <strong>Try this:</strong> Open DevTools, go to Console, and type: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '3px' }}>process.env</code> 
            to see all NEXT_PUBLIC_ variables exposed!
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Admin Actions</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button style={{ 
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            Delete All Users
          </button>
          <button style={{ 
            padding: '10px 20px',
            backgroundColor: '#ffc107',
            color: '#212529',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            Export Database
          </button>
          <button style={{ 
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            Modify Permissions
          </button>
          <button style={{ 
            padding: '10px 20px',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            View Audit Logs
          </button>
        </div>
        <p style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>
          Note: These buttons are non-functional demos. In a real application, these actions would require 
          authentication, authorization, and audit logging.
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#e7f3ff',
        border: '1px solid #0070f3',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3 style={{ marginTop: '0', color: '#0070f3' }}>How This Vulnerability Works:</h3>
        <ol style={{ lineHeight: '1.8', marginBottom: '15px' }}>
          <li><strong>Direct URL Access:</strong> Anyone can navigate to <code>/admin</code> without logging in</li>
          <li><strong>No Session Validation:</strong> The page doesn't check if a user is authenticated</li>
          <li><strong>No Role Verification:</strong> Even if authenticated, there's no check for admin privileges</li>
          <li><strong>Exposed Secrets:</strong> API keys and credentials are visible in the page source</li>
        </ol>
        
        <h3 style={{ color: '#0070f3' }}>How to Exploit:</h3>
        <ol style={{ lineHeight: '1.8', marginBottom: '15px' }}>
          <li>Simply navigate to <code>http://localhost:3000/admin</code> in your browser</li>
          <li>No login required - instant access to admin dashboard</li>
          <li>View page source to see hardcoded API keys and credentials</li>
          <li>Access sensitive business metrics and admin functionality</li>
        </ol>

        <h3 style={{ color: '#0070f3' }}>How to Fix:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Implement server-side authentication using Next.js middleware or getServerSession()</li>
          <li>Verify user role/permissions before rendering admin content</li>
          <li>Store secrets in environment variables (not NEXT_PUBLIC_ prefixed)</li>
          <li>Never display credentials or API keys in the UI</li>
          <li>Use proper session management with secure cookies</li>
          <li>Implement audit logging for all admin actions</li>
        </ul>
      </div>

      <div>
        <a 
          href="/" 
          style={{ 
            color: '#0070f3', 
            textDecoration: 'none',
            fontSize: '16px'
          }}
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
