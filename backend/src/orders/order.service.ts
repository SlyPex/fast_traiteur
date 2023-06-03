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

  async deleteOrder(orderId: number ): Promise<void> {
    await this.prisma.order.delete({
       where: {
         id: Number(orderId),}
    });
  }

  async updateOrder(orderId: number, accepte: boolean): Promise<void> {
    const order = await this.prisma.order.findFirst(
      {
          where: {
            id : Number(orderId),
          }
      }
    );
    if (accepte) {
      await this.prisma.order.update({
        where:{
          id : Number(orderId),
        },
        data:{
          user_id : Number(order.user_id),
          restaurant_id : Number(order.restaurant_id),
          menu_item : order.menu_item,
          type : order.type,
          state : "in progress...",
          specifications: order.specifications,
        }
      });
    }
  }
}