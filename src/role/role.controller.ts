import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Get()
    getAllRoles() {
        return this.roleService.getRoles() 
    }

    @Get('/:id')
    getRole(@Param('id') id: string) {
        return this.roleService.getRole(id)
    }

    @Post()
    createRole(@Body() role: CreateRoleDto){
        return this.roleService.createRole(role)
    }

    @Put('/:id')
    putRole(@Param('id') id: string, @Body() role: CreateRoleDto) {
        return this.roleService.updateRole(id, role)
    }

    @Delete('/:id')
    deleteRole(@Param('id') id: string) {
        return this.roleService.deleteRole(id)
    }
}
