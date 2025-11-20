import {Router} from "express";
import {UsersService} from "@/services/users.service";

const usersRouter = Router();
const usersService = new UsersService();

usersRouter.get("/", async (req, res) => {
    const users = await usersService.getAllUsers();
    res.send(users);
});


export {usersRouter};