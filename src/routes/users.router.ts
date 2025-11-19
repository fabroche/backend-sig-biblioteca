import {Router} from "express";
import {prisma} from "@lib/prisma";

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
    const {name, email} = req.query

    const user = await prisma.user.create({
        data: {
            name: String(name),
            email: String(email),
        }
    })

    res.send(user);
});


export {usersRouter};