const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from the request header
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;  // Store user info in the request object
    next();  // Pass control to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
