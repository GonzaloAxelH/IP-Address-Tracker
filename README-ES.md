# Frontend Mentor - Rastreador de direcciones IP

#[Vista previa del diseño para el reto de codificación del rastreador de direcciones IP](./design/desktop-preview.jpg)

## ¡Bienvenido! 👋

Gracias por revisar este desafío de codificación de front-end.

Los retos de [Frontend Mentor](https://www.frontendmentor.io) te ayudan a mejorar tus habilidades de codificación construyendo proyectos realistas.

**Para realizar este reto, necesitas tener conocimientos básicos de HTML, CSS y JavaScript.

## El reto

Tu reto es construir esta aplicación de rastreo de direcciones IP y conseguir que se parezca lo más posible al diseño. Para obtener las ubicaciones de las direcciones IP, utilizarás la [IP Geolocation API by IPify](https://geo.ipify.org/). Para generar el mapa, recomendamos usar [LeafletJS](https://leafletjs.com/).

Puedes utilizar las herramientas que quieras para ayudarte a completar el reto. Así que si tienes algo que te gustaría practicar, no dudes en probarlo.

Tus usuarios deberían ser capaces de:

- Ver el diseño óptimo de cada página en función del tamaño de la pantalla de su dispositivo
- Ver el estado de los elementos interactivos de la página al pasar el ratón por encima de ellos.
- Ver su propia dirección IP en el mapa en la carga inicial de la página
- Buscar cualquier dirección IP o dominio y ver la información clave y la ubicación

---

⚠️ **IMPORTANTE** ⚠️: Para utilizar la API de geolocalización de IP por IPify, tendrás que registrarte para obtener una cuenta gratuita. No necesitarás añadir ningún dato de las tarjetas para hacerlo y es un proceso muy rápido. Esto generará una clave API para ti. Normalmente, podrá restringir su clave API a una URL específica (su propio dominio). Esto asegura que otras personas no puedan utilizar su clave API en sus propios sitios web. IPify no tiene esta característica, pero como no estás añadiendo los detalles de tu tarjeta, esto no es un problema. **Así que asegúrate de registrarte sólo en la cuenta gratuita y NO introduzcas los datos de tu tarjeta**.

Para la API de mapeo, recomendamos usar [LeafletJS](https://leafletjs.com/). Su uso es gratuito y no requiere una clave de API. Si decides usar otra API, como Google Maps o Mapbox, asegúrate de asegurar tu API Key. Aquí hay guías tanto para Google Maps como para Mapbox, asegúrate de leerlas detenidamente:

- [Prácticas recomendadas para la clave de API de los desarrolladores de Google](https://developers.google.com/maps/api-key-best-practices)
- Cómo utilizar Mapbox de forma segura](https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/)

Si expones tu clave de API públicamente, otras personas pueden utilizarla para realizar solicitudes para su propia aplicación si no se toman las precauciones adecuadas. Por favor, asegúrese de leer las guías a fondo y seguir sus recomendaciones.

**No asumimos ninguna responsabilidad si expones tu API Key mientras completas el reto y no la has asegurado.

---

¿Quieres apoyo en el reto? [Únete a nuestra comunidad de Slack](https://www.frontendmentor.io/slack) y haz preguntas en el canal **#help**.

## Dónde encontrar todo

Tu tarea es construir el proyecto con los diseños dentro de la carpeta `/design`. Encontrarás una versión móvil y otra de escritorio del diseño. 

Los diseños están en formato estático JPG. El uso de JPGs significa que usted tendrá que utilizar su mejor juicio para los estilos tales como "tamaño de la fuente", "relleno" y "margen". 

Si quieres los archivos de diseño (proporcionamos versiones de Sketch y Figma) para inspeccionar el diseño con más detalle, puedes [suscribirte como miembro PRO](https://www.frontendmentor.io/pro).

Encontrará todos los recursos necesarios en la carpeta `/images`. Los activos ya están optimizados.

También hay un archivo `style-guide.md` que contiene la información que necesitarás, como la paleta de colores y las fuentes.

## Construyendo su proyecto

Siéntase libre de utilizar cualquier flujo de trabajo con el que se sienta cómodo. A continuación se sugiere un proceso, pero no sienta que tiene que seguir estos pasos:

1. Inicializa tu proyecto como un repositorio público en [GitHub](https://github.com/). La creación de un repositorio hará más fácil compartir tu código con la comunidad si necesitas ayuda. Si no estás seguro de cómo hacerlo, [lee este recurso de Try Git](https://try.github.io/).
2. Configura tu repositorio para publicar tu código en una dirección web. Esto también será útil si necesitas ayuda durante un reto, ya que puedes compartir la URL de tu proyecto con la de tu repositorio. Hay varias maneras de hacer esto, y proporcionamos algunas recomendaciones a continuación.
3. Revisa los diseños para empezar a planificar cómo vas a abordar el proyecto. Este paso es crucial para ayudarte a pensar en las clases CSS para crear estilos reutilizables.
4. Antes de añadir cualquier estilo, estructura tu contenido con HTML. Escribir primero tu HTML puede ayudarte a centrar tu atención en crear un contenido bien estructurado.
5. Escribe los estilos base de tu proyecto, incluyendo los estilos generales de contenido, como `font-family` y `font-size`.
6. Comienza a añadir estilos en la parte superior de la página y trabaja hacia abajo. Sólo pasa a la siguiente sección cuando estés satisfecho de haber completado el área en la que estás trabajando.

## Desplegar el proyecto

Como se mencionó anteriormente, hay muchas maneras de alojar su proyecto de forma gratuita. Nuestros hosts recomendados son:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Puedes alojar tu sitio usando una de estas soluciones o cualquiera de nuestros otros proveedores de confianza. [Lea más sobre nuestros hosts recomendados y de confianza](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Crear un `README.md` personalizado

Recomendamos encarecidamente sobrescribir este `README.md` con uno personalizado. Hemos proporcionado una plantilla dentro del archivo [`README-template.md`](./README-template.md) en este código de inicio.

La plantilla proporciona una guía sobre lo que hay que añadir. Un `README` personalizado le ayudará a explicar su proyecto y a reflexionar sobre sus aprendizajes. Por favor, siéntase libre de editar nuestra plantilla tanto como quiera.

Una vez que hayas añadido tu información a la plantilla, borra este archivo y cambia el nombre del archivo `README-template.md` por `README.md`. Esto hará que aparezca como el archivo README de su repositorio.

## Enviar su solución

Envía tu solución a la plataforma para que el resto de la comunidad la vea. Sigue nuestra ["Guía completa para enviar soluciones"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) para obtener consejos sobre cómo hacerlo.

Recuerda que si quieres recibir comentarios sobre tu solución, asegúrate de hacer preguntas cuando la envíes. Cuanto más específico y detallado sea con sus preguntas, más posibilidades tendrá de recibir valiosos comentarios de la comunidad.

## Compartir tu solución

Hay varios lugares donde puedes compartir tu solución:

1. Comparte tu página de solución en el canal **#finished-projects** de la [comunidad Slack](https://www.frontendmentor.io/slack). 
2. 2. Envía un tweet a [@frontendmentor](https://twitter.com/frontendmentor) y menciona a **@frontendmentor**, incluyendo el repo y las URLs en vivo en el tweet. Nos encantaría echar un vistazo a lo que has construido y ayudar a compartirlo.
3. Comparte tu solución en otros canales sociales como LinkedIn.
4. Escribe un blog sobre tu experiencia en la construcción de tu proyecto. Escribir sobre tu flujo de trabajo, tus decisiones técnicas y hablar sobre tu código es una forma brillante de reforzar lo que has aprendido. Las mejores plataformas para escribir son [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/) y [CodeNewbie](https://community.codenewbie.org/).

Proporcionamos plantillas para ayudarte a compartir tu solución una vez que la hayas enviado a la plataforma. Por favor, edítalas e incluye preguntas específicas cuando busques comentarios. 

Cuanto más específico seas con tus preguntas, más probable será que otro miembro de la comunidad te dé su opinión.

## ¿Tienes comentarios para nosotros?

Nos encanta recibir comentarios. Siempre buscamos mejorar nuestros retos y nuestra plataforma. Así que si tienes algo que quieras mencionar, envía un correo electrónico a hi[at]frontendmentor[dot]io.

Este reto es completamente gratuito. Por favor, compártelo con cualquier persona a la que le resulte útil para practicar.

**Diviértete construyendo! 🚀
