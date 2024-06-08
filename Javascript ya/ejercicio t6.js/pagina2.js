<!DOCTYPE html>
<html>

<head>
    <title>regular o aprobado</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let nota1, nota2, nota3;
        nota1 = prompt('Ingrese primer nota:');
        nota1 = parseInt(nota1);
        nota2 = prompt('Ingrese segunda nota:');
        nota2 = parseInt(nota2);
        nota3 = prompt('Ingrese tercer nota:');
        nota3 = parseInt(nota3);
        let suma;
        suma = nota1 + nota2 + nota3;
        let promedio;
        promedio = suma / 3;
        if (promedio >= 4) {
            document.write('Regular');
        } else {
            document.write('Reprobado');
        }
    </script>

</body>

</html>