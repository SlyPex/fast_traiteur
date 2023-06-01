import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { OrderService } from 'src/orders/order.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
