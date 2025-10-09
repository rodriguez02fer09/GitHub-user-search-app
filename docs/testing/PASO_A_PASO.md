## Testing manual paso a paso

### 1) Preparar entorno

1. Abrir Terminal y ejecutar:
   - `cd /Users/fer/Desktop/proyectos/github-profile/GitHub-user-search-app`
   - `npm install`
   - `npm run dev`
2. Abrir en Chrome la URL que muestre Vite.
3. Abrir DevTools (Consola y Network).

### 2) Validar carga inicial

1. La app renderiza sin errores en consola.
2. El input de búsqueda es visible y enfocable.

### 3) Probar búsqueda exitosa

1. Escribir `octocat`.
2. Presionar Enter.
3. Verificar: avatar, nombre, login, bio, repos, followers, following, fecha.
4. Revisar que no haya errores en consola.

### 4) Probar usuario inexistente

1. Escribir `__no_such_user__12345`.
2. Enter.
3. Verificar mensaje de “No results” o similar.

### 5) Input vacío

1. Dejar el input vacío.
2. Presionar Enter.
3. Confirmar que no hace request o muestra validación clara.

### 6) Campos nulos y enlaces

1. Probar varios usuarios hasta hallar bio/blog/twitter/location vacíos.
2. Verificar “Not Available” y enlaces deshabilitados.
3. Click en login/ícono → abre GitHub en nueva pestaña.

### 7) Tema claro/oscuro

1. Usar el toggle para cambiar de tema.
2. Confirmar contraste correcto y sin parpadeos.

### 8) Responsive

1. Cambiar viewport: 360px, 768px, 1280px.
2. Validar que el layout no se rompa ni desborde.

### 9) Accesibilidad básica

1. Navegar con Tab/Shift+Tab.
2. Confirmar foco visible y que Enter acciona la búsqueda.
3. Verificar que el input tenga `label` o `aria-label` descriptivo.

### 10) Red y errores

1. DevTools → Offline; buscar `octocat` → ver mensaje de red.
2. DevTools → Fast 3G; buscar → ver loader.
3. Varias búsquedas seguidas → verificar ausencia de crash y mensajes claros de
   límite.

### 11) Cierre y resultados

1. Marcar `ACCEPTANCE_CHECKLIST.md`.
2. Registrar hallazgos en `TEMPLATES.md` (bug o registro de sesión).
