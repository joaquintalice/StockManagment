import {
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export default class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  unit: string

  @IsNumber()
  @IsNotEmpty()
  buyPrice: number;

  @IsNumber()
  @IsNotEmpty()
  sellPrice: number;

  @IsNumber()
  @IsOptional()
  warehouseId?: number;

}
