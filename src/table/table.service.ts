import { Injectable } from "@nestjs/common"

@Injectable()
export class TableService {
    getTables() {
        return 'Obteniendo mesas';
    }
}