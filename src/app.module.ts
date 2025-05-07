import { Module } from '@nestjs/common';
import { TableModule } from './table/table.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { MenuCategoryModule } from './menu-category/menu-category.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [TableModule, RoleModule, UserModule, MenuCategoryModule, MenuModule],
})
export class AppModule {}
