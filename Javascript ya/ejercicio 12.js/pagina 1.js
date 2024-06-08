<!DOCTYPE html>
<html>

<head>
    <title>nota</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let x = 0; 
        let cant1 = 0;
        let cant2 = 0;
        while (x < 10) {
            let nota;
            nota = parseInt(prompt('Ingrese nota'));
            if (nota >= 7) {
                cant1 = cant1 + 1;
            } else {
                cant2 = cant2 + 1;
            }
            x = x + 1;
        }
        document.write('Cantidad de alumnos con notas mayores o iguales a 7:' + cant1);
        document.write('<br>');
        document.write('Cantidad de alumnos con notas menores a 7:' + cant2);
    </script>

</body>

</html>