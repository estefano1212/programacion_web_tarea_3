<!DOCTYPE html>
<html>

<head>
    <title>ingreso de valores enteros</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
       
        let cantnegativos = 0;
        let cantpositivos = 0;
        let mult15 = 0;
        let sumapares = 0;
        for (let f = 1; f <= 10; f++) {
            let valor = parseInt(prompt('Ingrese un valor:'));
            if (valor < 0) {
                cantnegativos++;
            } else {
                if (valor > 0) {
                    cantpositivos++;
                }
            }
            if (valor % 15 == 0 && valor != 0) {
                mult15++;
            }
            if (valor % 2 == 0) {
                sumapares = sumapares + valor;
            }
        }
        document.write('Cantidad de valores negativos:' + cantnegativos + '<br>');
        document.write('Cantidad de valores positivos:' + cantpositivos + '<br>');
        document.write('Cantidad de múltiplos de 15:' + mult15 + '<br>');
        document.write('Suma de los valores pares ingresados:' + sumapares + '<br>');
    </script>

</body>

</html>     