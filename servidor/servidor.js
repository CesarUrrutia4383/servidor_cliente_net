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
    socket.on(close,()=>{
        console.log("CONEXION FINALIZADA")
    })
})