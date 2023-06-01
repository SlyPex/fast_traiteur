import {Controller, Delete, Param, UsePipes, ValidationPipe, } from '@nestjs/common';
import { OrderService } from './order.service';
@Controller('OrderDelete')
export class OrderDeleteController {
  constructor(private readonly orderService: OrderService) {
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteOrder(@Param('id') id: number ): Promise<void> {
    await this.orderService.deleteOrder(id) ;
  }
} 

