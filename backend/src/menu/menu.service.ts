import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MenuDto } from './dto';
import { Prisma } from '.prisma/client';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async createMenu(dto: MenuDto): Promise<MenuDto> {
    const menuData: Prisma.MenuCreateInput = {
    Restaurant : {connect :{id :Number(dto.id_restaurant)}}   
    }

    const createdMenu = await this.prisma.menu.create({
      data: menuData,
    });

    return ; 
  }
}
