function capturar(){
    let nombreEmpleado = document.getElementById ("nombre_empleado").value;
    let horas = document.getElementById ("horas_trabajadas").value;
    let categoria = document.getElementById ("categoria").value;
    let fecha = document.getElementById ("fecha").value;

    console.log(nombreEmpleado)
    console.log(categoria)
    console.log(fecha)
    console.log(horas)

    // let servicio = toLocaleDateString();
    // console.log(servicio)

    let resultado = document.getElementById ("respuesta")
    let horas_trabajadas
    let bonificacion
    let sueldo_bruto
    let sueldo_neto
    //horas trabajadas
    switch (categoria){
        case 'A':
            horas_trabajadas = horas*40
            break
        case 'B':
            horas_trabajadas = horas*35
            break
        case 'C':
            horas_trabajadas = horas*30
            break
    }

    //bonificación

            if (fecha<13){
                if (fecha<=8){
                    if (fecha<=4){
                        bonificacion=horas_trabajadas*0.15
                    } else {
                        bonificacion=horas_trabajadas*0.2
                    }

                }else {
                    bonificacion=horas_trabajadas*0.3
                }

            } else {
                bonificacion = horas_trabajadas*0.35
            }
         //sueldo bruto   
        sueldo_bruto= horas_trabajadas+bonificacion
        //sueldo neto
        sueldo_neto = sueldo_bruto-(sueldo_bruto*0.2)
    



            //imprimiendo resultado
    resultado.innerText = "Hola " + nombreEmpleado + "\nCategoía: "+categoria + '\nSueldo Básico: ' + horas_trabajadas +" "+ "\nTu bonificación es: " + bonificacion + "\n Sueldo bruto: " + sueldo_bruto + "\n Sueldo Neto: "+ sueldo_neto
    resultado.append(resultado)

}
