<!DOCTYPE html>
<html>

<head>
    <title>cual es el valor mayor</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let num1, num2, num3;
        num1 = parseInt(prompt('primer valor:'));
        num2 = parseInt(prompt('segundo valor:'));
        num3 = parseInt(prompt('tercer valor:'));
        if (num1 > num2) {
            if (num1 > num3) {
                document.write('El mayor de los tres es:' + num1);
            } else {
                document.write('El mayor de los tres es:' + num3);
            }
        } else {
            if (num2 > num3) {
                document.write('El mayor de los tres es:' + num2);
            } else {
                document.write('El mayor de los tres es:' + num3);
            }
        }
    </script>

</body>

</html>
    