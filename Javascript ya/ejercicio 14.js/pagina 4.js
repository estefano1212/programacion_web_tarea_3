<!DOCTYPE html>
<html>

<head>
    <title>por medio del ingreso del valor al uno al dies que muestre valor multiplos de ese valor</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        
        let tabla = parseInt(prompt('Ingrese un valor del 1 al 10:', ''));
        let conta = tabla;
        for (let f = 1; f <= 12; f++) {
            document.write(conta + ' ');
            conta = conta + tabla;
        }
    </script>

</body>
