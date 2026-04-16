export type WhatsAppCommand = '/tareas' | '/checkin' | '/objetivo';

export function parseCommand(input: string): WhatsAppCommand | null {
  if (input === '/tareas' || input === '/checkin' || input === '/objetivo') {
    return input;
  }

  return null;
}
