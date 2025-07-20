import { registrarEmArquivo } from '../utils/logger';

export function salvarLog(dados: Record<string, unknown>): void {
  registrarEmArquivo(dados);
}
