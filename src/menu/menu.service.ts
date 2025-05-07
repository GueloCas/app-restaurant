import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) { }

  create(menu: any) {
    return this.prisma.menu.create({
      data: menu
    })
  }

  findAll() {
    return this.prisma.menu.findMany();
  }

  findOne(id: string) {
    return this.prisma.menu.findUnique({
      where: {
          id: id,
      }
  })
  }

  update(id: string, menu: any) {
    return this.prisma.menu.update({
      where: {
          id: id,
      },
      data: {
          ...menu,
      }
  })
  }

  remove(id: string) {
    return this.prisma.menu.delete({
      where: {
          id: id,
      }
  })
  }
}
