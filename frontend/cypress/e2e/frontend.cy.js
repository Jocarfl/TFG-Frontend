

// PRUEBA DE BIENVENIDA
describe('WELCOME',()=> {

    it('Se puede abrir la página',()=>{
        cy.visit('http://localhost:8081/')
        cy.contains('Login')
    });
});


//PRUEBAS INICIO DE SESIÓN
describe('Página Inicio Sesión',()=> {

    //ACTIVAR FUNCIÓN POR CADA TEST
    beforeEach(()=>{
        cy.visit('http://localhost:8081/')
    })

    //NO SE INSERTA NADA
    it('Saltan las validaciones al no insertar nada',()=>{
        cy.get('[name=login]').click()
        cy.contains('*Este campo es obligatorio')    
    });

    //USUARIO SIN CONTRASEÑA
    it('Saltan las validaciones al insertar un usuario sin contraseña',()=>{
        cy.get('[name=username]').type('admin')
        cy.get('[name=login]').click()
        cy.contains('*Este campo es obligatorio')    
    });

    //USUARIO NO EXISTENTE
    it('Saltan las validaciones al insertar un usuario no existente',()=>{
        cy.get('[name=username]').type('usuarioNoExistente')
        cy.get('[name=password]').type('usuarioNoExistente')
        cy.get('[name=login]').click()
        cy.contains('User Not found.')    
    });

    //CONTRASEÑA INCORRECTA
    it('Saltan las validaciones al insertar una contraseña incorrecta',()=>{
        cy.get('[name=username]').type('admin')
        cy.get('[name=password]').type('admin')
        cy.get('[name=login]').click()
        cy.contains('Invalid Password!')    
    });

    //DATOS CORRECTOS
    it('Se inicia correctamente al poner datos correctos',()=>{
        cy.get('[name=username]').type('admin')
        cy.get('[name=password]').type('123456')
        cy.get('[name=login]').click()
        cy.contains('Registrar Usuario')    
    });
});

// VISTA ADMINISTRADOR
describe('Vista Admin',()=> {

    //PÁGINA REGISTRAR USUARIO
    describe('Página Registrar Usuario',()=>{

        //ACTIVAR POR CADA TEST
        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('admin')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click()  
        });
        
        //NO INSERTAR NADA
        it('Al no insertar nada, saltan los campos obligatorios',()=>{
            cy.get('[name=registrar]').click()
            cy.contains('*Este campo es obligatorio')
        });
        
        //CREAR NUEVO MÉDICO 
        it('Se puede crear un Médico correctamente',()=>{
            cy.get('[name=username]').type('NuevoMedico')
            cy.get('[name=password]').type('123456')
            cy.get('[name=nombre]').type('Prueba')
            cy.get('[name=apellido]').type('Prueba')
            cy.get('[name=email]').type('NuevoMedico@hotmail.com')
            cy.get('[name=dni]').type('06060884Q')
            cy.get('[name=altura]').type(188)
            cy.get('#react-select-2-input').type('masculino{enter}')
            cy.get('#react-select-3-input').type('médico{enter}')
            cy.get('[name=registrar]').click()
            cy.contains('User was registered successfully!')
        });
    
        //USUARIO EXISTENTE
        it('Al insertar Nombre de Usuario existente salta validación',()=>{
            cy.get('[name=username]').type('NuevoMedico')
            cy.get('[name=password]').type('123456')
            cy.get('[name=nombre]').type('Prueba')
            cy.get('[name=apellido]').type('Prueba')
            cy.get('[name=email]').type('admin@hotmail.com')
            cy.get('[name=dni]').type('06060884Q')
            cy.get('[name=altura]').type(188)
            cy.get('#react-select-2-input').type('masculino{enter}')
            cy.get('#react-select-3-input').type('médico{enter}')
            cy.get('[name=registrar]').click()
            cy.contains('Failed! Username is already in use!')
        });
        
        //DNI EXISTENTE
        it('Al insertar DNI existente salta validación', ()=>{
            cy.get('[name=username]').type('PruebaUsuario')
            cy.get('[name=password]').type('123456')
            cy.get('[name=nombre]').type('Prueba')
            cy.get('[name=apellido]').type('Prueba')
            cy.get('[name=email]').type('admin@hotmail.com')
            cy.get('[name=dni]').type('06060884Q')
            cy.get('[name=altura]').type(188)
            cy.get('#react-select-2-input').type('masculino{enter}')
            cy.get('#react-select-3-input').type('médico{enter}')
            cy.get('[name=registrar]').click()
            cy.contains('Failed! DNI is already in use!')
    
        });
        
        //EMAIL EXISTENTE
        it('Al insertar Email existente salta validación', ()=>{
            cy.get('[name=username]').type('OtroUsuario')
            cy.get('[name=password]').type('123456')
            cy.get('[name=nombre]').type('Prueba')
            cy.get('[name=apellido]').type('Prueba')
            cy.get('[name=email]').type('NuevoMedico@hotmail.com')
            cy.get('[name=dni]').type('54441973F')
            cy.get('[name=altura]').type(188)
            cy.get('#react-select-2-input').type('masculino{enter}')
            cy.get('#react-select-3-input').type('médico{enter}')
            cy.get('[name=registrar]').click()
            cy.contains('Failed! Email is already in use!')
        });
        
        //CREAR NUEVO PACIENTE
        it('Se puede crear un Paciente correctamente', ()=>{
            cy.get('[name=username]').type('NuevoPaciente')
            cy.get('[name=password]').type('123456')
            cy.get('[name=nombre]').type('Paciente')
            cy.get('[name=apellido]').type('Paciente')
            cy.get('[name=email]').type('NuevoPaciente@hotmail.com')
            cy.get('[name=dni]').type('96476606R')
            cy.get('[name=altura]').type(188)
            cy.get('#react-select-2-input').type('masculino{enter}')
            cy.get('#react-select-3-input').type('paciente{enter}')
            cy.get('[name=registrar]').click()
                
            cy.contains('User was registered successfully!')
        
        });

    })

    //PÁGINA VINCULAR MÉDICO-PACIENTE
    describe('Página Vincular Médico-Paciente',()=>{

        //ACTIVAR POR CADA TEST
        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('admin')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click() 
            cy.get('[name=pagVincular]').click() 
        });
        
        // BUSCAR MÉDICO
        it('Al poner el nombre usuario del Médico en el buscador, se encuentra en la lista', ()=>{
            cy.get('#search').type("NuevoMedico")            
            cy.contains('NuevoMedico')
        
        });

        //VINCULAR MÉDICO PACIENTE
        it('Al pulsar en el botón añadir se puede vincular usuario insertando DNI del paciente', ()=>{
            cy.get('#search').type("NuevoMedico")
            cy.get('[name=botonVincular]').click()
            cy.get('[name=dni]').type('96476606R')
            cy.get('[type=submit]').click()             
        
        });

        //VER LISTA DE PACIENTES
        it('Al pulsar sobre la fila se ve una lista con el paciente vinculado', ()=>{
            cy.get('#search').type("NuevoMedico")
            cy.contains('Prueba').click()
            cy.contains('Paciente')
            cy.get('[class=close]').click()
    
        });


    })

    
    //CERRAR SESIÓN
    describe('Cerrar Sesión',()=>{
        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('admin')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click() 
        });

        it('Al pulsar boton se cierra la sesión', ()=>{
            cy.get('[name=cerrarSesion]').click()
        });

    })

});

//VISTA MODERADOR
describe("Vista Moderador",()=>{

        //ACTIVAR POR CADA TEST
        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('NuevoMedico')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click()  
        });

        //BUSCAR PACIENTE BUSCADOR
        it('Al poner el nombre usuario del Paciente en el buscador, se encuentra en la lista',()=>{
            cy.get('#search').type("NuevoPaciente")            
            cy.contains('NuevoPaciente')
        })

        //INSERTAR RECOMENDACIÓN
        it('Al pulsar sobre el botón Insertar Recomendación, se puede insertar una recomendación', ()=>{
            cy.get('#search').type("NuevoPaciente")
            cy.get('[name=botonRecomendaciones]').click()
            cy.get('[name=titulo]').type('Prueba')
            cy.get('[name=descripcion]').type('Esto es una recomendación de prueba')
            cy.get('[type=submit]').click()      
            cy.get('[class=close]').click()
        
        });

        //INSERTAR PESO
        it('Al pulsar sobre el botón Insertar Peso, se puede insertar un nuevo peso', ()=>{
            cy.get('#search').type("NuevoPaciente")
            cy.get('[name=botonPeso]').click()
            cy.get('[name=numeroPeso]').type(68)
            cy.get('[type=submit]').click()      
        
        });


        // REGISTRO PESO
        it('Al pulsar sobre el botón Registro Peso, se puede ver una lista de los pesos con el peso anterior insertado', ()=>{
            cy.get('#search').type("NuevoPaciente")
            cy.get('[name=botonRegistroPeso]').click()
            cy.contains("Registro Peso de NuevoPaciente")
            cy.contains("68")   
            cy.get('[class=close]').click() 
        
        });

        //REGISTRO COMIDA
        it('Al pulsar sobre el botón Registro Comida, se puede ver una tabla por cada comida del día ', ()=>{
            cy.get('#search').type("NuevoPaciente")
            cy.get('[name=botonRegistroComida]').click()
            cy.contains("Registro Comidas de NuevoPaciente") 
            cy.get('[class=close]').click()
            

        });

        //INFORMACIÓN PACIENTE
        it('Al pulsar sobre el Paciente se ve la información junto las recomendaciones y el peso insertado anteriormente', ()=>{
            cy.get('#search').type("NuevoPaciente")
            cy.contains('NuevoPaciente').click()
            cy.contains('Información de Paciente')
            cy.contains('Recomendaciones')
            cy.contains('68')
            cy.contains('Esto es una recomendación de prueba')
            cy.get('[class=close]').click()


            /*BORRAR USUARIOS DE PRUEBA CREADOS*/
            const userMod = {
                username: 'NuevoMedico'
            } 
            const userPac = {
                username: 'NuevoPaciente'
            } 
            cy.request('POST','http://localhost:8080/api/test/borrarUsuario', userMod)
            cy.request('POST','http://localhost:8080/api/test/borrarUsuario', userPac)
            //--------------------------------------- 
      
        });


});


/*
PROBLEMAS CON LOS HOOKS DE REACT
*/

/*
describe('Vista Paciente',()=>{

    describe('Página Principal',()=>{

        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('NuevoPaciente')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click()  
        });

        it('Contiene Tablón de Actividad',()=>{

            cy.contains('TABLÓN DE ACTIVIDAD')

        });

        it('Contiene Tabla de Clasificación',()=>{

            cy.contains('TABLA CLASIFICACIÓN')
            
        });

        it('Contiene Grafica de Peso',()=>{

            cy.contains('Gráfica Peso')
            
        });

        it('Cerrar Sesión',()=>{
            cy.get('[name=cerrarSesion]').click()   
        });




    });

    describe('Página Nutrición',()=>{

        beforeEach(()=>{  
            
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('NuevoPaciente')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click()
            cy.get('[name=nutricion]').click() 
        });


        it('Se puede buscar e insertar cantidad de alimento ingerido en el dia',()=>{

      
            cy.get('#search').type('Paella marinera')
            cy.get('[name=controlComida]').click().last()
            cy.get('[name=cantidad]').type(120)
            cy.get('[type=submit]').click() 
            
            
  

        });



    });

   describe('Página Recomendaciones',()=>{

        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('NuevoPaciente')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click()  
        });


    });

});*/