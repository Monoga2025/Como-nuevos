# 📦 Pack de 5 Automatizaciones con IA para Negocios Locales

Complemento del [bot de atención al cliente 24/7](../n8n-atencion-cliente/README.md). Estas 5 automatizaciones **reutilizan el mismo stack** (n8n + Evolution API + Redis + OpenAI) — no hay que instalar nada nuevo en el servidor, solo importar el workflow, conectar un Google Sheet y cambiar un nodo de configuración. **Entrega por cliente: 1-3 horas.**

Ver **[PLAN-DE-VENTAS.md](./PLAN-DE-VENTAS.md)** para precios, nichos, guiones y el plan día a día para facturar $500.000 COP esta semana.

## Las 5 automatizaciones

| # | Workflow | Qué hace | Disparo |
|---|---|---|---|
| 01 | `01-recordatorio-citas.json` | Recuerda por WhatsApp las citas del día leyendo un Google Sheet; marca las ya avisadas | Diario 7 a.m. |
| 02 | `02-resenas-google.json` | Al día siguiente de cada venta, la IA escribe un agradecimiento personalizado y pide reseña en Google con el enlace directo | Diario 10 a.m. |
| 03 | `03-cobranza-amable.json` | Recuerda pagos por vencer y vencidos; la IA ajusta el tono según los días de mora; repite cada 3 días hasta que se marque PAGADO | Lun-Sáb 9 a.m. |
| 04 | `04-reactivacion-clientes.json` | Detecta clientes sin comprar hace 45+ días y les envía oferta personalizada por IA (máx. 30 por corrida) | Lunes 10 a.m. |
| 05 | `05-campanas-promociones-ia.json` | Difusión inteligente: la IA redacta un mensaje ÚNICO por cliente según su historial; reanudable si se corta | Manual (por campaña) |

Todas incluyen:
- **Espera anti-bloqueo** entre mensajes (8-20 s) y límite de envíos por corrida.
- Normalización de teléfonos colombianos (agrega `57` a celulares de 10 dígitos).
- Fechas en formato `DD/MM/AAAA` o `AAAA-MM-DD`.
- Marcado automático en el Sheet para nunca escribir dos veces a la misma persona.

## Requisitos

1. El stack del bot principal ya corriendo (`../n8n-atencion-cliente/docker-compose.yml`).
2. Credencial de **Google Sheets** en n8n (OAuth2 — el negocio solo necesita una cuenta de Google).
3. Credencial de **OpenAI** (la misma del bot principal).

## Instalación de cada workflow (10 minutos)

1. **Importa** el JSON en n8n (*Workflows → Import from File*).
2. **Crea el Google Sheet** del cliente con las columnas indicadas abajo y pega su URL en los nodos de Google Sheets (leer y actualizar).
3. Edita el nodo **`⚙️ Config`**: nombre del negocio, instancia de Evolution y API key.
4. Asigna credenciales (Google Sheets + OpenAI) a los nodos que las pidan.
5. Prueba con tu propio número en el Sheet y **activa** el workflow.

## Plantillas de Google Sheets (una hoja por workflow)

**Hoja `Citas`** (workflow 01)
| Fecha | Hora | Nombre | Telefono | Servicio | Recordado |
|---|---|---|---|---|---|
| 07/07/2026 | 3:00 PM | Ana Pérez | 3001234567 | Corte y barba | |

**Hoja `Ventas`** (workflow 02)
| Fecha | Nombre | Telefono | Producto | ReseñaPedida |
|---|---|---|---|---|
| 06/07/2026 | Carlos Ruiz | 3009876543 | iPhone 13 128GB | |

**Hoja `Pagos`** (workflow 03)
| Nombre | Telefono | Concepto | Monto | FechaVencimiento | Estado | UltimoRecordatorio |
|---|---|---|---|---|---|---|
| Laura Gómez | 3005551234 | Mensualidad julio | 80000 | 10/07/2026 | PENDIENTE | |

**Hoja `Clientes`** (workflows 04 y 05 — comparten hoja)
| Nombre | Telefono | UltimaCompra | UltimoProducto | Reactivado | UltimaCampana |
|---|---|---|---|---|---|
| Pedro Díaz | 3007778899 | 15/05/2026 | Portátil Lenovo | | |

> Consejo: crea UN solo archivo de Google Sheets por cliente con las 4 hojas. Es su "mini CRM" y lo entiende cualquiera.

## Personalización rápida

- **Horarios de envío**: primer nodo (Schedule) de cada workflow.
- **Textos/tono de la IA**: nodo `IA Redacta...` (el prompt está en español, edítalo a gusto).
- **Cadencias y límites**: nodo `⚙️ Config` (`dias_inactividad`, `cada_cuantos_dias_recordar`, `maximo_por_corrida`).
- **Otro país**: ajusta la función `normTel()` en los nodos de código (hoy agrega `57` de Colombia).

## ⚠️ Buenas prácticas anti-bloqueo (WhatsApp no oficial)

- Envía **solo a clientes reales** del negocio, nunca a bases compradas.
- No subas los límites por corrida los primeros 15 días de un número recién conectado ("calentamiento").
- Mantén las esperas entre mensajes; la personalización por IA ya evita el patrón de mensaje idéntico masivo.
- Incluye salida fácil: si alguien responde "no más mensajes", elimínalo del Sheet.
