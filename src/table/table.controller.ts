import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common"
import { TableService } from "./table.service"

@Controller('tables')
export class TableController {
    constructor(private tableService: TableService) { }

    @Get()
    @HttpCode(200)
    getAllTables() {
        return this.tableService.getTables();
    }

    @Get('/:id')
    @HttpCode(200)
    getTable(@Param('id') id: string) {
        return this.tableService.getTable(id);
    }

    @Post()
    @HttpCode(201)
    createTable(@Body() table: any[]) {
        return this.tableService.createTable(table);
    }

    @Put('/:id')
    @HttpCode(200)
    updateTable(@Param('id') id: string, @Body() table: any[]) {
        return this.tableService.updateTable(id, table);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteTable(@Param('id') id: string) {
        return this.tableService.deleteTable(id);
    }
}