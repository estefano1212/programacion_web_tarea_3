<!DOCTYPE html>
<html>
<head>
    <title>palabras traducidas</title>
    <meta charset="UTF-8">
</head>
<body>

    <script>
      let palabra;
        palabra = prompt('Ingrese alguna de estas palabras (casa, mesa, perro, gato) para traducirlas al ingles');
        switch (palabra) {
            case 'casa':
                document.write('house');
                break;
            case 'mesa':
                document.write('table');
                break;
            case 'perro':
                document.write('dog');
                break;
            case 'gato':
                document.write('cat');
                break;
            default:
                document.write('Solo puedo traducir (casa, mesa, perro, gato)');
                break;
        }
    </script>

</body>
</html>