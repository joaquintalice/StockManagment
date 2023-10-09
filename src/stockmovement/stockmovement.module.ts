import { Module } from '@nestjs/common';
import { StockmovementService } from './stockmovement.service';
import { StockmovementController } from './stockmovement.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [StockmovementController],
  providers: [StockmovementService, PrismaService],
})
export class StockmovementModule { }
