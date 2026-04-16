# Segundo Cerebro

Plataforma fullstack de mentoría personal empresarial con IA, diseñada para operar como un **coach de alto rendimiento**.

## 1) Análisis del proyecto

### Problema a resolver
Las herramientas de productividad tradicionales no integran en un mismo sistema:
- objetivos personales y empresariales,
- salud mental/emocional,
- ejecución diaria,
- seguimiento físico y nutricional,
- mentoría contextual con IA.

Segundo Cerebro resuelve esto con una arquitectura modular, contexto compartido y automatizaciones de WhatsApp.

### Principios de producto
1. **Coach, no app genérica**: feedback directo, accionable y contextual.
2. **Una sola fuente de verdad**: perfil, objetivos, hábitos y progreso centralizados.
3. **Iterativo por fases**: iniciar con base sólida (auth + dashboard) y escalar por módulos.
4. **Privacidad by design**: cifrado de datos sensibles + acceso por scopes.

## 2) Arquitectura final propuesta

### Monorepo
```text
apps/
  web/      React + TypeScript + Tailwind + PWA
  api/      Node.js + Express + TypeScript
  mobile/   reservado (React Native/PWA extension)
packages/
  shared/   tipos, contratos API y utilidades comunes
  ai/       orquestación de Claude + prompts por módulo
  whatsapp/ integración Twilio/Meta + comandos
modules/
  universidad/ integración existente
  contador/ integración existente
```

### Decisiones clave
- **Backend**: Express + capas (routes/controllers/services).
- **DB**: PostgreSQL (OLTP) + Redis (cache + colas livianas).
- **Auth**: JWT access/refresh + OAuth2 providers.
- **IA**: package independiente para prompts versionables y guardrails.
- **Frontend**: shell tipo Odoo (sidebar + topbar + content), módulos enchufables.

### Roadmap técnico (alineado a prioridad)
1. Setup base monorepo + auth + dashboard (fase actual).
2. Objetivos/Tareas (OKR personal).
3. Mentor IA con memoria contextual.
4. WhatsApp básico (notificaciones y comandos).
5. Fitness + nutrición.
6. Tiempo.
7. Miedos/Crecimiento.
8. Integración universidad/contador.
9. Mobile.

## 3) Estado actual implementado (fase 1)
- Estructura monorepo inicial.
- API Express con endpoints iniciales de auth y dashboard.
- Web React + Tailwind con layout Odoo-like y dashboard en español.
- Sistema de módulos con colores/iconos base para escalado.
- `docker-compose.yml` con PostgreSQL + Redis.

## 4) Ejecución local

### Requisitos
- Node.js 20+
- npm 10+
- Docker + Docker Compose

### Comandos
```bash
npm install
npm run dev:api
npm run dev:web
# en otra terminal
npm run infra:up
```

## 5) Próximos pasos inmediatos
- Persistencia real de auth y dashboard en PostgreSQL.
- Wizard de onboarding de 5 pasos.
- RBAC básico (roles de mentoría y permisos por módulo).
