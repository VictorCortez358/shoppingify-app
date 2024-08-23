import { Controller, Get, Param, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('users')
export class UsersController {
    constructor(readonly usersService: UsersService) { }

    @UseGuards(AuthGuard)
    @Get(':id')
    async findUser(@Param("id") id: string){
        return this.usersService.getOneUser(id)
    }   
}

