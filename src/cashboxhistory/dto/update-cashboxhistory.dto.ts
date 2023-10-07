import { PartialType } from '@nestjs/mapped-types';
import { CreateCashboxhistoryDto } from './create-cashboxhistory.dto';

export class UpdateCashboxhistoryDto extends PartialType(CreateCashboxhistoryDto) {}
