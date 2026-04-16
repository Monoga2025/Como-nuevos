# Deploy en Vercel (Monorepo)

## Objetivo
Desplegar solo el frontend (`apps/web`) en Vercel y dejar la API (`apps/api`) en Railway/Render/Fly.

## Configuración recomendada en Vercel

- **Project Name**: `segundo-cerebro-web`
- **Framework Preset**: `Vite`
- **Root Directory**: `apps/web`
- **Install Command**: `cd ../.. && npm install`
- **Build Command**: `cd ../.. && npm run build -w @segundo-cerebro/web`
- **Output Directory**: `dist`

## Variables de entorno (web)

- `VITE_API_URL=https://tu-api.<provider>.app`

## Error común

### "The provided GitHub repository does not contain the requested branch or commit reference"

Checklist:
1. Verifica en GitHub que la rama de producción (normalmente `main`) tiene los commits.
2. Reimporta el proyecto en Vercel (volver a elegir repo/branch).
3. Confirma `Root Directory = apps/web`.
4. Si persiste, empuja un commit nuevo a `main` y reintenta el import.

## API en producción (recomendación)

Para Express con conexiones persistentes y workers, usar Railway/Render/Fly suele ser más simple que Vercel Functions.
