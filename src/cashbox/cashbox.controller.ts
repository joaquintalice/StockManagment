import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CashboxService } from './cashbox.service';
import CreateCashboxDto from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';

@Controller('cashbox')
export class CashboxController {
  constructor(private readonly cashboxService: CashboxService) { }

  @Post()
  async create(@Body() createCashboxDto: CreateCashboxDto) {
    return await this.cashboxService.create(createCashboxDto);
  }

  @Get()
  async findAll() {
    return await this.cashboxService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.cashboxService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateCashboxDto: UpdateCashboxDto) {
    return await this.cashboxService.update(id, updateCashboxDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.cashboxService.delete(id);
  }
}
