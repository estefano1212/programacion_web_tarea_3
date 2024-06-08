<!DOCTYPE html>
<html>

<head>
    <title>retorno de valores</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        
        function cantidadDigitos(x) {
            if (x < 10) {
                return 1;
            } else {
                if (x < 100) {
                    return 2;
                } else {
                    if (x < 1000) {
                        return 3;
                    } else {
                        if (x < 10000) {
                            return 4;
                        } else {
                            if (x < 100000) {
                                return 5;
                            }
                        }
                    }
                }
            }
        }

        let valor = parseInt(prompt('Ingrese un valor positivo de hasta 5 dígitos:'));
        document.write('La cantidad de dígitos del valor ingresado es:' + cantidadDigitos(valor));
    </script>

</body>

</html>