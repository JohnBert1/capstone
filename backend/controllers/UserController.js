const User = require('../models/User');
const { generateToken } = require('../middlewares/AuthMiddleware');

exports.createUser = async (req, res) => {
    try{
        const {email, password, role, status} = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const user = await User.create({
            email,
            password,
            role: role || 'member',
            status: status || 'active'
        })

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user.user_id,
                email: user.email,
                role: user.role,
                status: user.status,
                token: generateToken(user)
            }
        })

    }catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, message: 'Failed to create user', error: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        if(user.status !== 'active') {
            return res.status(403).json({ success: false, message: 'User is not active' });
        }

        const isPasswordMatch = await user.comparePassword(password);

        if (!isPasswordMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        user.lastLogin = new Date();
        await user.save();

        res.status(200).json({
            user_id: user.user_id,
            email: user.email,
            role: user.role,
            status: user.status,
            token: generateToken(user)
        })

    }catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ success: false, message: 'Failed to log in user', error: error.message });
    }
}