## Casos de Prueba Funcionales (Manual)

Formato:

- ID | Título | Precondiciones | Pasos | Resultado esperado | Notas

### Búsqueda

1. BÚS-01 | Usuario válido (octocat)

   - Pre: App abierta, red OK
   - Pasos:
     1. Escribir `octocat` en el input
     2. Presionar Enter
   - Esperado: Perfil renderizado (avatar, nombre, login, bio, repos, followers,
     following, fecha). Sin errores en consola.
   - Notas: Validar tiempo de respuesta < 2s en red normal.

2. BÚS-02 | Usuario inexistente

   - Pre: App abierta, red OK
   - Pasos: Buscar `__no_such_user__12345`
   - Esperado: Mensaje de "No results"/equivalente; UI estable; sin errores en
     consola.

3. BÚS-03 | Input vacío

   - Pasos: Foco en input y presionar Enter
   - Esperado: No dispara búsqueda o muestra validación clara (texto/estilo);
     sin requests en Network.

4. BÚS-04 | Repetir búsquedas
   - Pasos: Buscar `octocat` 5 veces seguidas
   - Esperado: UI fluida, sin fuga de memoria aparente; sin spam de errores en
     consola.

### Resultados / Campos nulos

5. RES-01 | Bio/Blog/Twitter/Location nulos

   - Pasos: Probar varios usuarios hasta hallar campos vacíos
   - Esperado: Mostrar "Not Available"; enlaces/íconos visualmente
     deshabilitados e in-clickables.

6. RES-02 | Enlace GitHub

   - Pasos: Click en login/ícono
   - Esperado: Abre `https://github.com/<user>` en nueva pestaña
     (`target="_blank"` + `rel="noopener"`).

7. RES-03 | Blog sin protocolo
   - Pasos: Usuario con blog "example.com" (sin http)
   - Esperado: Normalización o manejo seguro; no rompe navegación; idealmente
     abre como `https://example.com`.

### Errores / Red

8. ERR-01 | Offline

   - Pasos: DevTools → Offline; buscar `octocat`
   - Esperado: Mensaje de error de red; opción de reintentar; UI estable.

9. ERR-02 | Lento (Fast 3G)

   - Pasos: DevTools → Fast 3G; buscar `octocat`
   - Esperado: Indicador de carga visible; no bloquea la UI.

10. ERR-03 | Rate limit

- Pasos: Realizar muchas búsquedas o simular error 403/429
- Esperado: Mensaje claro indicando límite; sin crash; logs controlados.

### Tema / UI

11. UI-01 | Toggle claro/oscuro

- Pasos: Alternar tema antes y después de una búsqueda
- Esperado: Colores/íconos cambian; contraste AA mínimo; sin parpadeos.

12. UI-02 | Responsive

- Pasos: 360px, 768px, 1280px
- Esperado: Layout sin solapamientos/desbordes; tipografía legible; scroll
  correcto.

13. UI-03 | Persistencia de tema (si aplica)

- Pasos: Cambiar a oscuro; recargar
- Esperado: Mantiene tema seleccionado o estado definido por la app.

### Accesibilidad

14. A11Y-01 | Navegación por teclado

- Pasos: Tab/Shift+Tab por toda la UI
- Esperado: Foco visible; Enter actúa como clic en botón/buscar.

15. A11Y-02 | Etiquetas del input

- Pasos: Inspeccionar input
- Esperado: Tiene `label` asociado o `aria-label` descriptivo ("Search GitHub
  username").

### Seguridad/UI defensiva

16. SEC-01 | Sanitización de enlaces

- Pasos: Usuario con blog/twitter potencialmente malformado
- Esperado: No permite `javascript:`; abre solo `http(s)`.

17. SEC-02 | Manejo de texto largo

- Pasos: Usuario con nombre/bio muy largos
- Esperado: Truncado/ajuste correcto sin romper layout.
