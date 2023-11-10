import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import CreateStockmovementDto from './dto/create-stockmovement.dto';
import { UpdateStockmovementDto } from './dto/update-stockmovement.dto';
import { PrismaService } from 'src/db/prisma.service';
import { Prisma } from '@prisma/client';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class StockmovementService {

  constructor(private prismaService: PrismaService) { }

  async create(createStockmovementDto: CreateStockmovementDto) {
    try {
      const { total } = createStockmovementDto
      const stockMovement = await this.prismaService.stockMovement.create({
        data: {
          total
        }
      });
      return stockMovement
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2002': throw new ConflictException(`Unique constraint violation`);
      }
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 10, offset = 0 } = paginationDto
      const stockMovement = await this.prismaService.stockMovement.findMany({
        skip: offset,
        take: limit,
        include: { stockMovementDetail: true },
        orderBy: {
          date: 'desc'
        }
      }
      );
      if (!stockMovement || stockMovement.length < 1) throw new NotFoundException(`StockMovement not found`);
      return stockMovement
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`StockMovement not found`);
      }
    }
  }

  async findOne(id: number) {
    try {
      const stockMovement = await this.prismaService.stockMovement.findUnique({ where: { id: id } });
      if (!stockMovement) throw new NotFoundException(`StockMovement with id ${id} not found`);
      return stockMovement
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`StockMovement with id ${id} not found`);
      }
    }
  }

  async update(id: number, updateStockmovementDto: UpdateStockmovementDto) {
    try {
      const { total } = updateStockmovementDto;
      const stockMovementUpdated = await this.prismaService.stockMovement.update({
        where: { id: id },
        data: {
          total
        }
      });
      return stockMovementUpdated
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Record to update does not exist.`);
      }
    }
  }

  async remove(id: number) {
    try {
      const stockMovement = await this.prismaService.stockMovement.delete({ where: { id: id } });
      if (!stockMovement) throw new NotFoundException(`Record to delete does not exist.`);
      return stockMovement
    } catch (error) {
      console.log(error);
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Record to delete does not exist.`);
      }
    }
  }
}
