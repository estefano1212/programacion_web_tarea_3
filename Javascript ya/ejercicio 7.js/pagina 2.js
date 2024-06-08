<!DOCTYPE html>
<html>

<head>
    <title>numeros enteros</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let num;
        num = prompt('Ingrese un valor entero');
        num = parseInt(num);
        if (num == 0) {
            document.write('El número ingresado es cero');
        } else {
            if (num > 0) {
                document.write('El número ingresado es positivo');
            } else {
                document.write('El número ingresado es negativo');
            }
        }
    </script>

</body>

</html>