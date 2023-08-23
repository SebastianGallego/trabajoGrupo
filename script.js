//Actividad:
// inicio de sesión: Permitir a los usuarios iniciar sesión con sus credenciales 
// (nombre de usuario y contraseña) para acceder a su cuenta bancaria.


// Información de la cuenta: Mostrar información relevante de la cuenta del usuario, 
// como el saldo disponible, el número de cuenta, el nombre del titular, etc.


// Consulta de movimientos: Permitir a los usuarios ver los movimientos de su cuenta, 
// como transacciones, depósitos, retiros, pagos, etc.

// Transferencias: Permitir a los usuarios realizar transferencias de dinero entre 
// sus cuentas o a cuentas de terceros.


// Pagos de servicios: Permitir a los usuarios pagar servicios como facturas de luz, 
// agua, teléfono, etc.

// Cambio de contraseña: Permitir a los usuarios cambiar su contraseña para mantener su 
// cuenta segura.


// Cierre de sesión: Permitir a los usuarios cerrar sesión en su cuenta para proteger 
// su privacidad.


// Validación de datos: Asegurarse de que los datos ingresados por los usuarios 
// sean válidos y seguros antes de realizar cualquier operación.

// Claudio Rohr , José Aput , Ruben Montes , Karen Tosco , Sebastian Gallego


let usuarios = [
    
    {
        usr: 'usuario1',
        pass: 'pass1',
        nombre: 'juan',
        apellido:'perez' ,
        email: 'juanperez@gmail.com',
        alias: 'juanperez', 
        cuenta: {
                 cbu: '12345678',
                 saldo: 0,
                 ultimosMovimientos: [],
                },
    },
    
    {
        usr: 'usuario2',
        pass: 'pass2',
        nombre: 'pedro',
        apellido:'gomez',
        email: 'pedrogomez@gmail.com',
        alias: 'pedrogomez',
        cuenta: {
                cbu: '12344321',
                saldo: 0,
                ultimosMovimientos: [],
                } 
    },

    {
        usr: 'usuario3',
        pass: 'pass3',
        nombre: 'luis',
        apellido:'castro',
        email: 'luiscastro@gmail.com',
        alias: "luiscastro", 
        cuenta: {
            cbu: '87654321',
            saldo: 0,
            ultimosMovimientos: [],
            }
    }
   

]

  

  
  
  function ejecutarMain() {

      const usuarioValido = validarUsuario();

      if (usuarioValido) {
        
        mostrarMenu();  
        menuIngresado = prompt("ingrese una opción de Menú: \n a - Información de la cuenta \n b - Consulta de Movimientos \n c - Transferencias \n d - Pago de Servicios \n e - Cambio de Contraseña \n f - Salir del programa"); 
      
        if (menuIngresado=== null) {
            console.log('Operación cancelada.');
            return;
            }
  
    }
  
    }
  
    function mostrarMenu() {
        console.log('Menú');
        console.log('a - Información de la cuenta');
        console.log('b - Consulta de Movimientos');
        console.log('c - Transferencias');
        console.log('d - Pago de Servicios');
        console.log('e - Cambio de Contraseña');
        console.log('f - Cerrar Sesion');
      }
    


      
   function validarUsuario() { 

    const nombreUsuario = prompt("ingrese el nombre de Usuario: ");  


    const passUsuario = prompt("ingrese la Contraseña: ");  


   }




   function consultaMovimientos() {


   }



   function transferencias() {


   }


   function pagoServicios() {


   }


   function cambioContraseña() {


   }





  document.addEventListener('DOMContentLoaded', function () {
    ejecutarMain();
  });
