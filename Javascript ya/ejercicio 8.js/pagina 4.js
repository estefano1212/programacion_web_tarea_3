<!DOCTYPE html>
<html>

<head>
    <title>coordenadas</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let x, y;
        x = parseInt(prompt('Ingrese coordenada x'));
        y = parseInt(prompt('Ingrese coordenada y'));
        if (x > 0 && y > 0) {
            document.write('Se encuentra en el primer cuadrante');
        } else {
            if (x < 0 && y > 0) {
                document.write('Se encuentra en el segundo cuadrante');
            } else {
                if (x < 0 && y < 0) {
                    document.write('Se encuentra en el tercer cuadrante');
                } else {
                    if (x > 0 && y < 0) {
                        document.write('Se encuentra en el cuarto cuadrante');
                    } else {
                        document.write('Se encuentra sobre un eje');
                    }
                }
            }
        }
    </script>

</body>

</html>
