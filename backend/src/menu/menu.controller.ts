import { Body, Controller, Post,UsePipes, ValidationPipe, } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuDto } from './dto';



@Controller('Menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {
  }

  @Post('CreateMenu')
  @UsePipes(ValidationPipe)
  createmenu(@Body() dto: MenuDto) {
    console.log(dto);
    return this.menuService.createMenu(dto);
  }
}
