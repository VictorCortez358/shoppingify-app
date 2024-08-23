import { Controller } from "@nestjs/common";
import { ListsService } from "./lists.service";

@Controller("lists")
export class ListsControllers{
    constructor(readonly listsService: ListsService) { }
}