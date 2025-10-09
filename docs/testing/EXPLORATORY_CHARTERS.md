## Charters de Pruebas Exploratorias

Formato: ID | Misión | Áreas foco | Datos | Heurísticas | Oráculo/éxito

1. CH-01 | Perfiles extremos (muchos/ningún repos/followers)

   - Áreas: rendimiento, layout, contadores
   - Datos: `torvalds` (alto), usuarios con 0
   - Heurísticas: límite visual, paginación implícita, truncados
   - Éxito: UI estable, sin solapamientos, tiempos aceptables

2. CH-02 | Datos raros (longitudes, emojis, espacios)

   - Áreas: tipografía, truncado, sanitización
   - Datos: nombres/locations largos, emojis en bio
   - Heurísticas: STRIDE (UI), robustez de render
   - Éxito: sin desbordes; legible

3. CH-03 | Enlaces problemáticos

   - Áreas: normalización, seguridad
   - Datos: blog sin `http`, twitter vacío
   - Heurísticas: lista segura de protocolos
   - Éxito: solo `http(s)`; estados deshabilitados correctos

4. CH-04 | Red inestable

   - Áreas: estados de carga, reintentos, cancelaciones
   - Datos: DevTools Offline/Fast 3G
   - Heurísticas: resiliencia, UX bajo latencia
   - Éxito: mensajes claros; sin crash; spinner correcto

5. CH-05 | Persistencia de tema
   - Áreas: almacenamiento, FOUC
   - Datos: cambiar tema y recargar
   - Heurísticas: no parpadeos, preferencia consistente
   - Éxito: mantiene tema o comportamiento definido
