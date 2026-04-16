import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export function createAccessToken(userId: string) {
  return jwt.sign({ sub: userId }, env.jwtSecret, { expiresIn: '1h' });
}
