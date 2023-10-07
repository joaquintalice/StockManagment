import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import CreateCashboxDto from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';
import { PrismaService } from 'src/db/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CashboxService {

  constructor(private prismaService: PrismaService) { }

  async create(createCashboxDto: CreateCashboxDto) {
    try {
      const { amount, description, name } = createCashboxDto
      const cashBox = await this.prismaService.cashBox.create({
        data: {
          name,
          amount,
          description
        }
      });

      return cashBox
    } catch (error) {
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2002': throw new ConflictException(`Unique constraint violation`);
      }
    }
  }

  async findAll() {
    try {
      const boxes = await this.prismaService.cashBox.findMany();
      if (!boxes || boxes.length < 1) throw new NotFoundException(`Cashboxes not found`)
      return boxes
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`Cashboxes not found`)
    }
  }

  async findOne(id: number) {
    try {
      const cashbox = await this.prismaService.cashBox.findUnique({ where: { id: id } })
      if (!cashbox) throw new NotFoundException(`Not found cashbox with id ${id}`);
      return cashbox
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`Cashbox not found`)
    }
  }

  async update(id: number, updateCashboxDto: UpdateCashboxDto) {
    try {
      const { amount, name, description } = updateCashboxDto
      const updateCashbox = await this.prismaService.cashBox.update({
        where: { id: id },
        data: {
          amount,
          name,
          description
        }
      })
      return updateCashbox
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Record to update not found`);
        case error.code === 'P2002': throw new ConflictException(`Unique constraint violation`);
      }
    }
  }

  async delete(id: number) {
    try {
      const cashbox = await this.prismaService.cashBox.delete({ where: { id: id } });
      if (!cashbox) throw new NotFoundException(`Not found cashbox with id ${id}`);
      return cashbox
    } catch (error) {
      console.log(error)
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2025': throw new NotFoundException(`Record to update not found`);
        case error.code === 'P2002': throw new ConflictException(`Unique constraint violation`);
      }
    }
  }
}
