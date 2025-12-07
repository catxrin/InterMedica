import User from '../db/models/User.js';

export const register = async data => {
  const existingUser = await User.findOne({ email: data.email });

  if (existingUser) throw new Error('This user already exists!');

  const user = await User.create(data);
  return user._id;
};

export const login = async data => {
  const user = await User.findOne({ email: data.email });
  if (!user) throw new Error('Wrong credentials!');

  const correctPassword = await bcrypt.compare(data.password, user.password);

  if (!correctPassword) throw new Error('Wrong credentials!');

  return user._id;
};
