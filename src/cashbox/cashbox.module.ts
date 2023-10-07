import { Module } from '@nestjs/common';
import { CashboxService } from './cashbox.service';
import { CashboxController } from './cashbox.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [CashboxController],
  providers: [CashboxService, PrismaService],
})
export class CashboxModule { }
