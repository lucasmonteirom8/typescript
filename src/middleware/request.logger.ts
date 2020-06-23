
import {Request, Response, NextFunction} from 'express';

const requestLogger = (req: Request, res: Response, next: NextFunction ) => {
    res.on('error', (e) => {
        console.log(e)
    });
    const start = new Date().getTime();
    res.on('finish', () => {
        const elapsed = new Date().getTime() - start;
        console.info(`Requested Logged ===> ${req.method} ${req.path} ${res.statusCode} ${elapsed}ms`)
    });
    next();
};

export default requestLogger;