<!DOCTYPE html>
<html>

<head>
    <title>valores mayorespor pagina 1</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let total1 = 0;
        let x = 0;
        let nro;
        while (x < 3) {
            nro = parseInt(prompt('Ingrese valor de la primer lista:'));
            total1 = total1 + nro;
            x = x + 1;
        }
        let total2 = 0;
        x = 0;
        while (x < 3) {
            nro = parseInt(prompt('Ingrese valor de la segunda lista:', ''));
            total2 = total2 + nro;
            x = x + 1;
        }
        if (total1 > total1) {
            document.write('Tiene mayor valor la lista1');
        } else {
            if (total1 < total2) {
                document.write('Tiene mayor valor la lista2');
            } else {
                document.write('Tienen el mismo valor acumulado las dos listas');
            }
        }
    </script>

</body>

</html>
