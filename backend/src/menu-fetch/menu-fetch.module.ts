import { Module } from '@nestjs/common';
import { MenuFetchController } from './menu-fetch.controller';
import { MenuFetchService } from './menu-fetch.service';

@Module({
	controllers:[MenuFetchController],
	providers:[MenuFetchService]
})
export class MenuFetchModule {}
