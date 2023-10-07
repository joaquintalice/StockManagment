import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCashboxhistoryDto {

    @IsNotEmpty()
    @IsNumber()
    total: number;

}
