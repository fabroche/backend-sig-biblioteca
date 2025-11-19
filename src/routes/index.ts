import {Router} from "express";
import {booksRouter} from "./books.router";
import {usersRouter} from "./users.router";


const router = Router();
router.use("/books", booksRouter);
router.use("/users", usersRouter);


export default router;