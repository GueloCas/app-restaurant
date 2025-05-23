import { Module } from '@nestjs/common';
import { AggregateService } from './aggregate.service';
import { AggregateController } from './aggregate.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AggregateController],
  providers: [AggregateService, PrismaService],
})
export class AggregateModule {}
