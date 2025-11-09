import { Router } from 'express';
import jwt from 'jsonwebtoken';

export const router = Router();

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  fullName?: string;
  birthDate?: string;
};

// In-memory users for demo
const users = new Map<string, User>();
const usersByUsername = new Map<string, User>();

function signToken(userId: string) {
  const secret = process.env.JWT_SECRET || 'dev-secret-change-me';
  return jwt.sign({ sub: userId }, secret, { expiresIn: '7d' });
}

router.post('/register', (req, res) => {
  const { fullName, username, email, password, confirmPassword, birthDate } = req.body ?? {};
  
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'username, email, password, and confirmPassword are required' });
  }
  
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'passwords do not match' });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'invalid email format' });
  }
  
  if (users.has(email) || usersByUsername.has(username)) {
    return res.status(409).json({ error: 'email or username already registered' });
  }
  
  const id = `u_${Date.now()}`;
  const user: User = { id, username, email, password, fullName, birthDate };
  users.set(email, user);
  usersByUsername.set(username, user);
  
  const token = signToken(id);
  res.status(201).json({ 
    user: { id, username, email, fullName, birthDate }, 
    token 
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body ?? {};
  
  if (!username || !password) {
    return res.status(400).json({ error: 'username and password are required' });
  }
  
  // Try username first, then email
  const user = usersByUsername.get(username) || users.get(username);
  
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'invalid credentials' });
  }
  
  const token = signToken(user.id);
  res.json({ 
    user: { id: user.id, username: user.username, email: user.email, fullName: user.fullName, birthDate: user.birthDate }, 
    token 
  });
});

router.post('/logout', (_req, res) => {
  res.json({ ok: true });
});



