import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Get()
    @HttpCode(200)
    getAllRoles() {
        return this.roleService.getRoles() 
    }

    @Get('/:id')
    @HttpCode(200)
    getRole(@Param('id') id: string) {
        return this.roleService.getRole(id)
    }

    @Post()
    @HttpCode(201)
    createRole(@Body() role: CreateRoleDto){
        return this.roleService.createRole(role)
    }

    @Put('/:id')
    @HttpCode(200)
    putRole(@Param('id') id: string, @Body() role: CreateRoleDto) {
        return this.roleService.updateRole(id, role)
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteRole(@Param('id') id: string) {
        return this.roleService.deleteRole(id)
    }
}
