<!DOCTYPE html>
<html>

<head>
    <title>veterinaria</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let num1;
        let num2;
        let num3;
        let num4;
        num1 = prompt('Ingrese primer valor:');
        num2 = prompt('Ingrese segundo valor:');
        num3 = prompt('Ingrese tercer valor:');
        num4 = prompt('Ingrese cuarto valor:');
        let suma;
        suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
        let producto;
        producto = parseInt(num1) * parseInt(num2) * parseInt(num3) * parseInt(num4);
        document.write('La suma de los cuatro valores es:');
        document.write(suma);
        document.write('<br>');
        document.write('El producto de los cuatro valor es:');
        document.write(producto);
    </script>

</body>

</html>
