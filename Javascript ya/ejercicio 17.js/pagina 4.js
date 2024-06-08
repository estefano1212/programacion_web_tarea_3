<!DOCTYPE html>
<html>

<head>
    <title>ingreso de numeros enteros</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        
        function promediar(x1, x2, x3) {
            let promedio = (x1 + x2 + x3) / 3;
            return promedio;
        }

        let valor1 = parseInt(prompt('Ingrese primer valor:'));
        let valor2 = parseInt(prompt('Ingrese segundo valor:'));
        let valor3 = parseInt(prompt('Ingrese tercer valor:'));
        document.write('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
        let pro;
        pro = promediar(valor1, valor2, valor3);
        document.write('El promedio es :' + pro);
    </script>

</body>

</html     
