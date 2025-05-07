import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma.service";
import { CreateMenuCategoryDto } from './dto/create-menu-category.dto';
import { UpdateMenuCategoryDto } from './dto/update-menu-category.dto';

@Injectable()
export class MenuCategoryService {
  constructor(private prisma: PrismaService) { }

  create(menuCategory: any) {
    return this.prisma.menuCategory.create({
      data: menuCategory
    })
  }

  findAll() {
    return this.prisma.menuCategory.findMany();
  }

  findOne(id: string) {
    return this.prisma.menuCategory.findUnique({
      where: {
          id: id,
      }
  })
  }

  update(id: string, menuCategory: any) {
    return this.prisma.menuCategory.update({
      where: {
          id: id,
      },
      data: {
          ...menuCategory,
      }
  })
  }

  remove(id: string) {
    return this.prisma.menuCategory.delete({
      where: {
          id: id,
      }
  })
  }
}
