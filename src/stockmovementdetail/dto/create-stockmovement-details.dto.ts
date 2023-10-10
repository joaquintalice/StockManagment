import { IsNotEmpty, IsNumber, Min } from "class-validator";

export default class CreateStockMovementDetailDto {

    @IsNumber()
    @IsNotEmpty()
    prodId: number;

    @IsNumber()
    @IsNotEmpty()
    stockMovementId: number;

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
