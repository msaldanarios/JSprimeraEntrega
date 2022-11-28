//Calculadora de préstamos con 3 opciones

const simulacionPrestamo = () => {
    let prestamo = 0;
    let meses = 0;
    let interes = 0;
    let prestamoFinal = 0;
    let cuota = 0;
    let otraEvaluacion = false;

    do {
        prestamo = parseInt(prompt('¡Bienvenido! Por favor, ingrese monto que desea solicitar.'));
        let prestamoValidado = validarPrestamo(prestamo);
        meses = parseInt(prompt('¿En cuántos meses desea pagarlo? Pueden ser 6, 12 o 24 meses'));
        let mesesValidados = validarMeses(meses);

        switch (mesesValidados) {
            case 6:
                interes = 0.20;
                break;
            case 12:
                interes = 0.30;
            default:
                interes = 0.40;
                break;
        }

        prestamoFinal = prestamoValidado + (prestamoValidado*interes);
        cuota = prestamoFinal / mesesValidados;
        alert('Su préstamo de ' + prestamoValidado + ' dólares ha sido aprobado y su cuota es de ' + parseInt(cuota) + ' dólares al mes.');

        otraEvaluacion = confirm('¿Desea otra evaluación o préstamo?')
    } while (otraEvaluacion);
};

const validarPrestamo = (prestamo) => {
    while (Number.isNaN(prestamo) || prestamo <= 0) {
        if (prestamo <= 0) {
            alert('Por favor, ingrese un monto válido.');
        } else {
            alert('Los datos ingresados no son correctos.');
        }
        prestamo = parseInt(prompt('Por favor, ingrese el monto que desea solicitar.'));
    }

    return prestamo;
};

const validarMeses = (meses) => {
    while (Number.isNaN(meses) || meses <= 0 || (meses != 6 && meses != 12 && meses != 24)) {
        if (meses <= 0) {
            alert('Por favor, ingrese un monto válido.');
        } else if (meses != 6 && meses != 12 && meses != 24) {
            alert('Esa cantidad de cuotas no está permitida');
        } else {
            alert('Los datos ingresados no estan correctos.');
        }
        meses = parseInt(prompt('Por favor, ingrese en cuantos meses desearía pagar su préstamo.'));
    }

    return meses;
};

simulacionPrestamo();