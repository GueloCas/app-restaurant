import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @HttpCode(201)
  create(@Body() order: any) {
    return this.orderService.create(order);
  }

  @Post('/with-details')
  @HttpCode(201)
  createWithDetails(@Body() order: any) {
    return this.orderService.createWithDetails(order);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() order: any) {
    return this.orderService.update(id, order);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
