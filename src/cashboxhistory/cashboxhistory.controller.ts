import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CashboxhistoryService } from './cashboxhistory.service';
import { CreateCashboxhistoryDto } from './dto/create-cashboxhistory.dto';
import { UpdateCashboxhistoryDto } from './dto/update-cashboxhistory.dto';

@Controller('cashboxhistory')
export class CashboxhistoryController {
  constructor(private readonly cashboxhistoryService: CashboxhistoryService) { }

  @Post()
  async create(@Body() createCashboxhistoryDto: CreateCashboxhistoryDto) {
    return await this.cashboxhistoryService.create(createCashboxhistoryDto);
  }

  @Get()
  async findAll() {
    return await this.cashboxhistoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.cashboxhistoryService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateCashboxhistoryDto: UpdateCashboxhistoryDto) {
    return await this.cashboxhistoryService.update(id, updateCashboxhistoryDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.cashboxhistoryService.remove(id);
  }
}
