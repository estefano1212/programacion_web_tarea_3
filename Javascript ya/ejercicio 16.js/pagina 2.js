<!DOCTYPE html>
<html>

<head>
    <title>ingreso de numeros enteros en orden </title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        

        function mostrarOrdenados(x1, x2, x3) {
            if (x1 < x2 && x1 < x3) {
                document.write(x1 + ' ');
                if (x2 < x3) {
                    document.write(x2 + ' ' + x3);
                } else {
                    document.write(x3 + ' ' + x2);
                }
            } else {
                if (x2 < x3) {
                    document.write(x2 + ' ');
                    if (x1 < x3) {
                        document.write(x1 + ' ' + x3);
                    } else {
                        document.write(x3 + ' ' + x1);
                    }
                } else {
                    document.write(x3 + ' ');
                    if (x1 < x2) {
                        document.write(x1 + ' ' + x2);
                    } else {
                        document.write(x2 + ' ' + x1);
                    }
                }
            }
        }


        let valor1 = parseInt(prompt('Ingrese primer valor:'));
        let valor2 = parseInt(prompt('Ingrese segundo valor:'));
        let valor3 = parseInt(prompt('Ingrese tercer valor:'));
        document.write('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
        document.write('Los valores ordenados de menor a mayor son: ');
        mostrarOrdenados(valor1, valor2, valor3);
    </script>

</body>

</html>