import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateWarehouseDto from './dto/createWarehouse.dto';
import { UpdateWarehouseDto } from './dto/updateWarehouse.dto';

@Injectable()
export class WarehouseService {
    constructor(private prismaService: PrismaService) { }


    async create(createWarehouseDto: CreateWarehouseDto) {
        try {
            const { name, description } = createWarehouseDto
            const warehouse = await this.prismaService.warehouse.create({
                data: {
                    name,
                    description
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
            return warehouses
        } catch (error) {
            console.log(error)
        }
    }


    async getById(id: number) {
        try {
            const warehouse = await this.prismaService.warehouse.findUnique({ where: { id: id } });
            return warehouse
        } catch (error) {
            console.log(error)
        }
    }


    async update(id: number, updateWarehouseDto: UpdateWarehouseDto) {
        try {
            const { name, description } = updateWarehouseDto;
            const updateWarehouse = this.prismaService.warehouse.update({
                where: { id: id },
                data: {
                    name,
                    description
                }
            });

            return updateWarehouse
        } catch (error) {
            console.log(error)
        }
    }


    async delete(id: number) {
        try {
            const warehouse = await this.prismaService.warehouse.delete({ where: { id: id } });
            return warehouse
        } catch (error) {
            console.log(error)
        }
    }

}
