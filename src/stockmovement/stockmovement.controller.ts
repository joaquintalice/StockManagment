import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { StockmovementService } from './stockmovement.service';
import CreateStockmovementDto from './dto/create-stockmovement.dto';
import { UpdateStockmovementDto } from './dto/update-stockmovement.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('stockmovement')
export class StockmovementController {

  constructor(private readonly stockmovementService: StockmovementService) { }

  @Post()
  async create(@Body() createStockmovementDto: CreateStockmovementDto) {
    return await this.stockmovementService.create(createStockmovementDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.stockmovementService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.stockmovementService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateStockmovementDto: UpdateStockmovementDto) {
    return await this.stockmovementService.update(id, updateStockmovementDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.stockmovementService.remove(id);
  }
}
