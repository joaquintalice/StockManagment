import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export default class CreateStockMovementDetailDto {

    @IsString()
    @IsNotEmpty()
    prodName: string;

    @IsNumber()
    @IsNotEmpty()
    stockMovementId: number;


    @IsString()
    @IsNotEmpty()
    unit: string

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    quantity: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    buyPrice: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    sellPrice: number;


}
