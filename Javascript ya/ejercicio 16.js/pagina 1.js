<!DOCTYPE html>
<html>

<head>
    <title>ingreso de enteros y muestra</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        
        function mostrarMenor(x1, x2, x3) {
            if (x1 < x2 && x1 < x3) {
                document.write('El menor de los tres valores es :' + x1);
            } else {
                if (x2 < x3) {
                    document.write('El menor de los tres valores es :' + x2);
                } else {
                    document.write('El menor de los tres valores es :' + x3);
                }
            }
        }

        let valor1 = parseInt(prompt('Ingrese primer valor:'));
        let valor2 = parseInt(prompt('Ingrese segundo valor:'));
        let valor3 = parseInt(prompt('Ingrese tercer valor:'));
        document.write('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
        mostrarMenor(valor1, valor2, valor3);
    </script>

</body>

</html>