import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService, PrismaService],
})
export class WarehouseModule { }
