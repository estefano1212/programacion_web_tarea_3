<!DOCTYPE html>
<html>

<head>
    <title>ingreso de cordenadas</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
       
        let cuad1 = 0;
        let cuad2 = 0;
        let cuad3 = 0;
        let cuad4 = 0;
        let cant = parseInt(prompt('Cuantos puntos procesará:'));
        cant = parseInt(cant);
        for (let f = 1; f <= cant; f++) {
            let x = parseInt(prompt('Ingrese coordenada x:'));
            let y = parseInt(prompt('Ingrese coordenada y:'));
            if (x > 0 && y > 0) {
                cuad1++;
            } else {
                if (x < 0 && y > 0) {
                    cuad2++;
                } else {
                    if (x < 0 && y < 0) {
                        cuad3++;
                    } else {
                        if (x > 0 && y < 0) {
                            cuad4++;
                        }
                    }
                }
            }
        }
        document.write('Cantidad de puntos ingresados en el primer cuadrante:' + cuad1 + '<br>');
        document.write('Cantidad de puntos ingresados en el segundo cuadrante:' + cuad2 + '<br>');
        document.write('Cantidad de puntos ingresados en el tercer cuadrante:' + cuad3 + '<br>');
        document.write('Cantidad de puntos ingresados en el cuarto cuadrante:' + cuad4 + '<br>');
    </script>

</body>

</html>     