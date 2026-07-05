# 🤖 Atención al Cliente por WhatsApp — n8n + Evolution API + Redis + IA

Sistema **completo y listo para vender** de atención al cliente automatizada por WhatsApp para cualquier negocio. Un agente de IA responde 24/7, entiende **texto, notas de voz e imágenes**, recuerda cada conversación y escala a un humano cuando hace falta.

## ✨ Qué hace (argumentos de venta)

| Capacidad | Cómo funciona |
|---|---|
| Responde 24/7 en segundos | Agente IA (GPT-4o-mini) con los datos del negocio: horarios, precios, políticas y FAQ |
| Entiende notas de voz 🎙️ | Descarga el audio de Evolution API y lo transcribe con Whisper |
| Entiende imágenes 📷 | Analiza fotos (comprobantes de pago, productos, daños) con visión de GPT-4o |
| Memoria por cliente 🧠 | Redis Chat Memory: recuerda las últimas 20 interacciones de cada número (48 h) |
| Agrupa mensajes seguidos | Buffer en Redis: si el cliente escribe 4 mensajes en 12 segundos, el bot responde UNA sola vez con todo el contexto |
| Parece humano | Divide respuestas largas en mensajes cortos y simula "escribiendo…" con retraso proporcional al texto |
| Escala a humanos 🙋 | Si el cliente pide una persona, se queja o quiere cerrar compra: avisa al encargado por WhatsApp y **pausa el bot** para ese chat (60 min configurables) |
| Multi-negocio | Todo lo personalizable está en UN solo nodo (`⚙️ Config Negocio`): duplica el workflow por cada cliente que le vendas el servicio |
| Filtra ruido | Ignora grupos, estados y mensajes propios |

## 🏗️ Arquitectura

```
WhatsApp ──▶ Evolution API ──webhook──▶ n8n
                                         │
                 ┌───────────────────────┤
                 ▼                       ▼
     Redis (buffer + memoria      Agente IA (OpenAI)
     + pausa por escalamiento)    con memoria Redis
                 │                       │
                 └──────────┬────────────┘
                            ▼
             Evolution API /message/sendText ──▶ Cliente
                            │
                            └──▶ Encargado (si escala a humano)
```

## 📁 Contenido

```
automation/n8n-atencion-cliente/
├── docker-compose.yml      # Stack completo: n8n + Evolution API + Redis + PostgreSQL
├── .env.example            # Variables de entorno (copiar a .env)
├── workflows/
│   ├── atencion-cliente-whatsapp-ia.json     # ⭐ Workflow principal
│   └── configurar-webhook-evolution.json     # Setup del webhook (ejecutar 1 vez)
└── README.md
```

## 🚀 Instalación paso a paso

### 1. Levantar el stack

```bash
cd automation/n8n-atencion-cliente
cp .env.example .env
# Edita .env: claves de Postgres, Evolution y n8n (openssl rand -hex 24)
docker compose up -d
```

- n8n: `http://localhost:5678` (crea tu usuario admin al entrar)
- Evolution Manager: `http://localhost:8080/manager` (entra con tu `EVOLUTION_API_KEY`)

### 2. Conectar WhatsApp

1. En Evolution Manager crea una instancia llamada `principal`.
2. Escanea el código QR con el WhatsApp del negocio (Dispositivos vinculados).
3. Verifica que la instancia quede en estado `open` (conectada).

### 3. Importar los workflows en n8n

1. En n8n: **Workflows → Import from File** e importa los 2 JSON de `workflows/`.
2. Crea las credenciales:
   - **Redis**: host `redis`, puerto `6379` (sin contraseña dentro del stack). Asígnala a todos los nodos Redis y al nodo *Memoria Redis por Cliente*.
   - **OpenAI**: tu API key. Asígnala a *Modelo OpenAI*, *Transcribir Audio* y *Analizar Imagen*.
3. Edita el nodo **`⚙️ Config Negocio`** del workflow principal:
   - Datos del negocio (nombre, descripción, horario, precios, políticas).
   - `evolution_apikey`: la misma de tu `.env`.
   - `numero_encargado`: WhatsApp que recibe los escalamientos (formato `573001234567`).
4. **Activa** el workflow principal (toggle "Active").

### 4. Registrar el webhook

1. Abre el workflow `Configurar Webhook Evolution`.
2. Edita el nodo `Datos de Conexión` (dentro del stack Docker los valores por defecto ya funcionan).
3. Ejecuta el workflow una vez. Listo: cada mensaje entrante dispara el bot.

### 5. Probar

Escribe al número conectado desde otro teléfono:
- Un texto → responde con datos del negocio.
- Varios mensajes seguidos → una sola respuesta agrupada (espera ~12 s).
- Una nota de voz → la transcribe y responde.
- "Quiero hablar con una persona" → avisa al encargado y el bot se pausa para ese chat.

## 🔧 Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Datos del negocio, precios, políticas | Nodo `⚙️ Config Negocio` |
| Personalidad y reglas del bot | System Message del nodo `Agente IA Atención al Cliente` |
| Segundos de espera del buffer | `segundos_buffer` (default 12) |
| Minutos de pausa al escalar | `minutos_pausa_humano` (default 60) |
| Modelo de IA | Nodo `Modelo OpenAI` (puedes usar Claude cambiando el subnodo por *Anthropic Chat Model*) |
| Duración de la memoria | Nodo `Memoria Redis por Cliente` (`sessionTTL`, default 48 h) |

### Reactivar el bot manualmente para un chat pausado

```bash
docker exec -it ac_redis redis-cli DEL pausa:573001234567
```

(o simplemente espera a que expire el TTL).

## 💰 Modelo de negocio sugerido

- **Setup inicial**: instalación + personalización del prompt con los datos del cliente.
- **Mensualidad**: hosting (un VPS de 2 vCPU / 4 GB corre todo el stack) + mantenimiento + consumo de OpenAI (gpt-4o-mini cuesta centavos por conversación).
- **Escala**: un mismo servidor atiende varios clientes — duplica el workflow, crea una instancia de Evolution por negocio y cambia el nodo de configuración.

## ⚠️ Producción

- Pon Evolution API y n8n detrás de HTTPS (Traefik/Caddy/Nginx) y actualiza `EVOLUTION_SERVER_URL` y `N8N_WEBHOOK_URL` en `.env`.
- Pinea la versión de la imagen de Evolution (`evoapicloud/evolution-api:v2.x.x`) para evitar sorpresas con `latest`.
- Evolution API usa WhatsApp vía Baileys (no oficial): usa un número dedicado del negocio y evita envíos masivos para minimizar riesgo de bloqueo. Para volúmenes altos considera la WhatsApp Cloud API oficial.
- Haz backup de los volúmenes `ac_postgres_data` y `ac_n8n_data`.

## 📚 Referencias

- [Documentación Evolution API v2](https://doc.evolution-api.com/v2/en/get-started/introduction)
- [Webhooks de Evolution API](https://doc.evolution-api.com/v2/en/configuration/webhooks)
- [Nodo Redis Chat Memory de n8n](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat/)
- [Plantillas de referencia de la comunidad n8n](https://n8n.io/workflows/13407-create-a-human-like-evolution-api-whatsapp-agent-with-redis-postgresql-and-gemini/)
