<!DOCTYPE html>
<html>

<head>
    <title>edades de estudiantes</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        

        let suma1 = 0;
        for (let f = 1; f <= 5; f++) {
            let edad = parseInt(prompt('Edad de estudiante del turno mañana:'));
            suma1 = suma1 + edad;
        }
        let suma2 = 0;
        for (let f = 1; f <= 6; f++) {
            let edad = parseInt(prompt('Edad de estudiante del turno tarde:'));
            suma2 = suma2 + edad;
        }
        let suma3 = 0;
        for (let f = 1; f <= 11; f++) {
            let edad = parseInt(prompt('Edad de estudiante del turno noche:'));
            suma3 = suma3 + edad;
        }
        let promedio1 = suma1 / 5;
        let promedio2 = suma2 / 6;
        let promedio3 = suma3 / 11;
        document.write('Promedio de edades de alumnos del turno mañana:' + promedio1 + '<br>');
        document.write('Promedio de edades de alumnos del turno tarde:' + promedio2 + '<br>');
        document.write('Promedio de edades de alumnos del turno noche:' + promedio3 + '<br>');
        if (promedio1 > promedio2 && promedio1 > promedio3) {
            document.write('El turno mañana tiene un promedio mayor de edades');
        } else {
            if (promedio2 > promedio3) {
                document.write('El turno tarde tiene un promedio mayor de edades');
            } else {
                document.write('El turno noche tiene un promedio mayor de edades');
            }
        }
    </script>

</body>

</html>
