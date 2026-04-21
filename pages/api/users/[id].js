const mockUsers = {
  '1': {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    role: 'admin',
    ssn: '123-45-6789',
    creditCard: '4532-1234-5678-9010',
    salary: '$150,000',
    address: '123 Admin Street, Seattle, WA 98101'
  },
  '2': {
    id: '2',
    username: 'john_doe',
    email: 'john@example.com',
    role: 'user',
    ssn: '987-65-4321',
    creditCard: '5425-2334-3010-9876',
    salary: '$75,000',
    address: '456 User Avenue, Portland, OR 97201'
  },
  '3': {
    id: '3',
    username: 'jane_smith',
    email: 'jane@example.com',
    role: 'user',
    ssn: '555-12-3456',
    creditCard: '3782-822463-10005',
    salary: '$85,000',
    address: '789 Customer Lane, San Francisco, CA 94102'
  }
};

export default function handler(req, res) {
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {

    const { id: userId } = req.query;

    const userData = mockUsers[userId];

    if (!userData) {
      return res.status(404).json({ 
        error: 'User not found',
        message: `No user exists with ID: ${userId}`,
        availableIds: Object.keys(mockUsers),
        hint: 'Try IDs 1, 2, or 3 to see other users\' data'
      });
    }

    return res.status(200).json({
      success: true,
      data: userData,
      meta: {
        requestedBy: 'anonymous',
        timestamp: new Date().toISOString(),
        serverInfo: 'Next.js API Route',
        vulnerability: 'IDOR - Insecure Direct Object Reference'
      }
    });

  } catch (error) {
    return res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message,
      stack: error.stack,
      type: error.constructor.name,
      details: {
        file: 'pages/api/users/[id].js',
        timestamp: new Date().toISOString(),
        nodeVersion: process.version,
        platform: process.platform
      },
      hint: 'Full error details exposed - useful for reconnaissance!'
    });
  }
}