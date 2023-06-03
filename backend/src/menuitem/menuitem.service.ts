import { Injectable} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MenuItemDto, UpdateMenuItemDto } from './dto';
import { Prisma } from '.prisma/client';

@Injectable()
export class MenuItemService {
  constructor(private prisma: PrismaService) {}

  async createMenuItem(menu_id : number, dto: MenuItemDto): Promise<MenuItemDto> {
    const menuItemData: Prisma.MenuItemCreateInput = {
        name : dto.name,
        price : Number(dto.price),
        menu : {connect: {id: Number(menu_id)}}
    }
    const createdMenuItem = await this.prisma.menuItem.create({
      data: menuItemData,
    });

    return ;
  }

  async updateMenuItem( id: number, updateMenuItemDto:UpdateMenuItemDto): Promise<void> {

    //Search for the menu item 
    const menuitem = await this.prisma.menuItem.findFirst({
      where: {
        id: Number(id)
      },
    });

    // Throw exception if the item does not exist
    if (!menuitem) {
      throw new Error('Menu item not found.');
    };

    //Update the menu item
    if (updateMenuItemDto.name == null)
    {
      await this.prisma.menuItem.update({
        where: {
          id: Number(id),
        },
        data: {
          price: Number(updateMenuItemDto.price)
        }
      })  
    }
    else{
      if (updateMenuItemDto.price == null){
        await this.prisma.menuItem.update({
          where: {
            id: Number(id),
          },
          data: {
            name : updateMenuItemDto.name
          }
        })  
      }

      else 
      {
        await this.prisma.menuItem.update({
          where: {
            id: Number(id),
          },
          data: {
            name : updateMenuItemDto.name,
            price: Number(updateMenuItemDto.price)
          }
        })  
      }
    }
  }

  async deleteMenuItem(id: number): Promise<void> {
    const item = await this.prisma.menuItem.delete(
      {
        where: {
          id : Number(id),
      }
    }
    )
  }
}
