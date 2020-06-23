import App from "./App";

import express, { Application} from "express";
import bodyParser from "body-parser";
//middlewares
import requestLogger from "./middleware/request.logger";

//routes
import user from "./routes/user"

//app
const app = new App({
    port: 3333,
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        requestLogger
    ],
    routes: [
        user
    ]
})

app.listen();
