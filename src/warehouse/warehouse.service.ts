import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateWarehouseDto from './dto/createWarehouse.dto';
import { UpdateWarehouseDto } from './dto/updateWarehouse.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class WarehouseService {
    constructor(private prismaService: PrismaService) { }


    async create(createWarehouseDto: CreateWarehouseDto) {
        try {
            const { name, description, ubication } = createWarehouseDto
            const warehouse = await this.prismaService.warehouse.create({
                data: {
                    name,
                    description,
                    ubication
                }
            }
            )
            return warehouse
        } catch (error) {
            console.log(error)
        }
    }


    async getAll() {
        try {
            const warehouses = await this.prismaService.warehouse.findMany();
            if (!warehouses || warehouses.length < 1) throw new NotFoundException(`Warehouse not found`)
            return warehouses
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`Warehouses not found`);
        }
    }


    async getById(id: number) {
        try {
            const warehouse = await this.prismaService.warehouse.findUnique({ where: { id: id } });
            if (!warehouse) throw new NotFoundException(`Warehouse with id ${id} not found.`)
            return warehouse
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`Warehouse with id ${id} not found`)
        }
    }


    async update(id: number, updateWarehouseDto: UpdateWarehouseDto) {
        try {
            const { name, description, ubication } = updateWarehouseDto;
            const updateWarehouse = await this.prismaService.warehouse.update({
                where: { id: id },
                data: {
                    name,
                    description,
                    ubication
                }
            });

            return updateWarehouse
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`Warehouse with id ${id} not found`)
        }
    }


    async delete(id: number) {
        try {
            const warehouse = await this.prismaService.warehouse.delete({ where: { id: id } });
            return warehouse
        } catch (error) {
            console.log(error)
            switch (error instanceof Prisma.PrismaClientKnownRequestError) {
                case error.code === 'P2025': {
                    throw new NotFoundException(`Record to delete does not exist.`)
                }
            }
        }
    }

}
