import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) { }
  
    create(order: any) {
      return this.prisma.order.create({
        data: order
      })
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
