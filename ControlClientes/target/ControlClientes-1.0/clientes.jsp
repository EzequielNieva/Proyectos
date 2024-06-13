<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/4fea0b7558.js" crossorigin="anonymous"></script>
        <title>Control de Clientes</title>
    </head>
    <body>

        <!--Cabecero -->
        <jsp:include page="/WEB-INF/paginas/comunes/cabecero.jsp"/>

        <!--Botones de navegacion -->
        <jsp:include page="/WEB-INF/paginas/comunes/botonesNavegacion.jsp"/>

        <!--Listado Clientes -->
        <jsp:include page="/WEB-INF/paginas/cliente/listadoClientes.jsp"/>

        <!--Pie de pagina -->
        <jsp:include page="WEB-INF/paginas/comunes/piePagina.jsp"/>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    </body>
</html>
