import { Module } from '@nestjs/common';
import { MenuFetchService } from './menu-fetch/menu-fetch.service';
import { MenuFetchController } from './menu-fetch/menu-fetch.controller';
import { MenuFetchModule } from './menu-fetch/menu-fetch.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrderModule } from './orders/order.module';

@Module({
  providers: [MenuFetchService],
  controllers: [MenuFetchController],
  imports: [MenuFetchModule,PrismaModule,OrderModule]
export class AppModule {}
