import { Module } from '@nestjs/common';
import { MenuItemController } from './menuitem.controller';
import { MenuItemService } from './menuitem.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MenuItemController],
  providers: [MenuItemService],
})
export class MenuItemModule {}
