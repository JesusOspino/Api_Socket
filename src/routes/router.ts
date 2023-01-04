import { Router, Request, Response } from "express";
import Server from "../class/server";


const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'Todo exelente!'
    })
})

router.post('/mensajes', (req: Request, res: Response) => {
    const data = req.body;

    const payload = {
        de: data.de,
        cuerpo: data.cuerpo
    }

    const server = Server.instance;
    server.io.emit('nuevo-mensaje', payload)

    res.json({
        ok: true,
        data
    })
})

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const data = req.body;
    const id = req.params.id;

    const payload = {
        de: data.de,
        cuerpo: data.cuerpo
    }

    const server = Server.instance;
    server.io.in(id).emit('mensaje-privado', payload);

    res.json({
        ok: true,
        data,
        id
    })
})

export default router;