<!DOCTYPE html>
<html>

<head>
    <title>fecha de navidad</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let dia, mes, año;
        dia = parseInt(prompt('Ingrese día'));
        mes = parseInt(prompt('Ingrese mes'));
        año = parseInt(prompt('Ingrese año'));
        if (dia == 25 && mes == 12) {
            document.write('La fecha ingresada corresponde a navidad');
        } else {
            document.write('La fecha ingresada no corresponde a navidad');
        }
    </script>

</body>

</html>     
    