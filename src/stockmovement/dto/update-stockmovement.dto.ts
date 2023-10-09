import { PartialType } from '@nestjs/mapped-types';
import CreateStockmovementDto from './create-stockmovement.dto';

export class UpdateStockmovementDto extends PartialType(CreateStockmovementDto) { }
