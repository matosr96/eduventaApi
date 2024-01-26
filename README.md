# EduventaAPI+

## Descripción del Proyecto

El proyecto **EduventaAPI+** se enfoca en desarrollar un sistema integral para la gestión de una tienda situada dentro de un colegio. La tienda ofrece una variedad de productos, y su objetivo principal es implementar un sistema de créditos para brindar a los clientes, como docentes o padres de familia, la posibilidad de adquirir productos mediante créditos.

## Modelo de Base de Datos

### Clientes:

- **clientId (PK):** Identificador único del cliente.
- **name:** Nombre del cliente.
- **phone:** Número de teléfono del cliente.

### Créditos:

- **creditId (PK):** Identificador único del crédito.
- **clientId (FK):** Referencia al cliente asociado.
- **total:** Monto total del crédito.
- **state:** Estado del crédito (por ejemplo, pendiente, pagado).

### Detalle de Crédito:

- **detalleCreditoId (PK):** Identificador único del detalle de crédito.
- **creditId (FK):** Referencia al crédito asociado.
- **fecha:** Fecha del detalle de crédito.
- **total:** Monto total asociado al detalle de crédito.

### Productos:

- **productId (PK):** Identificador único del producto.
- **name:** Nombre del producto.
- **package_price:** Precio del paquete.
- **package_quantity:** Cantidad de productos en el paquete.
- **unit_price:** Precio unitario del producto.
- **date_of_purchase:** Fecha de compra del producto.

### Inventario:

- **inventoryId (PK):** Identificador único del inventario.
- **productId (FK):** Referencia al producto asociado.
- **amount:** Cantidad total de productos en el inventario.
- **stock:** Cantidad actual en stock.
- **date:** Fecha de la última actualización.

### Detalle de Crédito-Producto:

- **detalleCreditoId (FK):** Referencia al detalle de crédito asociado.
- **productId (FK):** Referencia al producto asociado.
- **cantidad:** Cantidad de productos asociados al detalle de crédito.

## API REST

### Autenticación y Autorización

Implementar un sistema de autenticación mediante tokens JWT.

### Endpoints de la API

Diseñar endpoints lógicos y coherentes para clientes, créditos, detalles de crédito, productos, inventario y detalles de crédito-producto.

### Operaciones CRUD

Implementar operaciones CRUD para cada recurso en la API.

### Filtros y Paginación

Incluir opciones para filtrar y paginar resultados en los endpoints.

### Manejo de Errores

Implementar un manejo robusto de errores y devolver respuestas HTTP apropiadas junto con mensajes de error claros.

### Documentación

Proporcionar documentación clara sobre cómo usar la API utilizando herramientas como Swagger.

### Seguridad

Aplicar las mejores prácticas de seguridad, incluyendo la validación de entrada, para prevenir posibles ataques.

### Logs

Implementar un sistema de registro (logs) para rastrear eventos importantes y facilitar la solución de problemas.

Este sistema ofrecerá a la tienda la capacidad de gestionar de manera eficiente los créditos, clientes, productos e inventario, permitiendo a los usuarios realizar transacciones de compra a crédito de manera segura.
