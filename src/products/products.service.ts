import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateProductDto from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) { }

  async create(createProductsDto: CreateProductDto) {
    try {
      const { name, sellPrice, buyPrice, quantity } = createProductsDto;
      const createdProducts = await this.prismaService.products.create({
        data: {
          name,
          quantity,
          buyPrice,
          sellPrice,
          warehouseId: 1
        },
      });

      return createdProducts;
    } catch (error) {
      console.error(error);
      switch (error instanceof Prisma.PrismaClientKnownRequestError) {
        case error.code === 'P2002': throw new ConflictException(`Unique constraint violation.`)
      }
      throw new Error('Not handled error');
    }
  }


  async getAll() {
    try {
      const products = await this.prismaService.products.findMany();
      if (!products || products.length < 1)
        throw new NotFoundException(`There's not products.`);
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id: number) {
    try {
      const product = await this.prismaService.products.findUnique({
        where: { id: id },
      });
      if (!product)
        throw new NotFoundException(`Product with id: ${id} not found.`);
      return product;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(error.message);
      }
      throw new NotFoundException(`Product with id: ${id} not found.`)
    }
  }

  async getByName(id: string) {
    try {
      const product = await this.prismaService.products.findUnique({
        where: { name: id },
      });
      if (!product)
        throw new NotFoundException(`Product with name: ${id} not found.`);
      return product;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(error.message);
      }
      throw new NotFoundException(`Product with name: ${id} not found.`)
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const { name, quantity, buyPrice, sellPrice, warehouseId } =
        updateProductDto;
      const product = await this.prismaService.products.update({
        where: { id: id },
        data: {
          name,
          quantity,
          buyPrice,
          sellPrice,
          warehouseId,
        },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: number) {
    try {
      const product = await this.prismaService.products.delete({
        where: { id: id },
      });
      if (!product)
        throw new NotFoundException(`Product with id: ${id} not found.`);
      return product;
    } catch (error) {
      console.log(error);
    }
  }
}
