import express from 'express';
import cors from 'cors';

class App {
    private app: express.Application;
    private port: Number

    constructor (appInit: { port: number; middleWares: any; routes: any; }) {
        this.app = express();
        this.port = appInit.port;
        this.middleWares(appInit.middleWares);
        this.routes(appInit.routes);
    }

    private middleWares(middleWares: { forEach: (arg: (middleWare:any) => void) => void}){
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        })
    }

    private routes (routes: { forEach: (arg: (route: any) => void) => void}){
        routes.forEach(route => {
            this.app.use('/api/v1', route)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port: ${this.port}`);
        })
    }
}

export default App