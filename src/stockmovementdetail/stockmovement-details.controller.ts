import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import CreateStockMovementDetailDto from './dto/create-stockmovement-details.dto';
import { StockMovementDetailsService } from './stockmovement-details.service';
import { UpdateStockMovementDetailDto } from './dto/update-stockmovement-details.dto';


@Controller('stockmovementdetails')
export class StockMovementDetailsController {

  constructor(private stockMovementDetailsService: StockMovementDetailsService) { }

  @Post()
  async create(@Body() createStockMovementDetailDto: CreateStockMovementDetailDto) {
    return await this.stockMovementDetailsService.create(createStockMovementDetailDto);
  }

  @Post('/create')
  async createMany(@Body() createStockMovementDetailDto: CreateStockMovementDetailDto[]) {
    return await this.stockMovementDetailsService.createMany(createStockMovementDetailDto);
  }

  @Get()
  async getAll() {
    return await this.stockMovementDetailsService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.stockMovementDetailsService.findOne(id);
  }

  @Patch('/:id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateStockMovementDetailDto: UpdateStockMovementDetailDto) {
    return await this.stockMovementDetailsService.update(id, updateStockMovementDetailDto);
  }

  @Delete('/id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.stockMovementDetailsService.remove(id);
  }
}
