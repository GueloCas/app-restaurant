import { Module } from '@nestjs/common';
import { TableModule } from './table/table.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TableModule, RoleModule, UserModule],
})
export class AppModule {}
