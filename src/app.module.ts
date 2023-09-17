import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './db/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), WarehouseModule, ProductsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
