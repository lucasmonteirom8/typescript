import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
    public async list (req: Request, res: Response): Promise<Response> {
        const allUser = await prisma.user.findMany()

        if (!allUser) {
            return res.status(404).json({ message: "Doesn't have any user"})
        }

        return res.json(allUser)
    }

    public async create (req: Request, res: Response): Promise<Response> {
        const newUser = await prisma.user.create({
            data: {
                ...req.body,
            },
        })

        if (!newUser) {
            return res.status(404).json({ message: "Invalid user"})
        }
        
        return res.status(201).json({ message: "User created"})
    }
}

export default UserController;