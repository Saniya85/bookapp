import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (name: string, email: string, password: string, role: string) => {
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("User already exists. Please login instead.");
  }
  const salt=await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  // Ensure `role` is passed while creating user
  const user = await User.create({ name, email, password: hashedPassword, role });

  return generateToken(user._id.toString(), user.role); // Include role in token
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  return generateToken(user._id.toString(), user.role); // Include role in token
};

// Update token generation to store role
const generateToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET as string, { expiresIn: "30d" });
};




