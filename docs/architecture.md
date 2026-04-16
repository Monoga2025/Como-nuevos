# Arquitectura Ejecutable (v1)

Este documento aterriza la arquitectura de `Segundo Cerebro` con foco en escalabilidad y despliegue.

## Backend boundaries

- `apps/api`: API HTTP (auth, dashboard, módulos).
- `packages/shared`: contratos DTO y tipos compartidos.
- `packages/ai`: prompts versionados y orquestación de modelo.
- `packages/whatsapp`: parser/comandos, webhook handlers y plantillas.

## Persistencia recomendada

- PostgreSQL (fuente principal de verdad).
- Redis (cache de dashboard, sesiones efímeras, colas simples).
- Vector DB (fase 2 del mentor IA) para memoria semántica de largo plazo.

### Modelo de datos base (fase 1-2)

1. `users`
2. `profiles`
3. `goals`
4. `tasks`
5. `daily_checkins`
6. `mentor_messages`

## Flujo del Mentor IA

1. Recuperar contexto del usuario (objetivos, tareas críticas, estado mental).
2. Recuperar memoria semántica (cuando esté habilitada).
3. Seleccionar prompt de módulo y tono (`hard` / `empathetic`).
4. Generar respuesta + acción sugerida.
5. Registrar interacción para trazabilidad.

## Integración WhatsApp (fase inicial)

- Webhook inbound -> parser comando (`/tareas`, `/checkin`, `/objetivo`).
- Job outbound -> recordatorios diarios y resumen semanal.

## Seguridad

- JWT access token con expiración corta.
- Encriptar en reposo campos sensibles (miedos, finanzas, notas privadas).
- Auditoría mínima sobre cambios críticos de objetivos y finanzas.
