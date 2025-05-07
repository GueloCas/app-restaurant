import { Module } from '@nestjs/common';
import { MenuCategoryService } from './menu-category.service';
import { MenuCategoryController } from './menu-category.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MenuCategoryController],
  providers: [MenuCategoryService, PrismaService],
})
export class MenuCategoryModule {}
