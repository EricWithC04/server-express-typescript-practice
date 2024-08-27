import express from "express";
import { Express } from "express";

const app: Express = express()
const PORT = 3000

app.get("/", (_req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log("Server running in port 3000")
})