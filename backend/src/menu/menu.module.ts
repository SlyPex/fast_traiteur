import { Module } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { MenuController } from "./menu.controller";

@Module({
    providers : [ MenuService ],
    imports : [PrismaModule],
    controllers : [MenuController],
})
export class MenuModule{}