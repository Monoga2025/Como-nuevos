import type { Request, Response } from 'express';
import { z } from 'zod';
import { createAccessToken } from '../services/token.service';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export function loginController(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: 'Credenciales inválidas', errors: parsed.error.flatten() });
  }

  const token = createAccessToken('demo-user');

  return res.json({
    token,
    user: {
      id: 'demo-user',
      name: 'Usuario Demo',
      locale: 'es'
    }
  });
}
