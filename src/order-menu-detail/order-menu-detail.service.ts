import { Injectable } from '@nestjs/common';
import { CreateOrderMenuDetailDto } from './dto/create-order-menu-detail.dto';
import { UpdateOrderMenuDetailDto } from './dto/update-order-menu-detail.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderMenuDetailService {
  constructor(private prisma: PrismaService) { }
  
    create(orderMenuDetail: any) {
      return this.prisma.orderMenuDetail.create({
        data: orderMenuDetail
      })
    }
  
    findAll() {
      return this.prisma.orderMenuDetail.findMany();
    }
  
    findOne(id: string) {
      return this.prisma.orderMenuDetail.findUnique({
        where: {
            id: id,
        }
    })
    }
  
    update(id: string, orderMenuDetail: any) {
      return this.prisma.orderMenuDetail.update({
        where: {
            id: id,
        },
        data: {
            ...orderMenuDetail,
        }
    })
    }
  
    remove(id: string) {
      return this.prisma.orderMenuDetail.delete({
        where: {
            id: id,
        }
    })
    }
}
