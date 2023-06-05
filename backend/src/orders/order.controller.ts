import { Body, Controller, Post,Put, Delete, Query, UsePipes, ValidationPipe, } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto';



@Controller('Order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {
  }

  @Post('PassOrder')
  @UsePipes(ValidationPipe)
  passOrder(@Body() dto: OrderDto) {
    console.log(dto);
    return this.orderService.createOrder(dto);
  }

  @Delete('DeleteOrder')
  @UsePipes(ValidationPipe)
  async deleteOrder(@Body() id: number ): Promise<void> {
    await this.orderService.deleteOrder(id) ;
  }

  @Put('AcceptOrder') 
  async updateOrder(@Query('idorder') id: number , @Body() accept: boolean) : Promise<void> {
    await this.orderService.updateOrder(id,accept) ;
  }
}
