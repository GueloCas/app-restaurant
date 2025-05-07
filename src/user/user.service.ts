import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

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

    async createUser(user: CreateUserDto) {
        const encryptPassword = await bcrypt.hash(user.password, 5);

        return this.prisma.user.create({ 
            data: {
                email: user.email,
                username: user.username,
                name: user.name,
                password: encryptPassword,
                role_id: user.role_id,
            },
        });
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
