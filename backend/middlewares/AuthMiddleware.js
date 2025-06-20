const jwt = require('jsonwebtoken');
const User  = require('../models/User');

exports.generateToken = (user) => {
    return jwt.sign(
       {
        id: user.user_id,
        email: user.email,
        role: user.role
       },
       process.env.JWT_SECRET || 'default_jwt_secret',
       {
        expiresIn: '24h' 
       }
    )
}

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'default_jwt_secret');
  } catch (error) {
    throw new Error('Invalid token');
  }
};

exports.protect = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if(!token) {
            return res.status(401).json({ message: 'Unauthorized' });   
        }

        const decoded = this.verifyToken(token);

        const user = await User.findByPk(decoded.id);

        if(!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (user.status !== 'active') {
            return res.status(403).json({ message: 'User is not active' });
        }

        req.user = user;
        next();
 
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

exports.authorize = (...roles) => {
   return (req, res, next) => {
    if (!req.user) {
        return res.status(403).json({ message: 'Authentication required' });
    }

    if(!roles.includes(res.user.role)) {
        return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }

    next();
   }
}