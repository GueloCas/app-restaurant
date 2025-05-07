import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { MenuCategoryService } from './menu-category.service';
import { CreateMenuCategoryDto } from './dto/create-menu-category.dto';
import { UpdateMenuCategoryDto } from './dto/update-menu-category.dto';

@Controller('menu-categorys')
export class MenuCategoryController {
  constructor(private readonly menuCategoryService: MenuCategoryService) {}

  @Post()
  @HttpCode(201)
  create(@Body() menuCategory: any) {
    return this.menuCategoryService.create(menuCategory);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.menuCategoryService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.menuCategoryService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() menuCategory: any) {
    return this.menuCategoryService.update(id, menuCategory);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.menuCategoryService.remove(id);
  }
}
