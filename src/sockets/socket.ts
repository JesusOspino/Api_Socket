import { Socket, Server } from "socket.io";

export const desconeccion = (cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log(`Cliente desconectado`);
    })
}

// Escuchando mensajes
export const mensaje = (cliente: Socket, io: Server) => {

    cliente.on('mensaje', (payload: any) => {
        console.log(`Mensaje Recibido`, payload);

        io.emit('mensaje-nuevo', payload)
    })
}