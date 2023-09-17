import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateProductDto from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Injectable()
export class ProductsService {
    constructor(private prismaService: PrismaService) { }


    async create(createProductDto: CreateProductDto) {
        try {
            const { name, sellPrice, buyPrice, quantity, warehouseId, description } = createProductDto;
            const product = await this.prismaService.products.create({
                data: {
                    name,
                    quantity,
                    description,
                    buyPrice,
                    sellPrice,
                    warehouseId
                }
            });
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const products = await this.prismaService.products.findMany();
            if (!products || products.length < 1) throw new NotFoundException(`There's not products.`);
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id: number) {
        try {
            const product = await this.prismaService.products.findUnique({ where: { id: id } });
            if (!product) throw new NotFoundException(`Product with id ${id} not found.`);
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        try {
            const { name, quantity, description, buyPrice, sellPrice, warehouseId } = updateProductDto;
            const product = await this.prismaService.products.update({
                where: { id: id },
                data: {
                    name,
                    quantity,
                    description,
                    buyPrice,
                    sellPrice,
                    warehouseId
                }
            });
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id: number) {
        try {
            const product = await this.prismaService.products.delete({ where: { id: id } });
            if (!product) throw new NotFoundException(`Product with id: ${id} not found.`)
            return product;
        } catch (error) {
            console.log(error);
        }
    }

}
