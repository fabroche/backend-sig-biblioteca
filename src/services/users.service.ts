import {prisma} from "@lib/prisma";
import {UserCreateInput, UserUpdateInput} from "../../generated/prisma/models/User";


class UsersService {
    constructor() {
    }

    async getAllUsers() {
        return prisma.user.findMany();
    }

    async getUserById(id: string) {
        return prisma.user.findFirst({
            where: {
                id
            }
        });
    }

    async getUserByEmail(email: string) {
        return prisma.user.findFirst({
            where: {
                email
            }
        });
    }

    async createUser(data: UserCreateInput) {
        return prisma.user.create({
            data
        });
    }

    async updateUser(id: string, data: UserUpdateInput) {
        return prisma.user.update({
            where: {
                id
            },
            data
        });
    }

    async deleteUser(id: string) {
        return prisma.user.delete({
            where: {
                id
            }
        });
    }
}

export {UsersService}