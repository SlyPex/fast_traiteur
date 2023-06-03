import { IsNotEmpty, IsString } from "class-validator";

export class MenuItemDto {
  @IsNotEmpty()
  @IsString()
  name : string;

  @IsNotEmpty()
  price : string;

}

export class UpdateMenuItemDto 
{
  name : string | null;
  price : string | null;
}