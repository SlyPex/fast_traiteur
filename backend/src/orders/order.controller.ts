import { Body, Controller, Post, Put, Query, UsePipes, ValidationPipe, } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';



@Controller('Order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {
  }
  
  @Post('PassOrder')
  @UsePipes(ValidationPipe)
  passOrder (@Body() dto: OrderDto) {
    console.log(dto);
    return this.orderService.createOrder(dto) ;
  }
}
