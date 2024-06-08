<!DOCTYPE html>
<html>

<head>
    <title>solicitud de valores</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
      

        function cargar5Valores() {
            let suma = 0;
            for (let f = 1; f <= 5; f++) {
                let valor = parseInt(prompt('Ingrese valor:'));
                suma = suma + valor;
            }
            return suma;
        }

        let s = cargar5Valores();
        document.write('La suma de los 5 valores es: ' + s);
    </script>

</body>

</html>