<!DOCTYPE html>
<html>

<head>
    <title>valores de un cuadrado</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        

        function retornarPerimetro(lado) {
            let perimetro;
            perimetro = lado * 4;
            return perimetro;
        }

        let lado = parseInt(prompt('Ingrese la medida del lado de un cuadrado:'));
        document.write('El perímetro del cuadrado es:' + retornarPerimetro(lado));
    </script>

</body>

</html>     