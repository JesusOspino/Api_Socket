import { Socket, Server } from "socket.io";
import { User } from "../class/user";
import { UserList } from "../class/user-list";

export const usersConnect = new UserList();

export const desconeccion = (cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log(`Cliente desconectado`);
        usersConnect.borrarUser(cliente.id);
    })
}

// Escuchando mensajes
export const mensaje = (cliente: Socket, io: Server) => {

    cliente.on('mensaje', (payload: any) => {
        console.log(`Mensaje Recibido`, payload);

        io.emit('mensaje-nuevo', payload)
    })
}

// login
export const login = (cliente: Socket) => {

    cliente.on('config-user', (payload: any, callback: Function) => {

        usersConnect.actualizarUsername(cliente.id, payload.username);

        callback({
            ok: true,
            mensaje: `usuario: ${payload.username}, configurado`
        })
        //io.emit('mensaje-nuevo', payload)
    })
}

// Conectar
export const conectarCliente = (cliente: Socket) => {

    const user = new User(cliente.id);
    usersConnect.agregar(user);

}