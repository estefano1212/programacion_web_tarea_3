<!DOCTYPE html>
<html>

<head>
    <title>vase por altura de un triangulo</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let conta1 = 0;
        for (let f = 1; f <= 3; f++) {
            let base = parseInt(prompt('Ingrese la base:'));
            let altura = parseInt(prompt('Ingrese la altura:'));
            let superficie = base * altura / 2;
            if (superficie > 12) {
                conta1++;
            }
            document.write('Triángulo nro:' + f + '<br>');
            document.write('Base:' + base + '<br>');
            document.write('Altura:' + altura + '<br>');
            document.write('Superficie:' + superficie + '<br>');
        }
        document.write('Cantidad de triángulos con superficie mayor a 12:' + conta1);
    </script>

</body>

</html>