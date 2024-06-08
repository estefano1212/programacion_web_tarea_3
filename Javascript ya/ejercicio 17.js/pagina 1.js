<!DOCTYPE html>
<html>

<head>
    <title>envios de enteros</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        
        function retornarMayor(x1, x2, x3) {
            if (x1 > x2 && x1 > x3) {
                return x1;
            } else {
                if (x2 > x3) {
                    return x2;
                } else {
                    return x3;
                }
            }
        }

        let valor1 = parseInt(prompt('Ingrese primer valor:'));
        let valor2 = parseInt(prompt('Ingrese segundo valor:'));
        let valor3 = parseInt(prompt('Ingrese tercer valor:'));
        document.write('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
        let may = retornarMayor(valor1, valor2, valor3);
        document.write('El mayor de los tres es :' + may);
    </script>

</body>

</html>     
    