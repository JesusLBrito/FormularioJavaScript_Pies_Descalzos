console.log("Starting");

// Bloq Importar Funciones Externas


// Bloq variables y constantes
const insertar = document.querySelector('.enviar');
const formulario = document.querySelector('.formulario');
const contactos = [];





// Bloq funciones



const mostrarAlerta = (mensaje, error=null) => {

    const parrafo = document.createElement("p");
    parrafo.innerHTML = mensaje;
    const alerta = document.querySelector('#alerta');

    if(error){
        parrafo.classList.add("error");
    }else{
        parrafo.classList.add("correcto");
    }

    alerta.appendChild(parrafo);

    setTimeout(() => {
        parrafo.remove();
    }, 3000);


};



const validarFormulario = (e) =>{
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const curso = document.querySelector('#curso').value;
    const edad = document.querySelector('#edad').value;
    const sexo = document.querySelector('#sexo').value;
    const civil = document.querySelector('#civil').value;
    const poblacion = document.querySelector('#poblacion').value;
    const ubicacion = document.querySelector('#ubicacion').value;

    if([nombre, curso, edad, sexo, civil, poblacion, ubicacion].includes("")){
        mostrarAlerta("Todos los campos son obligatorio", true);
        return;
    };

    

    // Paso la validacion de la
    mostrarAlerta("Datos guardados de manera exitosa");

    // Objeto Literal
    const datos = {
        nombre,
        curso,
        edad,
        sexo,
        civil,
        poblacion,
        ubicacion
    };

    formulario.reset();
    contactos.push(datos);
    if(contactos.length >= 0){
       var Nombre=0;
       var Edad=0;
       var Sexto=0;
       var Septimo=0;
       var Octavo=0;
       var Noveno=0;
       var Decimo=0;
       var Once=0;
       var masculino=0;
       var femenino=0;
       var soltero=0;
       var casado=0;
       var si=0;
       var no=0;
       var playa=0;
       var malambo=0;
       var barranquilla=0;
       var galapa=0;
       
    }

    for (let i = 0; i < contactos.length; i++) {
        const element = contactos[i];
        if(element.nombre){
            Nombre++; 
                      
        }
        if(element.edad >=18){
            Edad++; 
                      
        }
        if(element.curso == 6){
            Sexto++;
        }
        if(element.curso == 7){
            Septimo++;
        }
        if(element.curso == 8){
            Octavo++;
        }
        if(element.curso == 9){
            Noveno++;
        }
        if(element.curso == 10){
            Decimo++;
        }
        if(element.curso == 11){
            Once++;
        }
        if(element.sexo == "Masculino"){
            masculino++;
        } 
        if(element.sexo == "Femenino"){
            femenino++;
        }
        if(element.civil == "Soltero"){
            soltero++;
        }
        if(element.civil == "Casado"){
            casado++;
        }  
        if(element.poblacion == "Si"){
            si++;
        }
        if(element.poblacion == "No"){
            no++;
        }
        if(element.ubicacion == "Playa"){
            playa++;
        } 
        if(element.ubicacion == "Malambo"){
            malambo++;
        }
        if(element.ubicacion == "Barranquilla"){
            barranquilla++;
        } 
        if(element.ubicacion == "Galapa"){
            galapa++;
        }                                             
                  
        
        
    
    
    
    }

    const respuesta = document.getElementById("respuesta");
    const respuesta2 = document.getElementById("respuesta2");
    const respuesta3 = document.getElementById("respuesta3");
    const respuesta4 = document.getElementById("respuesta4");
    const respuesta5 = document.getElementById("respuesta5");
    const respuesta6 = document.getElementById("respuesta6");
    const respuesta7 = document.getElementById("respuesta7");
    const respuesta8 = document.getElementById("respuesta8");
    const respuesta9 = document.getElementById("respuesta9");
    const respuesta10 = document.getElementById("respuesta10");
    const respuesta11 = document.getElementById("respuesta11");
    const respuesta12 = document.getElementById("respuesta12");
    const respuesta13 = document.getElementById("respuesta13");
    const respuesta14 = document.getElementById("respuesta14");
    const respuesta15 = document.getElementById("respuesta15");
    const respuesta16 = document.getElementById("respuesta16");
    const respuesta17 = document.getElementById("respuesta17");
    const respuesta18 = document.getElementById("respuesta18");
    respuesta.textContent = `Cantidad de personas encuestadas es de: ${Nombre++}`
    respuesta2.textContent = `Cantidad de personas mayores de edad es de: ${Edad++}`
    respuesta3.textContent = `Cantidad de personas en el curso 6°  es de: ${Sexto++}`
    respuesta4.textContent = `Cantidad de personas en el curso 7°  es de: ${Septimo++}`
    respuesta5.textContent = `Cantidad de personas en el curso 8°  es de: ${Octavo++}`
    respuesta6.textContent = `Cantidad de personas en el curso 9°  es de: ${Noveno++}`
    respuesta7.textContent = `Cantidad de personas en el curso 10°  es de: ${Decimo++}`
    respuesta8.textContent = `Cantidad de personas en el curso 11°  es de: ${Once++}`
    respuesta9.textContent = `Cantidad de personas que son masculinos es de: ${masculino++}`
    respuesta10.textContent = `Cantidad de personas que son femeninos es de: ${femenino++}`
    respuesta11.textContent = `Cantidad de pesonas que son solteras  es de: ${soltero++}`
    respuesta12.textContent = `Cantidad de pesonas que son solteras  es de: ${casado++}`
    respuesta13.textContent = `Cantidad de pesonas que son de poblacion vulnerada es de: ${si++}`
    respuesta14.textContent = `Cantidad de pesonas que no son de poblacion vulnerada es de: ${no++}`
    respuesta15.textContent = `Cantidad de pesonas que estan en la Playa es de: ${playa++}`
    respuesta16.textContent = `Cantidad de pesonas que estan en  Malambo es de: ${malambo++}`
    respuesta17.textContent = `Cantidad de pesonas que estan en Barranquilla es de: ${barranquilla++}`
    respuesta18.textContent = `Cantidad de pesonas que estan en Galapa es de: ${galapa++}`
    

    ///console.log("La Cantidad de pesonas  que son mayores de edad de la poblacion encuestada es de: " +Edad++);
    //console.log("La Cantidad de pesonas  que estan en el salon 6° de la poblacion encuestada es de: " +Sexto++);
    //console.log("La Cantidad de pesonas  que estan en el salon 7° de la poblacion encuestada es de: " +Septimo++);
    //console.log("La Cantidad de pesonas  que estan en el salon 8° de la poblacion encuestada es de: " +Octavo++);
    //console.log("La Cantidad de pesonas  que estan en el salon 9° de la poblacion encuestada es de: " +Noveno++);
    //console.log("La Cantidad de pesonas  que estan en el salon 10° de la poblacion encuestada es de: " +Decimo++);
    //console.log("La Cantidad de pesonas  que estan en el salon 11° de la poblacion encuestada es de: " +Once++);
    //console.log("La Cantidad de pesonas  que son masculinas de la poblacion encuestada es de: " +masculino++);
    //console.log("La Cantidad de pesonas  que son femeninas de la poblacion encuestada es de: " +femenino++);
    //console.log("La Cantidad de pesonas  que son solteras  de la poblacion encuestada es de: " +soltero++);
    //console.log("La Cantidad de pesonas  que son casadas  de la poblacion encuestada es de: " +casado++);
    //console.log("La Cantidad de pesonas  que son de poblacion vulnerada  de la poblacion encuestada es de: " +si++);
    //console.log("La Cantidad de pesonas  que no son de poblacion vulnerada  de la poblacion encuestada es de: " +no++);
    //console.log("La Cantidad de pesonas  que estan en la playa de la poblacion encuestada es de: " +playa++);
    //console.log("La Cantidad de pesonas  que estan en Malambo de la poblacion encuestada es de: " +malambo++);
    //console.log("La Cantidad de pesonas  que estan en Barranquilla de la poblacion encuestada es de: " +barranquilla++);
    //console.log("La Cantidad de pesonas  que estan en Galapa de la poblacion encuestada es de: " +galapa++);
    
    
    console.table(contactos);

    
    

   



};

// Bloq Prgrama Principal
// Escuchador de eventos
formulario.addEventListener("submit", validarFormulario);

