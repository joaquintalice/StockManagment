import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class CreateWarehouseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  @IsNotEmpty()
  ubication: string;
}
