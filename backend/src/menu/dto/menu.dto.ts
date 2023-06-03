import { IsNotEmpty } from "class-validator";

export class MenuDto {
    @IsNotEmpty()
    id_restaurant: number;
}