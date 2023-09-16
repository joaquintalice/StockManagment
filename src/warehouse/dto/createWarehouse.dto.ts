import { IsOptional, IsString } from "class-validator"

export default class CreateWarehouseDto {


    @IsString()
    name: string

    @IsOptional()
    @IsString()
    description?: string

}