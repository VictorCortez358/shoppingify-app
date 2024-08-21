import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) {}

    async createUser(data: any) {
        return this.prismaService.user.create({
            data,
        });
    }

    async getUserByEmail(email: string) {
        return this.prismaService.user.findUnique({
            where: {
                email,
            },
        });
    }
} 
