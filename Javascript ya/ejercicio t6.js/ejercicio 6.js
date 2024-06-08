<!DOCTYPE html>
<html>

<head>
    <title>promedio</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let num1, num2;
        num1 = parseInt(prompt('Ingrese el primer número:'));
        num2 = parseInt(prompt('Ingrese el segundo número:'));
        if (num1 > num2) {
            let suma, diferencia;
            suma = num1 + num2;
            diferencia = num1 - num2;
            document.write('La suma es:' + suma);
            document.write('<br>');
            document.write('La diferencia es:' + diferencia);
        } else {
            let producto, division;
            producto = num1 * num2;
            division = num1 / num2;
            document.write('El producto es ' + producto);
            document.write('<br>');
            document.write('La división del primero respecto al segundo es:' + division);
        }
    </script>

</body>

</html>