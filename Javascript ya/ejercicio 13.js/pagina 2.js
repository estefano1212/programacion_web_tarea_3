<!DOCTYPE html>
<html>

<head>
    <title>saldo vancario</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let nrocuenta;
        let nombre;
        let saldo = 0;
        let saldoacre = 0;
        do {
            nrocuenta = parseInt(prompt('Ingrese nro de cuenta:'));
            if (nrocuenta >= 0) {
                nombre = prompt('Nombre del cliente:');
                saldo = parseFloat(prompt('Saldo actual:'));
                if (saldo > 0) {
                    saldoacre = saldoacre + saldo;
                    document.write(nombre + ' tiene saldo acreedor<br>');
                } else {
                    if (saldo < 0) {
                        document.write(nombre + ' tiene saldo deudor<br>');
                    } else {
                        document.write(nombre + ' tiene saldo nulo<br>');
                    }
                }

            }
        } while (nrocuenta > 0);
        document.write('Suma total de saldos acreedores:' + saldoacre);
    </script>

</body>

</html>