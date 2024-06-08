<!DOCTYPE html>
<html>

<head>
    <title>de uno o de dos digitos</title>
    <meta charset="UTF-8">
</head>

<body>

    <script type="text/javascript">
        let num;
        num = parseInt(prompt('Ingrese un valor comprendido entre 1 y 99:'));
        if (num < 10) {
            document.write('El valor ingresado tiene un dígito');
        } else {
            document.write('El valor ingresado tiene dos dígitos');
        }
    </script>

</body>

</html>
