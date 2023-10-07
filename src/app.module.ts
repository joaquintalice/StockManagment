import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './db/prisma.service';
import { StockmovementModule } from './stockmovement/stockmovement.module';
import { SmdetailsModule } from './smdetails/smdetails.module';
import { CashboxModule } from './cashbox/cashbox.module';
import { CashboxhistoryModule } from './cashboxhistory/cashboxhistory.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    WarehouseModule,
    ProductsModule,
    StockmovementModule,
    SmdetailsModule,
    CashboxModule,
    CashboxhistoryModule
  ],
  controllers: [],
  providers: [
    PrismaService
  ],
})
export class AppModule { }
