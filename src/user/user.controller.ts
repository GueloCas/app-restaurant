import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    @HttpCode(200)
    getAllUsers() {
        return this.userService.getUsers()
    }

    @Get('/:id')
    @HttpCode(200)
    getUser(@Param('id') id: string) {
        return this.userService.getUser(id)
    }

    @Post()
    @HttpCode(201)
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }

    @Put('/:id')
    @HttpCode(200)
    putUser(@Param('id') id: string, @Body() user: any[]) {
        return this.userService.updateUser(id, user)
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id)
    }
}
