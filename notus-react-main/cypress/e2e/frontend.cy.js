describe('WELCOME',()=> {

    it('Se puede abrir la página',()=>{
        cy.visit('http://localhost:8081/')
        cy.contains('Login')
    });
});

describe('Página Inicio Sesión',()=> {

    beforeEach(()=>{
        cy.visit('http://localhost:8081/')
    })

    it('Saltan las validaciones al no insertar nada',()=>{
        cy.get('[name=login]').click()
        cy.contains('*Este campo es obligatorio')    
    });

    it('Saltan las validaciones al insertar un usuario sin contraseña',()=>{
        cy.get('[name=username]').type('admin')
        cy.get('[name=login]').click()
        cy.contains('*Este campo es obligatorio')    
    });
    it('Saltan las validaciones al insertar un usuario no existente',()=>{
        cy.get('[name=username]').type('usuarioNoExistente')
        cy.get('[name=password]').type('usuarioNoExistente')
        cy.get('[name=login]').click()
        cy.contains('User Not found.')    
    });
    it('Saltan las validaciones al insertar una contraseña incorrecta',()=>{
        cy.get('[name=username]').type('admin')
        cy.get('[name=password]').type('admin')
        cy.get('[name=login]').click()
        cy.contains('Invalid Password!')    
    });
    it('Se inicia correctamente al poner datos correctos',()=>{
        cy.get('[name=username]').type('admin')
        cy.get('[name=password]').type('123456')
        cy.get('[name=login]').click()
        cy.contains('Registrar Usuario')    
    });
});


describe('Vista Admin',()=> {

    describe('Página Registrar Usuario',()=>{
        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('admin')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click()  
        });
    
        it('Al no insertar nada, saltan los campos obligatorios',()=>{
            cy.get('[name=registrar]').click()
            cy.contains('*Este campo es obligatorio')
        });
    
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

    describe('Página Vincular Médico-Paciente',()=>{

        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('admin')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click() 
            cy.get('[name=pagVincular]').click() 
        });
    
        it('Al poner el nombre usuario del Médico se encuentra en la lista', ()=>{
            cy.get('#search').type("NuevoMedico")            
            cy.contains('NuevoMedico')
        
        });

        it('Al pulsar en el botón añadir se puede vincular usuario insertando DNI del paciente', ()=>{
            cy.get('#search').type("NuevoMedico")
            cy.get('[name=botonVincular]').click()
            cy.get('[name=dni]').type('96476606R')
            cy.get('[type=submit]').click()             
        
        });

        it('Al pulsar sobre la fila se ve una lista con el paciente vinculado', ()=>{
            cy.get('#search').type("NuevoMedico")
            cy.contains('Prueba').click()
            cy.contains('Paciente')
            cy.get('[class=close]').click()
    
        });


    })


    describe('Cerrar Sesión',()=>{
        beforeEach(()=>{
            cy.visit('http://localhost:8081/')
            cy.get('[name=username]').type('admin')
            cy.get('[name=password]').type('123456')
            cy.get('[name=login]').click() 
        });

        it('Al pulsar boton se cierra la sesión', ()=>{
            cy.get('[name=cerrarSesion]').click()
    
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

    })
    

  




});