import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateStockMovementDetailDto from './dto/create-stockmovement-details.dto';
import { UpdateStockMovementDetailDto } from './dto/update-stockmovement-details.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StockMovementDetailsService {

  constructor(private prismaService: PrismaService) { }

  async create(createStockMovementDetailDto: CreateStockMovementDetailDto) {
    try {
      const { buyPrice, prodName, quantity, sellPrice, stockMovementId, unit } = createStockMovementDetailDto
      const smDetail = await this.prismaService.stockMovementDetail.create({
        data: {
          buyPrice,
          unit,
          prodName,
          quantity,
          sellPrice,
          stockMovementId,
        }
      });
      return smDetail
    } catch (error) {
      console.log(error)
    }
  }

  async createMany(createStockMovementDetailDto: CreateStockMovementDetailDto[]) {
    try {
      const smDetail = await this.prismaService.stockMovementDetail.createMany({
        data: createStockMovementDetailDto
      });
      return smDetail
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      const smDetails = await this.prismaService.stockMovementDetail.findMany({ include: { StockMovement: true, articles: true } });
      if (!smDetails || smDetails.length < 1) throw new NotFoundException(`StockMovementDetails not found`);
      return smDetails
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`StockMovementDetails not found`);
      }
    }
  }

  async findOne(id: number) {
    try {
      const smDetail = await this.prismaService.stockMovementDetail.findUnique({ where: { id: id } });
      if (!smDetail) throw new NotFoundException(`StockMovementDetail not found`);
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`StockMovementDetail with id ${id} not found`);
      }
    }
  }

  async update(id: number, updateStockMovementDetailDto: UpdateStockMovementDetailDto) {
    try {
      const { buyPrice, prodName, quantity, sellPrice, stockMovementId, unit } = updateStockMovementDetailDto;
      const updatedSMDetails = await this.prismaService.stockMovementDetail.update({
        where: { id: id },
        data: {
          buyPrice,
          id,
          prodName,
          unit,
          quantity,
          sellPrice,
          stockMovementId
        }
      });
      return updatedSMDetails
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Record to update does not exist.`);
      }
    }
  }

  async remove(id: number) {
    try {
      const smDetail = await this.prismaService.stockMovementDetail.delete({ where: { id: id } });
      if (!smDetail) throw new NotFoundException(`Record to delete does not exist`);
      return smDetail
    } catch (error) {
      console.log(error);
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Record to delete does not exist.`);
      }
    }
  }
}
