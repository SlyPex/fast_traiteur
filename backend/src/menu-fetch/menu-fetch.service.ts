import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class MenuFetchService {
	constructor(private prisma:PrismaService){}
	async getMenu(id:number){
		const restaurant = await this.prisma.restaurant.findUnique({
			where: {
				id:id
			},select:{
				id_menu: true
			}
		})
		if(!restaurant){
			throw new NotFoundException('No Restaurant Found');
		}
		const menu = await this.prisma.menuItem.findMany({
			where:{
				menu_id: restaurant.id_menu
			}
		})

		if(!menu){
			throw new NotFoundException('No Menu Found')
		}
		return menu;
	}

}
