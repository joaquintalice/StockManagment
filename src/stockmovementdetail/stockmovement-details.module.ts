import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { StockMovementDetailsService } from './stockmovement-details.service';
import { StockMovementDetailsController } from './stockmovement-details.controller';

@Module({
  controllers: [StockMovementDetailsController],
  providers: [StockMovementDetailsService, PrismaService],
})
export class StockMovementDetailsModule { }
