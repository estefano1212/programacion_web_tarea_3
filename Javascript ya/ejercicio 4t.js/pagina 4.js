<!DOCTYPE html>
<html>

<head>
    <title>veterinaria</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let precio;
        let cantidad;
        precio = prompt('Ingrese precio del artículo');
        cantidad = prompt('Ingrese la cantidad de artículos a llevar:');
        let importe;
        importe = parseInt(precio) * parseInt(cantidad);
        document.write('Debe abonar:');
        document.write(importe);
    </script>

</body>

</html>