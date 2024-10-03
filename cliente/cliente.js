const net= require("net");

//Nueva constante de uso para el cliente INSTALACION "npm i readline-sync"
const readline= require("readline-sync")

//CREAR SERVIDOR CON UNA LISTA DE PARAMETROS EN JSON
 const servidor={ 
    port:3000,
    host: 'localhost'

}

//Enlaza la conexion con los parametros del servidor
const client= net.createConnection(servidor);

client.on('connect',()=>{
    console.log("CONEXION EXITOSA")

    //AGREGAR LA FUNCION PARA ESCRIBIR AL SERVIDOR
    sendLine()

})


//RECIBIR EL MENSAJE DEL SERVER
client.on('data',(data)=>{

    console.log('\n***El Servidor envia: '+ data.toString(),'*****\n')
    sendLine()//RESPONDERLE AL SERVIDOR
})

//MOSTRAR ERRORES DE CONEXION
client.on('error',(err)=>{
    console.log("Error de Conexion: ",err.message)
})


//FUNCION LEE LO QUE EL USUARIO ESCRIBE PARA ENVIAR AL SERVER
function sendLine(){
    var line= readline.question('\n Introduce el mensaje: \n')
    if(line==0){
        client.end()
    }else{
        client.write(line) //ENVIA EL MENSAJE ESCRITO EN LINE
    }
}
