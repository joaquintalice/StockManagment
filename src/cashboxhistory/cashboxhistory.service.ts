import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCashboxhistoryDto } from './dto/create-cashboxhistory.dto';
import { UpdateCashboxhistoryDto } from './dto/update-cashboxhistory.dto';
import { PrismaService } from 'src/db/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CashboxhistoryService {

  constructor(private prismaService: PrismaService) { }

  async create(createCashboxhistoryDto: CreateCashboxhistoryDto) {
    try {
      const { total } = createCashboxhistoryDto
      const create = await this.prismaService.cashboxHistory.create({
        data: {
          total
        }
      })
      return create
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      const cashboxhistory = await this.prismaService.cashboxHistory.findMany();
      if (!cashboxhistory || cashboxhistory.length < 1) throw new NotFoundException(`Cashbox's history not found`);
      return cashboxhistory
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Cashbox's history not found`);
      }
    }
  }

  async findOne(id: number) {
    try {
      const cashbox = await this.prismaService.cashboxHistory.findUnique({ where: { id: id } });
      if (!cashbox) throw new NotFoundException(`Cashbox's history with id ${id} not found`);
      return cashbox
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Cashbox's history with id ${id} not found`);
      }
    }
  }

  async update(id: number, updateCashboxhistoryDto: UpdateCashboxhistoryDto) {
    try {
      const { total } = updateCashboxhistoryDto
      const updatedCashboxhistory = await this.prismaService.cashboxHistory.update({
        where: { id: id }, data: {
          total
        }
      });
      return updatedCashboxhistory
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Record to update not found`);
      }
    }
  }

  async remove(id: number) {
    try {
      const cashboxhistory = await this.prismaService.cashboxHistory.delete({ where: { id: id } });
      if (!cashboxhistory) throw new NotFoundException(`Not found cashboxhistory with id ${id}`);
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Record to delete does not exist.`);
      }
    }
  }
}
