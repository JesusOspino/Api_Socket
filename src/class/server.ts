import express from 'express';
import { PORT } from '../global/environment';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = PORT;
    }

    start(callback: any): void {
        this.app.listen(this.port, callback);
    }
}