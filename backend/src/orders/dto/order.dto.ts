import { IsNotEmpty } from "class-validator";

export class OrderDto {
  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  restaurant_id: number;

  @IsNotEmpty()
  menu_item: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  state: string;

  specifications: string | null;
}