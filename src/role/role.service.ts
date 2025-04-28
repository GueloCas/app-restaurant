import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
    constructor(private prisma: PrismaService){}

    getRoles(){
        return this.prisma.role.findMany();
    }

    getRole(id: string) {
        return this.prisma.role.findUnique({
            where: {
              id: id,
            },
        })
    }

    createRole(role: CreateRoleDto) {
        return this.prisma.role.create({ data: role })
    }

    updateRole(id: string, role: CreateRoleDto) {
        return this.prisma.role.update({
            where: {
                id: id,
            },
            data: {
                ...role,
            }
        })
    }

    deleteRole(id: string){
        return this.prisma.role.delete({
            where: {
                id: id,
              },
        })
    }
}
