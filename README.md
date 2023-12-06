# Detectar Entidades

Esta aplicación te permite detectar diversas entidades (10 custom y 17 system) en un texto de longitud variable.

## Como usar la aplicación

1. Abre el proyecto en Visual Studio Code.
2. Instala la extensión "Live Server" si aún no lo has hecho.
3. Haz clic derecho en el archivo `index.html` y selecciona "Open with Live Server".
4. Ingresa el texto que deseas analizar en el área de texto proporcionada.
5. Haz clic en el botón "Detect Entities" para identificar entidades en el texto.
6. Visualiza las entidades detectadas y sus tipos en la sección de salida. Las system se veran de color verde y las custom de color rojo.

## Mostrar Ejemplos

Puedes utilizar el botón "Show Example" para cargar 5 ejemplos predefinidos y probar la funcionalidad de detección de entidades.

## Entidades Soportadas

La aplicación puede detectar los siguientes tipos de entidades:

Custom:
- Marcas de Coches
- Marcas de Ropa
- Planetas
- Lenguajes de Programación
- Estaciones
- Frutas
- Animales
- Códigos CIF 
- Números de DNI 
- Continentes


System:
- Países
- Capitales de Países
- Estados de EE. UU.
- Colores
- Aeropuertos
- Idiomas
- Unidades de Longitud
- Unidades de Peso
- Unidades de Velocidad
- Unidades de Área
- Unidades de Volumen 
- Unidades de Información
- Fechas (dd/mm/yyyy)
- Direcciones de Correo Electrónico
- URL
- Números de Teléfono
- Porcentajes

## Otros Archivos

La aplicación utiliza archivos JSON externos (`entities.json`, `convertToAbbreviations.js` y `wordsToNumbers.js`) para proporcionar información sobre entidades, conversiones de abreviaturas y conversiones de números escritos a digitos.