import { Controller, Get } from "@nestjs/common"
import { TableService } from "./table.service"

@Controller({})
export class TableController {
    constructor(private tableService: TableService) {}

    @Get('/table')
    getAllTables() {
        return this.tableService.getTables();
    }
}