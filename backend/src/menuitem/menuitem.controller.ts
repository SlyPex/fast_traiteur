import { Body, Controller, Delete, Post, Put, Query, UsePipes, ValidationPipe, } from '@nestjs/common';
import { MenuItemService } from './menuitem.service';
import {MenuItemDto, UpdateMenuItemDto } from './dto';



@Controller('Menu')
export class MenuItemController {
  constructor(private readonly menuitemService: MenuItemService) {
  }

  @Post('addItem')
  @UsePipes(ValidationPipe)
  createMenuItem(
    @Query('menuID') menu_id: number,
    @Body() dto: MenuItemDto) {
    console.log(dto);
    return this.menuitemService.createMenuItem(menu_id,dto);
  }

  @Put('updateMenuItem')
  async updateMenuItem(
    @Query('menuId') menu_id: number,
    @Query('menuItemId') id: number,
    @Body() updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<void> {
    await this.menuitemService.updateMenuItem(id, updateMenuItemDto);
  }

  @Delete('deleteItem')
  async deleteMenuItem(
    @Query('menuId') menu_id: number,
    @Query('menuItemId') id: number,
  ): Promise<void> {
    await this.menuitemService.deleteMenuItem(id);
  }
}
