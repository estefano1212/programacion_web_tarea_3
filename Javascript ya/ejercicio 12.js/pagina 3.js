<!DOCTYPE html>
<html>

<head>
    <title>prosupuesto de sueldo</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let cont1 = 0;
        let cont2 = 0;
        let total = 0;
        let sueldo;
        let x = 0;
        while (x < 5) {
            sueldo = parseInt(prompt('Ingrese el sueldo'));
            if (sueldo <= 300) {
                cont1 = cont1 + 1;
            } else {
                cont2 = cont2 + 1;
            }
            total = total + sueldo;
            x = x + 1;
        }
        document.write('Cantidad de empleados que cobran 300 o menos:' + cont1);
        document.write('<br>');
        document.write('Cantidad de empleados que cobran más de 300:' + cont2);
        document.write('<br>');
        document.write('Gastos generales de la empresa en sueldo:' + total);
    </script>

</body>

</html>
