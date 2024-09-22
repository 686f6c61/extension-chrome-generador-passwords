# Generador de Contraseñas Seguras

Extensión para generar contraseñas seguras y aleatorias de manera fácil y rápida. Personaliza la longitud, el uso de letras mayúsculas, minúsculas, números, símbolos y caracteres especiales.

## Características

- **Generación de contraseñas personalizadas**: Define la longitud de la contraseña y elige entre varias opciones:
  - Minúsculas (a-z)
  - Mayúsculas (A-Z)
  - Números (0-9)
  - Símbolos (!@#$%^&*)
  - Caracteres especiales (¿¡ñÑáéíóúüÁÉÍÓÚÜ...)
  
- **Copia al portapapeles**: Permite copiar la contraseña generada al portapapeles con un solo clic.
  
- **Notificaciones en pantalla**: Muestra notificaciones cuando la contraseña ha sido copiada o si ocurre algún error (por ejemplo, no seleccionar ningún tipo de carácter).

## Instalación

1. Clona o descarga este repositorio en tu máquina local.
2. Abre el archivo `manifest.json` y asegúrate de que todos los íconos y permisos estén configurados correctamente.
3. Carga la extensión en tu navegador:
   - Abre `chrome://extensions/` en Google Chrome o `edge://extensions/` en Microsoft Edge.
   - Activa el "Modo de desarrollador".
   - Haz clic en "Cargar descomprimida" y selecciona la carpeta que contiene los archivos de la extensión.

## Uso

1. Haz clic en el ícono de la extensión en la barra de herramientas de tu navegador para abrir el generador.
2. Ajusta las opciones según tus preferencias:
   - Define la longitud de la contraseña.
   - Selecciona si quieres incluir letras minúsculas, mayúsculas, números, símbolos o caracteres especiales.
3. Haz clic en el botón "Generar Contraseña" para crear una nueva contraseña.
4. Copia la contraseña al portapapeles usando el botón "Copiar Contraseña".
5. La extensión te notificará cuando la contraseña se haya copiado correctamente.

## Permisos

- **clipboardWrite**: Permite copiar la contraseña generada al portapapeles.

## Capturas de pantalla

_Pronto..._

## Tecnologías utilizadas

- HTML5 y CSS3 con Materialize para el diseño y la interfaz de usuario.
- JavaScript para la lógica de generación y manejo de eventos.
- API de `crypto` de JavaScript para generar contraseñas seguras aleatoriamente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar esta extensión o agregar nuevas funcionalidades, siéntete libre de abrir un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
