<!DOCTYPE html>
<html>

<head>
    <title>ingreso de numeros de dos y tres valores</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let num;
        num = parseInt(prompt('Ingrese un número de 1,2 o 3 dígitos'));
        if (num < 10) {
            document.write('Tiene un dígito');
        } else {
            if (num < 100) {
                document.write('Tiene dos dígitos');
            } else {
                document.write('Tiene tres dígitos');
            }
        }
    </script>

</body>

</html>