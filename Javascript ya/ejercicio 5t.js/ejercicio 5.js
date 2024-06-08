<!DOCTYPE html>
<html>

<head>
    <title>calificaciones</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let nota1;
        let nota2;
        let nota3;
        nota1 = parseInt(prompt('Ingrese calificacion'));
        nota2 = parseInt(prompt('Ingrese calificacion'));
        nota3 = parseInt(prompt('Ingrese calificacion'));
        let suma;
        suma = nota1 + nota2 + nota3;
        let promedio;
        promedio = suma / 3;
        if (promedio >= 7) {
            document.write('Promocionado');
        }
    </script>

</body>

</html>


