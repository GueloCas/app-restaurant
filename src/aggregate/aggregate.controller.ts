import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { AggregateService } from './aggregate.service';
import { CreateAggregateDto } from './dto/create-aggregate.dto';
import { UpdateAggregateDto } from './dto/update-aggregate.dto';

@Controller('aggregates')
export class AggregateController {
  constructor(private readonly aggregateService: AggregateService) {}

  @Post()
  @HttpCode(201)
  create(@Body() aggregate: any) {
    return this.aggregateService.create(aggregate);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.aggregateService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.aggregateService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() aggregate: any) {
    return this.aggregateService.update(id, aggregate);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.aggregateService.remove(id);
  }
}
