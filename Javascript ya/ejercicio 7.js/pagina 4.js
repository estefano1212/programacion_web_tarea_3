<!DOCTYPE html>
<html>

<head>
    <title>nombre de postulante</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let nombre;
        nombre = prompt('nombre del estudiante');
        let cantpreguntas;
        cantpreguntas = parseInt(prompt('cantidad de preguntas del examen'));
        let cantcorrectas;
        cantcorrectas = parseInt(prompt('Cantidad de preguntas correctas'));
        let porcentaje;
        porcentaje = cantcorrectas / cantpreguntas * 100;
        if (porcentaje >= 90) {
            document.write('Nivel superior');
        } else {
            if (porcentaje >= 75) {
                document.write('Nivel medio');
            } else {
                if (porcentaje >= 50) {
                    document.write('Nivel regular');
                } else {
                    document.write('nivel reprovado');
                }
            }
        }
    </script>

</body>

</html>