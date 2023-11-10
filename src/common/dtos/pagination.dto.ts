import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";


export class PaginationDto {


    @IsOptional()
    @IsPositive()
    @Type(() => Number) // transforma de string a number
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type(() => Number) // transforma de string a number
    offset?: number;
}