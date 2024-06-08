<!DOCTYPE html>
<html>

<head>
    <title>suma de los ultimos cinco valores</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        /* Desarrollar un programa que solicite la carga de 10 números 
            e imprima la suma de lo últimos 5 valores ingresados.*/
        let suma = 0;
        for (let f = 1; f <= 10; f++) {
            let valor = parseInt(prompt('Ingrese un nro:'));
            if (f > 5) {
                suma = suma + valor;
            }
        }
        document.write('La suma de los últimos cinco valores ingresados es:' + suma);
    </script>

</body>

</html>     