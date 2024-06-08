<!DOCTYPE html>
<html>

<head>
    <title>altura promedio</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let x = 0;
        let suma = 0;
        while (x < 5) {
            let altura;
            altura = parseInt(prompt('Ingrese la altura en centímetros(Ej. 175)'));
            suma = suma + altura;
            x = x + 1;
        }
        let promedio = suma / 5;
        document.write('La altura promedio de las cinco personas es:' + promedio);
    </script>

</body>
