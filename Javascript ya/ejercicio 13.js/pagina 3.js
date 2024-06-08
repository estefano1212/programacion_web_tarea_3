<!DOCTYPE html>
<html>

<head>
    <title>identidad,edad,sexo</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let documento;
        let edad;
        let totalpersonas = 0;
        let cantvarones = 0;
        let cantmujeres = 0;
        let cantvaronesgrandes = 0;
        do {
            documento = parseInt(prompt('Ingrese numero de documento (0 para finalizar):'));
            if (documento > 0) {
                edad = parseInt(prompt('Ingrese la edad:'));
                sexo = prompt('Ingrese el sexo (masculino/femenino):');
                if (sexo == 'masculino') {
                    cantvarones = cantvarones + 1;
                    if (edad >= 16 && edad <= 65) {
                        cantvaronesgrandes = cantvaronesgrandes + 1;
                    }
                }
                if (sexo == 'femenino') {
                    cantmujeres = cantmujeres + 1;
                }
                totalpersonas = totalpersonas + 1;
            }
        } while (documento != 0);
        document.write('Total de personas censadas: ' + totalpersonas + '<br>');
        document.write('Cantidad de varones: ' + cantvarones + '<br>');
        document.write('Cantidad de mujeres: ' + cantmujeres + '<br>');
        document.write('Cantidad de varones entre 16 y 65 años: ' + cantvaronesgrandes + '<br>');
    </script>

</body>

</html>
    