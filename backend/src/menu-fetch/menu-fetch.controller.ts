import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { MenuFetchService } from './menu-fetch.service';

@Controller('getMenu')
export class MenuFetchController {
	constructor(private menuFetch: MenuFetchService){}

	@Get('')
	fetchMenuItems(@Query('RestaurantId',ParseIntPipe) resId: number){
		return this.menuFetch.getMenu(resId);
	}
}
