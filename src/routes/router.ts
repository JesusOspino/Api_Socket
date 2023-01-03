import { Router, Request, Response } from "express";

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'Todo exelente!'
    })
})

router.post('/mensajes', (req: Request, res: Response) => {
    const data = req.body;

    res.json({
        ok: true,
        data
    })
})

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const data = req.body;
    const id = req.params.id;

    res.json({
        ok: true,
        data,
        id
    })
})

export default router;