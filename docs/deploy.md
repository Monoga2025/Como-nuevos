# Deploy en Vercel (Monorepo)

## Objetivo
Desplegar frontend (`apps/web`) y, opcionalmente, backend (`apps/api`) con configuración compatible con serverless.

## A) Deploy de Web (`apps/web`)

- **Project Name**: `segundo-cerebro-web`
- **Framework Preset**: `Vite`
- **Root Directory**: `apps/web`
- **Install Command**: `cd ../.. && npm install`
- **Build Command**: `cd ../.. && npm run build -w @segundo-cerebro/web`
- **Output Directory**: `dist`

Variables de entorno:
- `VITE_API_URL=https://tu-api.<provider>.app`

## B) Deploy de API (`apps/api`) en Vercel

> Recomendado para endpoints ligeros. Si necesitas procesos largos/conexiones persistentes, usa Railway/Render/Fly.

- **Project Name**: `segundo-cerebro-api`
- **Root Directory**: `apps/api`
- **Framework Preset**: `Other`
- **Install Command**: `cd ../.. && npm install`
- **Build Command**: dejar vacío (Vercel compila la function TypeScript automáticamente)

Archivos obligatorios ya incluidos:
- `apps/api/api/index.ts` (entrypoint serverless)
- `apps/api/vercel.json` (route-all hacia la function)

## Error común

### "The provided GitHub repository does not contain the requested branch or commit reference"

Checklist:
1. Verifica en GitHub que la rama de producción (`main`) tiene commits.
2. Reimporta el proyecto en Vercel (repo + branch).
3. Confirma `Root Directory` correcto (`apps/web` o `apps/api`).
4. Si persiste, empuja un commit nuevo a `main` y reintenta.

## Error común

### "500: FUNCTION_INVOCATION_FAILED / This Serverless Function has crashed"

Checklist de diagnóstico:
1. Abre **Vercel → Project → Functions → Logs** y ubica el stack trace por ID.
2. Verifica que el proyecto API use **Root Directory = `apps/api`**.
3. Confirma que existe `apps/api/api/index.ts` y `apps/api/vercel.json`.
4. Asegura variables de entorno requeridas (`JWT_SECRET`, etc.).
5. Re-deploy después de actualizar variables o código.
