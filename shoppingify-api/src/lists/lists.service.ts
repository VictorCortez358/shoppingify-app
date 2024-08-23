import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ListsService{
    constructor(private prismaService: PrismaService) {}

    
}