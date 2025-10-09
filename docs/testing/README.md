## Plan de Testing Manual

### Objetivo

- Validar: búsqueda de usuario, render de perfil, enlaces, tema oscuro/claro,
  errores, responsive y accesibilidad básica.
- Criterio de salida: checklist de aceptación cumplida sin bugs
  críticos/bloqueantes.

### Preparación del entorno

1. Instalar y levantar la app:
   - `cd /Users/fer/Desktop/proyectos/github-profile/GitHub-user-search-app`
   - `npm install`
   - `npm run dev`
2. Abrir en navegador principal (Chrome). Tener a mano Firefox y Safari para
   smoke.
3. Limpiar caché/estado si hay persistencia de tema (recarga dura).
4. Abrir DevTools (Consola y Network visibles).

### Datos de prueba

- Válidos: `octocat`, `torvalds`, `gaearon`
- Inexistente: `__no_such_user__12345`
- Exploración: intenta varios hasta ver campos vacíos (bio, blog, twitter,
  location).

### Flujo base (paso a paso)

1. Verificar que la UI inicial carga sin errores en consola.
2. Escribir `octocat` en el buscador y pulsar Enter.
3. Observar estados: botón/loader, cambios de layout.
4. Revisar el resultado: avatar, nombre, login, bio, repos, followers,
   following, location, blog, twitter, fecha.
5. Hacer click en enlaces activos (GitHub, blog, Twitter). Verificar que abren
   en nueva pestaña.
6. Alternar tema claro/oscuro y confirmar contraste/colores correctos.
7. Cambiar tamaños: 360px, 768px, 1280px. Validar que no se rompa el layout.
8. Teclado: navegar con Tab/Shift+Tab, foco visible; activar búsqueda con Enter.
9. Buscar `__no_such_user__12345` y validar mensaje de “no resultados”/error
   amigable.
10. Simular red lenta/offline (DevTools): confirmar mensajes/clase de error y
    que la UI no crashea.

### Casos de prueba

- BÚS-01: Usuario válido → Buscar `octocat` → Perfil renderizado; sin errores en
  consola.
- BÚS-02: Usuario inexistente → `__no_such_user__12345` → Mensaje "No results";
  UI estable.
- BÚS-03: Input vacío → Enter vacío → Validación o no dispara.
- RES-01: Campos nulos → Usuarios con bio/blog/twitter/location vacíos → "Not
  Available"; enlaces inactivos.
- ENL-01: GitHub → Click en login/ícono → Abre `https://github.com/<user>` en
  nueva pestaña.
- ENL-02: Blog/Twitter vacíos → Click → No navega; visual deshabilitado.
- ERR-01: Rate limit/red → Offline o muchas búsquedas → Mensaje claro; sin
  crash.
- UI-01: Tema → Toggle claro/oscuro → Contraste adecuado.
- UI-02: Responsive → 360/768/1280 px → Sin solapamientos/desbordes.
- A11Y-01: Teclado → Tab por UI → Foco visible; Enter/Click equivalentes.
- A11Y-02: Etiquetas → Inspeccionar input → `label` o `aria-label` descriptivo.

### Heurísticas rápidas

- Probar nombres extremos (muy largos, con espacios/emojis).
- Blogs sin `http(s)://`.
- Cambiar tema antes/después de buscar.
- Repetir la misma búsqueda varias veces.

### Registro de sesión (plantilla breve)

- Fecha/navegador:
- Build/commit:
- Objetivo de la sesión:
- Casos ejecutados:
- Resultados: Passed/Failed con enlaces a bugs
- Observaciones/perf:
