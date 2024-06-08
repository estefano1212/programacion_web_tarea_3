<!DOCTYPE html>
<html>

<head>
    <title>valores mayores y menores a cero</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let valor;
        let suma = 0;
        do {
            valor = parseInt(prompt('Ingrese un valor (9999 para finalizar)'));
            if (valor != 9999) {
                suma = suma + valor;
            }
        } while (valor != 9999);
        document.write('Valor acumulado total:' + suma);
        document.write('<br>');
        if (suma > 0) {
            document.write('El valor acumulado es mayor a cero');
        } else {
            if (suma == 0) {
                document.write('El valor acumulado es cero');
            } else {
                document.write('El valor acumulado es menor a cero');
            }
        }
    </script>

</body>

</html>     

    