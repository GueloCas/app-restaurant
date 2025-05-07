import { Module } from '@nestjs/common';
import { TableModule } from './table/table.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { MenuCategoryModule } from './menu-category/menu-category.module';
import { MenuModule } from './menu/menu.module';
import { AggregateModule } from './aggregate/aggregate.module';
import { VariantModule } from './variant/variant.module';
import { OrderModule } from './order/order.module';
import { OrderMenuDetailModule } from './order-menu-detail/order-menu-detail.module';

@Module({
  imports: [TableModule, RoleModule, UserModule, MenuCategoryModule, MenuModule, AggregateModule, VariantModule, OrderModule, OrderMenuDetailModule],
})
export class AppModule {}
