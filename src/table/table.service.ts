import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma.service";

@Injectable()
export class TableService {
    constructor(private prisma: PrismaService) { }
    
    getTables() {
        return this.prisma.table.findMany();
    }

    getTable(id: string) {
        return this.prisma.table.findUnique({
            where: {
                id: id,
            }
        })
    }

    createTable(table: any) {
        return this.prisma.table.create({
            data: table
        })
    }

    updateTable(id: string, table: any) {
        return this.prisma.table.update({
            where: {
                id: id,
            },
            data: {
                ...table,
            }
        })
    }

    deleteTable(id: string) {
        return this.prisma.table.delete({
            where: {
                id: id,
            }
        })
    }
}