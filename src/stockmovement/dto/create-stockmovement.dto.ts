import { IsNotEmpty, IsNumber } from "class-validator";

export default class CreateStockmovementDto {

    @IsNumber()
    @IsNotEmpty()
    total: number


}
