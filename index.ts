import Server from "./src/class/server";
import router from "./src/routes/router";
import bodyParser from "body-parser";
import cors from "cors";

const server = Server.instance;

// Body Parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// Cors
server.app.use(cors({ origin: true, credentials: true }))

// Rutas
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
