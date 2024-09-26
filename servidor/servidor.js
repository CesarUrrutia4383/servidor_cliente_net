//DECLARAR LAS CONSTANTES
const net =require("net");

//CREAR EL SERVIDOR
const server = net.createServer()

//"Enciende el servidor para escuchar los datos"
server.on('connection',(socket)=>{
    socket.on('data',(data)=>{
        console.log("Mensaje del Cliente: "+data)
        socket.write("MENSAJE RECIBIDO")
    })
//FINALIZAR LA COMUNICACION DEL CLIENTE
    socket.on('close',()=>{
        console.log("CONEXION FINALIZADA")
    })
    //Conexion con Errores
    socket.on('error',(err)=>{
        console.log("Error de conexion: "+err)
    })
})
server.listen(3000,()=>{
    console.log("SERVIDOR FUNCIONANDO EN EL PUERTO: ", server.address().port)
})