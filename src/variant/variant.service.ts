import { Injectable } from '@nestjs/common';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VariantService {
  constructor(private prisma: PrismaService) { }
  
    create(variant: any) {
      return this.prisma.variant.create({
        data: variant
      })
    }
  
    findAll() {
      return this.prisma.variant.findMany();
    }
  
    findOne(id: string) {
      return this.prisma.variant.findUnique({
        where: {
            id: id,
        }
    })
    }
  
    update(id: string, variant: any) {
      return this.prisma.variant.update({
        where: {
            id: id,
        },
        data: {
            ...variant,
        }
    })
    }
  
    remove(id: string) {
      return this.prisma.variant.delete({
        where: {
            id: id,
        }
    })
    }
}
