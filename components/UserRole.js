'use client';
import { useState } from 'react';

export default function UserRole() {
  const [role, setRole] = useState('user');
  
  const unusedVariable = 'This will trigger ESLint warning';
  
  return (
    <div style={{ 
      padding: '10px', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '5px',
      marginTop: '20px'
    }}>
      <strong>Current Role:</strong> {role}
      {role === 'admin' && <span style={{ color: 'red' }}> (Admin Access)</span>}
      <div style={{ fontSize: '12px', marginTop: '5px', color: '#666' }}>
        💡 Try changing the role in DevTools: <code>setRole(&apos;admin&apos;)</code>
      </div>
    </div>
  );
}
