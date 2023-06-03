import { ParseFloatPipe } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator";

export class MenuItemDto {
  @IsNotEmpty()
  @IsString()
  name : string;

  @IsNotEmpty()
  price : number;
}

export class UpdateMenuItemDto 
{
  name : string | null;
  price : string | null;
}