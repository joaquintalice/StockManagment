import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export default class CreateCashboxDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsString()
    @IsOptional()
    description?: string

}
