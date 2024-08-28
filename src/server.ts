import express, { Application, Request, Response } from "express";

export class Server {
    private app: Application
    private port: number
    private host: string

    constructor(host: string, port: number) {
        this.app = express()
        this.port = port
        this.host = host
        this.routes()
    }

    public routes() {
        this.app.get("/", (_req: Request, res: Response) => {
            res.send("Hello World")
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in http://${this.host}:${this.port}`)
        })
    }
}