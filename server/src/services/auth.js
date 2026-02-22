// import User from '../db/models/User.js';
// import createError from "http-errors"

// export const register = async data => {
//   const existingUser = await User.findOne({ email: data.email });

//   if (existingUser) {
//      throw createError(409, "This user already exists!")
//   }

//   try {
//     const user = await User.create(data);
//     return user._id;
//   } catch (error) {
//     throw createError(500, "Failed to create user");
//   }

// };

// export const login = async data => {
//   const user = await User.findOne({ email: data.email });
//   if (!user) throw new Error('Wrong credentials!');

//   const correctPassword = await bcrypt.compare(data.password, user.password);

//   if (!correctPassword) throw new Error('Wrong credentials!');

//   return user._id;
// };
