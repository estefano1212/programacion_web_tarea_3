<!DOCTYPE html>
<html>

<head>
    <title>numeros multiplicasion</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let num1, num2, num3;
        num1 = parseInt(prompt('Ingrese primer valor'));
        num2 = parseInt(prompt('Ingrese segundo valor'));
        num3 = parseInt(prompt('Ingrese tercer valor'));
        if (num1 == num2 && num1 == num3) {
            let resu = (num1 + num2) * num3;
            document.write('La suma de los dos primeros valores y multiplicado dicha suma por el tercero es:' + resu);
        }
    </script>

</body>

</html>     

