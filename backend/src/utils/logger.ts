import fs from 'fs';
import path from 'path';

const logFile = path.join(__dirname, '../logs/dados_capturados.log');

export function registrarEmArquivo(objeto: Record<string, unknown>): void {
  const linha = JSON.stringify(objeto) + '\n';
  fs.appendFile(logFile, linha, (err) => {
    if (err) console.error('Erro ao salvar log:', err);
  });
}

export function getClientIp(req: any): string {
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

  if (Array.isArray(ip)) {
    ip = ip[0];
  }

  // Converte para string
  ip = String(ip).trim();

  // Remove prefixo IPv6 (::ffff:)
  ip = ip.replace(/^::ffff:/, '');

  // Se contiver "::1" (loopback IPv6), converte para 127.0.0.1
  if (ip === '::1' || ip.includes('::1')) {
    return '127.0.0.1';
  }

  return ip;
}
