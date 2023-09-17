import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import CreateWarehouseDto from './dto/createWarehouse.dto';
import { UpdateWarehouseDto } from './dto/updateWarehouse.dto';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) { }

  @Post()
  createWarehouse(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @Get()
  getAll() {
    return this.warehouseService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.warehouseService.getById(id);
  }

  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return this.warehouseService.update(id, updateWarehouseDto);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.warehouseService.delete(id);
  }
}
