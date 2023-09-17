import { IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export default class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsDecimal() // Change to @IsNumber() if there's problems
    @IsNotEmpty()
    buyPrice: number;

    @IsDecimal() // Change to @IsNumber() if there's problems
    @IsNotEmpty()
    sellPrice: number;

    @IsNumber()
    @IsNotEmpty()
    warehouseId: number
}