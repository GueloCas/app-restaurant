import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import { OrderMenuDetailService } from 'src/order-menu-detail/order-menu-detail.service';
import { log } from 'console';

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private orderMenuDetailService: OrderMenuDetailService,
  ) { }

  create(order: any) {
    return this.prisma.order.create({
      data: order
    })
  }

  async createWithDetails(order: any) {
    const { details, ...orderData } = order;

    const newOrder = await this.prisma.order.create({ data: orderData });

    const menuItems = await this.prisma.menu.findMany({
      where: {
        id: { in: details.map(detail => detail.menu_id) }
      },
      select: {
        id: true,
        name: true,
        price: true
      }
    });

    const priceMap = menuItems.reduce((acc, item) => {
      acc[item.id] = item.price;
      return acc;
    }, {} as Record<string, number>)

    let total = 0;
    for (const detail of details) {
      const price = priceMap[detail.menu_id] || 0;
      total += price * detail.quantity;

      await this.orderMenuDetailService.create({
        ...detail,
        detail_price: price,
        order_id: newOrder.id,
      })
    }

    if(total !== orderData.total){
      await this.prisma.order.update({
        where: { id: newOrder.id },
        data: { total }
      })
    }

    return 'Orden creada con exito'
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: {
        id: id,
      }
    })
  }

  update(id: string, order: any) {
    return this.prisma.order.update({
      where: {
        id: id,
      },
      data: {
        ...order,
      }
    })
  }

  remove(id: string) {
    return this.prisma.order.delete({
      where: {
        id: id,
      }
    })
  }
}
