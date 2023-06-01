import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './dto';
import { Prisma } from '.prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(dto: OrderDto): Promise<OrderDto> {
    const orderData: Prisma.OrderCreateInput = {
      user: { connect: { id: Number(dto.user_id) } },
      restaurant: { connect: { id: Number(dto.restaurant_id) } },
      menu_item: dto.menu_item,
      quantity: Number(dto.quantity),
      type: dto.type,
      state: dto.state,
      specifications: dto.specifications || null,
    };

    const createdOrder = await this.prisma.order.create({
      data: orderData,
    });

    return createdOrder;
  }
}
