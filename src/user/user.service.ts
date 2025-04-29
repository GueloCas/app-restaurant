import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    getUsers() {
        return this.prisma.user.findMany();
    }

    getUser(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id: id,
            },
        })
    }

    createUser(user: CreateUserDto) {
        return this.prisma.user.create({ data: user });
    }

    updateUser(id: string, user: any) {
        return this.prisma.user.update({
            where: {
                id: id,
            },
            data: {
                ...user,
            }
        })
    }

    deleteUser(id: string) {
        return this.prisma.user.delete({
            where: {
                id: id,
            },
        })
    }
}
