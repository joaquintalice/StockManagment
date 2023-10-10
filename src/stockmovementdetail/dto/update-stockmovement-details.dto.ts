import { PartialType } from '@nestjs/mapped-types';
import CreateStockMovementDetailDto from './create-stockmovement-details.dto';


export class UpdateStockMovementDetailDto extends PartialType(CreateStockMovementDetailDto) { }
