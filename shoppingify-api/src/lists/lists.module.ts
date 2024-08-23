import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";
import { ListsService } from "./lists.service";

@Module({
    imports: [PrismaModule],
    providers: [ListsService,PrismaService],
    exports: [ListsService],
    controllers: []
})

export class ListsModule {}