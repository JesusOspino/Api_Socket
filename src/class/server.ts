import express from 'express';
import { PORT } from '../global/environment';
import socketIo from 'socket.io';
import http from 'http';
import * as socket from "../sockets/socket";

export default class Server {

    private static _intance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIo.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = PORT;

        this.httpServer = http.createServer(this.app);
        this.io = new socketIo.Server(this.httpServer, { cors: { origin: '*' } });

        this.escucharSocket();
    }

    public static get instance() {
        return this._intance || (this._intance = new this());
    }

    private escucharSocket() {

        this.io.on('connection', cliente => {
            console.log(`Nuevo cliente conectado`);

            // Mensajes
            socket.mensaje(cliente, this.io);

            // Desconectar
            socket.desconeccion(cliente);

        })

    }

    start(callback: any): void {
        this.httpServer.listen(this.port, callback);
    }
}