import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { OrderMenuDetailService } from './order-menu-detail.service';
import { CreateOrderMenuDetailDto } from './dto/create-order-menu-detail.dto';
import { UpdateOrderMenuDetailDto } from './dto/update-order-menu-detail.dto';

@Controller('order-menu-details')
export class OrderMenuDetailController {
  constructor(private readonly orderMenuDetailService: OrderMenuDetailService) {}

  @Post()
  @HttpCode(201)
  create(@Body() orderMenuDetail: any) {
    return this.orderMenuDetailService.create(orderMenuDetail);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.orderMenuDetailService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.orderMenuDetailService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() orderMenuDetail: any) {
    return this.orderMenuDetailService.update(id, orderMenuDetail);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.orderMenuDetailService.remove(id);
  }
}
