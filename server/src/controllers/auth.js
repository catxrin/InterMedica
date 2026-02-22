import User from '../db/models/User.js';

import { generateToken } from '../helpers.js';
import { registerValidation } from '../../../shared/validations.js';



const register =  async (req, res, next) => {
  const validation = registerValidation.validate(req.body);

  if (validation !== undefined) return res.status(422).json({message:validation})

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(409).json({message:"User already exists"})


    const user = await User.create(req.body);
    const token = await generateToken(user._id);

    res.cookie("auth", token).json({ id: user._id });
  } catch (err) {
    next(err);
  }
};

// const login = async (req, res) => {
//   try {
//     const userId = await loginUser(req.body);
//     const token = await generateToken(userId);

//     res.cookie('auth', token).json({ id: userId });
//   } catch (error) {
//     res.status(403).json({ message: error.message });
//   }
// };

export default {
  register,
  // login,
};
