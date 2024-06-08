<!DOCTYPE html>
<html>

<head>
    <title>tipos de triangulos</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        

        let cant1 = 0;
        let cant2 = 0;
        let cant3 = 0;
        for (let f = 1; f <= 4; f++) {
            let lado1 = parseInt(prompt('Ingrese primer lado:'));
            let lado2 = parseInt(prompt('Ingrese segundo lado:'));
            let lado3 = parseInt(prompt('Ingrese tercer lado:'));
            if (lado1 == lado2 && lado1 == lado3) {
                document.write('Triángulo equilatero.<br>');
                cant1++;
            } else {
                if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
                    document.write('Triángulo isósceles.<br>');
                    cant2++;
                } else {
                    document.write('Triángulo escaleno.<br>');
                    cant3++;
                }
            }
        }
        document.write('<br>');
        document.write('Cantidad de triángulos equiláteros:' + cant1 + '<br>');
        document.write('Cantidad de triángulos isósceles:' + cant2 + '<br>');
        document.write('Cantidad de triángulos escalenos:' + cant3 + '<br>');
        if (cant1 < cant2 && cant1 < cant3) {
            document.write('Se ingresaron menos triángulos equiláteros');
        } else {
            if (cant2 < cant3) {
                document.write('Se ingresaron menos triángulos isósceles');
            } else {
                document.write('Se ingresaron menos triángulos escalenos');
            }
        }
    </script>

</body>

</html>
     