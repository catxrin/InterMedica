import { register as registerUser, login as loginUser } from '../services/auth.js';
import { generateToken } from '../helpers.js';

const register = async (req, res) => {
  try {
    const userId = await registerUser(req.body);
    const token = await generateToken(userId);

    res.cookie('auth', token).json({ id: userId });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const userId = await loginUser(req.body);
    const token = await generateToken(userId);

    res.cookie('auth', token).json({ id: userId });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export default {
  register,
  login,
};
