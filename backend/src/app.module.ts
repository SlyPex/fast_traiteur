import { Module } from '@nestjs/common';
import { MenuFetchService } from './menu-fetch/menu-fetch.service';
import { MenuFetchController } from './menu-fetch/menu-fetch.controller';
import { MenuFetchModule } from './menu-fetch/menu-fetch.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrderModule } from './orders/order.module';
import { MenuItemModule } from './menuitem/menuitem.module';
import { MenuModule } from './menu/menu.module';

@Module({
  providers: [],
  controllers: [],
  imports: [MenuFetchModule,PrismaModule,OrderModule,MenuItemModule,MenuModule]
  })
export class AppModule {}
