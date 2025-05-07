import { Module } from '@nestjs/common';
import { OrderMenuDetailService } from './order-menu-detail.service';
import { OrderMenuDetailController } from './order-menu-detail.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrderMenuDetailController],
  providers: [OrderMenuDetailService, PrismaService],
})
export class OrderMenuDetailModule {}
