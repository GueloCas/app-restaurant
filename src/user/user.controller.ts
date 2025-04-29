import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getAllUsers() {
        return this.userService.getUsers()
    }

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(id)
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }

    @Put('/:id')
    putUser(@Param('id') id: string, @Body() role: any[]) {
        return this.userService.updateUser(id, role)
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id)
    }
}
