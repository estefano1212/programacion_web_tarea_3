<!DOCTYPE html>
<html>

<head>
    <title>valores en incremento</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function mostrarRango() {
            let inicio = parseInt(prompt("Ingrese valor inicial"))
            let fin = parseInt(prompt("Ingrese valor final"))
            for (let f = inicio; f <= fin; f++) {
                document.write(f + " - ")
            }
        }

        mostrarRango();
    </script>

</body>

</html>
    
