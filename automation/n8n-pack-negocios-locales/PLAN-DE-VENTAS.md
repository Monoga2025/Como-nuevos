# 💵 Plan de Ventas: $500.000 COP en 7 días

Objetivo: cerrar **2 clientes** esta semana vendiendo automatizaciones con IA a negocios locales. Todo corre sobre el servidor que ya tienes montado (n8n + Evolution API + Redis), así que el costo marginal por cliente es casi cero.

## 1. Qué vendes (catálogo con precios sugeridos)

| # | Automatización | Dolor que resuelve | Precio instalación | Mensualidad |
|---|---|---|---|---|
| ⭐ | Bot de atención al cliente 24/7 con IA | "Pierdo ventas porque no alcanzo a contestar el WhatsApp" | $350.000 | $150.000 |
| 1 | Recordatorio de citas | "La gente no llega a las citas y pierdo la hora" (20-30% de inasistencia) | $200.000 | $80.000 |
| 2 | Reseñas de Google con IA | "Mi competencia aparece primero en Google Maps" | $200.000 | $80.000 |
| 3 | Cobranza amable con IA | "Me da pena cobrar y tengo cartera vencida" | $250.000 | $100.000 |
| 4 | Reactivación de clientes inactivos | "Tengo mil contactos y no les vendo nada" | $250.000 | $100.000 |
| 5 | Campañas personalizadas con IA | "Mando difusiones y nadie responde" | $250.000 | $100.000 |

**Combos (lo que realmente cierras):**
- **Combo Arranque** (1 automatización): $250.000 instalación + $100.000/mes
- **Combo Crecimiento** (bot 24/7 + 2 automatizaciones): $500.000 instalación + $200.000/mes ← *con UNO de estos ya cumples la meta de la semana*
- **Combo Todo Incluido** (las 6): $800.000 instalación + $300.000/mes

> La mensualidad es el negocio real: 10 clientes a $150.000/mes = $1.500.000 recurrentes. La instalación de esta semana es solo la puerta de entrada.

## 2. A quién venderle ESTA semana (nichos ordenados por facilidad de cierre)

| Nicho | Automatización gancho | Por qué cierra rápido |
|---|---|---|
| 💈 Barberías y salones de belleza | Recordatorio de citas + bot 24/7 | Sienten cada silla vacía como plata perdida; deciden rápido, el dueño está en el local |
| 🦷 Odontólogos, estética, fisioterapia | Recordatorio de citas | Cada cita perdida vale $50.000-300.000; pagan sin regatear |
| 🏋️ Gimnasios y academias | Cobranza amable | Viven de mensualidades vencidas; el ROI se ve el primer mes |
| 🍔 Restaurantes y comidas rápidas | Bot 24/7 (pedidos) + reseñas Google | Pierden pedidos en hora pico por no contestar |
| 🐶 Veterinarias | Recordatorio (vacunas/baños) + reseñas | Recompra natural: cada recordatorio de vacuna es una venta |
| 📱 Tiendas de celulares y tecnología | Bot 24/7 + reactivación | Tu propio negocio es el caso de éxito: véndeles a los vecinos del gremio |
| 🚗 Talleres y lavaderos | Reseñas + reactivación | Nadie les ha ofrecido nada con IA; cero competencia |

## 3. Guion de venta (WhatsApp o en persona)

**Mensaje de entrada (frío, por WhatsApp):**
> Hola, [nombre] 👋. Soy [tu nombre], de aquí de [ciudad/barrio]. Les escribo porque ayudo a negocios como [tipo de negocio] a no perder ventas por WhatsApp: instalo un asistente con inteligencia artificial que responde a los clientes al instante, 24/7, con los precios y datos del negocio, y avisa cuando alguien quiere comprar. ¿Te muestro una demo de 2 minutos aquí mismo por WhatsApp? Sin costo y sin compromiso.

**La demo ES el cierre:** ten tu propia instancia con el bot configurado. Le dices "escríbele a este número como si fueras un cliente tuyo". Cuando ven que el bot responde con voz, fotos y memoria, la venta está hecha. **La demo la instalas en 10 minutos** cambiando el nodo `⚙️ Config Negocio` con los datos del prospecto (sácalos de su Instagram/Google Maps antes de la reunión).

**Manejo de objeciones:**
- *"¿Y si dice cosas raras?"* → Solo responde con la información que tú apruebas; si no sabe algo, te pasa el cliente a ti.
- *"Yo ya contesto rápido"* → ¿Y a las 9 p.m.? ¿Los domingos? ¿Cuando estás atendiendo a otro?
- *"Está caro"* → ¿Cuánto vale UNA venta tuya? Con 2-3 ventas recuperadas al mes ya se pagó.
- *"Déjame pensarlo"* → Te lo dejo instalado 7 días de prueba con $X de anticipo; si no te gusta, te devuelvo el dinero.

## 4. Plan día a día

| Día | Acción | Meta |
|---|---|---|
| Lunes | Prepara tu demo (bot con datos de un negocio ficticio o del tuyo). Lista de 30 prospectos (Google Maps: barberías, odontólogos, gimnasios de tu zona con WhatsApp visible) | Demo lista + lista de 30 |
| Martes | Contacta 15 prospectos (mensaje de entrada). Visita en persona 3-5 negocios cercanos | 5 demos agendadas |
| Miércoles | Contacta los otros 15. Haz las demos de martes | 2-3 propuestas enviadas |
| Jueves | Seguimiento a interesados ("¿viste la demo? te instalo hoy mismo") | 1er cierre 🎯 |
| Viernes | Instala el 1er cliente (2-3 horas con este repo). Pide referidos: "¿conoces otro negocio que le sirva?" | Cliente 1 funcionando |
| Sábado | Demos presenciales (los dueños están en el local). Cierra el 2do | 2do cierre 🎯 = **$500.000** |
| Domingo | Instala cliente 2. Publica el caso de éxito en tus redes con video del bot respondiendo | Semilla de la semana 2 |

**Matemática de la semana:** 30 contactos → ~8 demos → 2 cierres de Combo Arranque/Crecimiento = $500.000-700.000 + $200.000-400.000/mes recurrentes.

## 5. Operación por cliente (para que la entrega sea de horas, no días)

1. Crea una **instancia nueva** en Evolution API con el nombre del cliente (`barberia-juan`).
2. El cliente escanea el QR con el WhatsApp de SU negocio (5 min).
3. Duplica el workflow que compró, cambia el nodo `⚙️ Config` (datos del negocio + nombre de instancia) y actívalo.
4. Si usa Google Sheets: comparte la plantilla (columnas en el README), conéctala y haz una prueba con su propio celular.
5. Entrégale un video de 3 minutos grabado con la prueba funcionando — eso es lo que muestra a sus socios y lo que te trae referidos.

**Costos tuyos por cliente:** ~$0 de infraestructura (mismo VPS) + $2.000-10.000 COP/mes de OpenAI (gpt-4o-mini). Margen >90%.

## ⚠️ Notas importantes

- Cobra la instalación **por adelantado** (o 50/50). La mensualidad desde el día 30.
- Usa el número de WhatsApp **del cliente** para su bot (no el tuyo): si algo pasa con el número, es su línea de negocio y el riesgo queda claro en el acuerdo.
- Evolution API usa la vía no oficial de WhatsApp: respeta las esperas anti-bloqueo que ya traen los workflows, envía solo a clientes propios del negocio (nunca bases de datos compradas) e incluye siempre la opción de responder "NO" para no recibir más mensajes.
- Deja por escrito qué incluye la mensualidad: hosting, monitoreo, ajustes del prompt, hasta X mensajes/mes.
