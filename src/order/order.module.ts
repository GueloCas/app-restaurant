import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/prisma.service';
import { OrderMenuDetailModule } from 'src/order-menu-detail/order-menu-detail.module';

@Module({
  controllers: [OrderController],
  imports: [OrderMenuDetailModule],
  providers: [OrderService, PrismaService],
})
export class OrderModule {}
