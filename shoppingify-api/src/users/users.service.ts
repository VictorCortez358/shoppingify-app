import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) {}

    async createUser(data: any) {
        return this.prismaService.user.create({
            data,
        });
    }

    async getOneUser(id: string): Promise<User>{
        return this.prismaService.user.findUnique({
            where:{
                id
            },
            include:{
                lists: true
            }
        })
    }

    async getUserByEmail(email: string) {
        return this.prismaService.user.findUnique({
            where: {
                email,
            }
        });
    }
} 
