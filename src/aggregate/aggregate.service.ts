import { Injectable } from '@nestjs/common';
import { CreateAggregateDto } from './dto/create-aggregate.dto';
import { UpdateAggregateDto } from './dto/update-aggregate.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AggregateService {
  constructor(private prisma: PrismaService) { }
  
    create(aggregate: any) {
      return this.prisma.aggregate.create({
        data: aggregate
      })
    }
  
    findAll() {
      return this.prisma.aggregate.findMany();
    }
  
    findOne(id: string) {
      return this.prisma.aggregate.findUnique({
        where: {
            id: id,
        }
    })
    }
  
    update(id: string, aggregate: any) {
      return this.prisma.aggregate.update({
        where: {
            id: id,
        },
        data: {
            ...aggregate,
        }
    })
    }
  
    remove(id: string) {
      return this.prisma.aggregate.delete({
        where: {
            id: id,
        }
    })
    }
}
