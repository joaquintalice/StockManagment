import { Module } from '@nestjs/common';
import { CashboxhistoryService } from './cashboxhistory.service';
import { CashboxhistoryController } from './cashboxhistory.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [CashboxhistoryController],
  providers: [CashboxhistoryService, PrismaService],
})
export class CashboxhistoryModule { }
